// ...existing code...
import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { makeScalaParams, makeScalaArrayParams } from "./paramScala";
import type { ErrorCodes } from "./types/errorTypes";
import type {
  StructPropertysPath,
  Result4,
  StructPathError,
} from "./types/struct2";

const ERROR_CODE = {
  undefinedStruct: "undefined_struct",
  cyclicStruct: "cyclic_struct",
} as const satisfies ErrorCodes;

interface Frame {
  schemaName: string;
  basePath: string;
  // visited を廃止し、ancestor list (配列) で循環検出を行う
  ancestry: string[];
}
interface State {
  frames: Frame[];
  items: StructPropertysPath[];
  errs: StructPathError[];
}

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
  const name = frame.schemaName;
  const path = frame.basePath;
  const ancestry = frame.ancestry;

  // 循環チェック（ancestry に同じ schemaName が含まれていれば循環）
  if (ancestry.includes(name)) {
    state.errs.push({ code: errors.cyclicStruct, path });
    return state;
  }

  const schema = structMap.get(name);
  if (!schema) {
    state.errs.push({ code: errors.undefinedStruct, path });
    return state;
  }

  if (schema.scalas.length > 0 || schema.scalaArrays.length > 0) {
    // 現在ノードを追加（pre-order）

    const current: StructPropertysPath = {
      structName: name,
      scalaArrays: makeScalaArrayParams(schema.scalaArrays, path),
      scalas:
        schema.scalas.length > 0
          ? makeScalaParams(schema.scalas, path)
          : undefined,
    };
    state.items.push(current);
  }

  // childAncestry を作る（配列を concat して新しい配列を作成）
  const childAncestry = ancestry.concat(name);

  // 子フレームを作成（希望する処理順: structFrames -> structArrayFrames）
  const structFrames: Frame[] = schema.structs.map(
    (s): Frame => ({
      schemaName: s.attr.struct,
      basePath: `${path}.${s.name}`,
      ancestry: childAncestry,
    })
  );
  const structArrayFrames: Frame[] = schema.structArrays.map(
    (sa): Frame => ({
      schemaName: sa.attr.struct,
      basePath: `${path}.${sa.name}[*]`,
      ancestry: childAncestry,
    })
  );

  // childrenDesired: structs の順で先に処理し、その後 structArrays を処理したい
  const childrenDesired: Frame[] = structFrames.concat(structArrayFrames);

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
): Result4 {
  const initialFrame: Frame = {
    schemaName,
    basePath,
    ancestry: [],
  };

  const state: State = {
    frames: [initialFrame],
    items: [],
    errs: [],
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

// ...existing code...
export function getPathFromStructParam(
  params: ReadonlyArray<PluginParam<StructRefParam>>,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes = ERROR_CODE
): Result4 {
  return params.reduce<Result4>(
    (result, param) => {
      const res: Result4 = getPathFromStructSchema(
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

/**
 * struct schema 名と parent を渡して Result3[] を得る補助関数
 */
export function getPathFromStructSchema(
  structName: string,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes = ERROR_CODE
): Result4 {
  return collectFromSchema(structName, parent, structMap, errors);
}
