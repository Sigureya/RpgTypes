import type {
  ScalaParam,
  ObjectParamsV5,
  ClassifiedPluginParams,
  StructRefParam,
  PluginParamEx,
} from "@RpgTypes/rmmz/plugin";
import {
  convertStructSchema,
  toObjectPluginParams,
} from "@RpgTypes/rmmz/plugin";
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

const jjFF = (
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

  return [...structFrames, ...structArrayFrames];
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
    state.errs.push({
      code: errors.cyclicStruct,
      path: frame.basePath,
    });
    return state;
  }

  const structSchema = structMap.get(frame.schemaName);
  if (!structSchema) {
    state.errs.push({
      code: errors.undefinedStruct,
      path: frame.basePath,
    });
    return state;
  }

  if (structSchema.scalas.length > 0 || structSchema.scalaArrays.length > 0) {
    // 現在ノードを追加（pre-order）

    const current: StructPropertysPath = createNode(structSchema, {
      path: frame.basePath,
      structName: frame.schemaName,
    });
    state.items.push(current);
  }

  const childrenDesired: Frame[] = jjFF(frame, structSchema);

  // LIFO スタックなので、desired の逆順で push する（reduce を使用して void 戻りを避ける）
  childrenDesired
    .slice()
    .reverse()
    .reduce<Frame[]>((acc, f) => {
      state.frames.push(f);
      return acc;
    }, []);

  return state;
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
