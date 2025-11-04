import type {
  ClassifiedPluginParams,
  StructRefParam,
  PluginParamEx,
} from "@RpgTypes/rmmz/plugin";
import { toObjectPluginParams } from "@RpgTypes/rmmz/plugin";
import { makeScalaArrayParams, makeScalaParams } from "./paramScala";
import type {
  ErrorCodes,
  StructPropertysPath,
  StructPathError,
  StructPathResult,
} from "./types";

const ERROR_CODE = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct",
} as const satisfies ErrorCodes;

interface Frame {
  schemaName: string;
  basePath: string;
  ancestry: string[];
}
interface State {
  frames: Frame[];
  items: StructPropertysPath[];
  errs: StructPathError[];
}

const createNode = (
  structSchema: ClassifiedPluginParams,
  { path, structName }: { path: string; structName: string }
): StructPropertysPath => {
  const os = toObjectPluginParams(structSchema.scalas);

  return {
    os: os,
    // struct: structSchema,
    structName: structName,
    scalaArrays: makeScalaArrayParams(structSchema.scalaArrays, path),
    scalas:
      structSchema.scalas.length > 0
        ? makeScalaParams(structSchema.scalas, path)
        : undefined,
  };
};

const createChildFrames = (
  lastFrame: Frame,
  structSchema: ClassifiedPluginParams
): Frame[] => {
  const childAncestry: string[] = lastFrame.ancestry.concat(
    lastFrame.schemaName
  );
  const path: string = lastFrame.basePath;
  // // 子フレームを作成（希望する処理順: structFrames -> structArrayFrames）
  const structFrames: Frame[] = structSchema.structs.map(
    (s): Frame => ({
      schemaName: s.attr.struct,
      basePath: `${path}.${s.name}`,
      ancestry: childAncestry,
    })
  );
  const structArrayFrames: Frame[] = structSchema.structArrays.map(
    (sa): Frame => ({
      schemaName: sa.attr.struct,
      basePath: `${path}.${sa.name}[*]`,
      ancestry: childAncestry,
    })
  );
  // childrenDesired: structs の順で先に処理し、その後 structArrays を処理したい

  return [...structFrames, ...structArrayFrames].reverse(); // LIFO スタックなので、desired の逆順で push
};

const addNewNode = (
  state: State,
  frame: Frame,
  structSchema: ClassifiedPluginParams,
  childrenDesired: ReadonlyArray<Frame>
): State => {
  if (structSchema.scalas.length > 0 || structSchema.scalaArrays.length > 0) {
    // 現在ノードを追加（pre-order）

    const current: StructPropertysPath = createNode(structSchema, {
      path: frame.basePath,
      structName: frame.schemaName,
    });
    return {
      frames: [...state.frames, ...childrenDesired],
      items: [...state.items, current],
      errs: state.errs,
    };
  }
  return childrenDesired.length > 0
    ? {
        frames: [...state.frames, ...childrenDesired],
        items: state.items,
        errs: state.errs,
      }
    : state;
};

const stepState = (
  state: State,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes
): State => {
  if (state.frames.length === 0) {
    return state;
  }

  // スタック操作：pop / push を用いてミュータブルに集約
  const frame = state.frames.pop() as Frame;

  // 循環チェック（ancestry に同じ schemaName が含まれていれば循環）
  if (frame.ancestry.includes(frame.schemaName)) {
    return {
      frames: state.frames,
      items: state.items,
      errs: [
        ...state.errs,
        {
          code: errors.cyclicStruct,
          path: frame.basePath,
        },
      ],
    };
  }

  const structSchema = structMap.get(frame.schemaName);
  if (!structSchema) {
    return {
      frames: state.frames,
      items: state.items,
      errs: [
        ...state.errs,
        {
          code: errors.undefinedStruct,
          path: frame.basePath,
        },
      ],
    };
  }

  const childrenDesired: Frame[] = createChildFrames(frame, structSchema);

  return addNewNode(state, frame, structSchema, childrenDesired);
};

function collectFromSchema(
  schemaName: string,
  basePath: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes
): StructPathResult {
  const state: State = {
    items: [],
    errs: [],
    frames: [
      {
        schemaName,
        basePath,
        ancestry: [],
      },
    ],
  };

  // 上限反復回数 — safe upper bound
  const maxPass: number = Math.max(1, structMap.size * 3 + 5);

  // reduce を使って stepState を繰り返す（for/while を使わない）
  const finalState = Array.from({ length: maxPass }).reduce<State>(
    (s) => (s.frames.length === 0 ? s : stepState(s, structMap, errors)),
    state
  );

  return { items: finalState.items, errors: finalState.errs };
}

export function getPathFromStructParam(
  params: ReadonlyArray<PluginParamEx<StructRefParam>>,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes = ERROR_CODE
): StructPathResult {
  return params.reduce<StructPathResult>(
    (result, param) => {
      const res: StructPathResult = getPathFromStructSchema(
        param.attr.struct,
        `${parent}.${param.name}`,
        structMap,
        errors
      );
      return {
        items: result.items.concat(res.items),
        errors: result.errors.concat(res.errors),
      };
    },
    { items: [], errors: [] }
  );
}

export function getPathFromStructSchema(
  structName: string,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes = ERROR_CODE
): StructPathResult {
  return collectFromSchema(structName, parent, structMap, errors);
}
