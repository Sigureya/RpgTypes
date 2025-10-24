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
  visited: ReadonlySet<string>;
}
interface State {
  frames: Frame[];
  items: StructPropertysPath[];
  errs: StructPathError[];
}

/**
 * 1ステップ分の状態遷移を行う純粋関数（collectFromSchema の外側へ移動）
 * - 禁止事項(再帰/for/while/void戻り)に従い、State を返す設計
 */
const stepState = (
  state: State,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes
): State => {
  const frames = state.frames;
  if (frames.length === 0) {
    return state;
  }

  // LIFO: 最後の要素を取り出す（pop の代わりに slice で新しい配列を作成）
  const frame = frames[frames.length - 1];
  const rest = frames.slice(0, frames.length - 1);

  const name = frame.schemaName;
  const path = frame.basePath;
  const vis = frame.visited;

  // cyclic check
  if (vis.has(name)) {
    return {
      frames: rest,
      items: state.items,
      errs: state.errs.concat([{ code: errors.cyclicStruct, path }]),
    };
  }

  const schema = structMap.get(name);
  if (!schema) {
    return {
      frames: rest,
      items: state.items,
      errs: state.errs.concat([{ code: errors.undefinedStruct, path }]),
    };
  }

  // 現在ノードを追加（pre-order）
  const current: StructPropertysPath = {
    structName: name,
    scalas: makeScalaParams(schema.scalas, path),
    scalaArrays: makeScalaArrayParams(schema.scalaArrays, path),
  };

  // childVisited を作る（新しい Set を返す）
  const childVisited = new Set(vis);
  childVisited.add(name);

  // 子フレームを作成（structs -> structArrays の順に展開するため push 順序を調整）
  const structFrames: Frame[] = schema.structs.map(
    (s): Frame => ({
      schemaName: s.attr.struct,
      basePath: `${path}.${s.name}`,
      visited: new Set(childVisited),
    })
  );
  const structArrayFrames: Frame[] = schema.structArrays.map(
    (sa): Frame => ({
      schemaName: sa.attr.struct,
      basePath: `${path}.${sa.name}[*]`,
      visited: new Set(childVisited),
    })
  );

  // 元の実装と同じ処理順（structs の子を先に、structArrays の子を後で処理）にするため、
  // スタックに push する配列を逆順で組み立てる。
  const childrenToPush = structArrayFrames
    .slice()
    .reverse()
    .concat(structFrames.slice().reverse());

  const newFrames = rest.concat(childrenToPush);

  return {
    frames: newFrames,
    items: state.items.concat([current]),
    errs: state.errs,
  };
};

/**
 * イミュータブルな状態を返す一ステップ関数を使ったイテレーティブ実装。
 * 禁止条件に合わせて for/while/再帰 を使わずにスタック処理を行う。
 */
function collectFromSchema(
  schemaName: string,
  basePath: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  errors: ErrorCodes,
  visited: ReadonlySet<string>
): Result4 {
  const initialFrame: Frame = {
    schemaName,
    basePath,
    visited: new Set(Array.from(visited)),
  };

  const initialState: State = {
    frames: [initialFrame],
    items: [],
    errs: [],
  };

  // 上限反復回数 — structMap.size に依存（充分に大きければ処理は完了する）
  const maxPass = Math.max(1, structMap.size * 3 + 5);

  // reduce を使って stepState を複数回適用（ループではなく高階関数）
  const finalState = Array.from({ length: maxPass }).reduce<State>((s) => {
    // 早期終了: フレームが空なら以降のステップは noop
    return s.frames.length === 0 ? s : stepState(s, structMap, errors);
  }, initialState);

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
  return collectFromSchema(structName, parent, structMap, errors, new Set());
}
// ...existing code...
