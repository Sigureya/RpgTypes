import type {
  GG,
  PluginParam,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import type { StructRefParam } from "./primitiveParams";

/**
 * schemasから参照関係マップを生成する
 */
function createRefMap(
  schemas: ReadonlyArray<PluginStructSchemaArray>
): Record<string, PluginParam<StructRefParam>[]> {
  return Object.fromEntries(
    schemas.map((schema) => [
      schema.struct,
      schema.params.filter(
        (param: PluginParam): param is PluginParam<StructRefParam> =>
          param.attr.kind === "struct"
      ),
    ])
  );
}

/**
 * 間接的に参照されるstruct名を集める（再帰・ループ禁止・state型で伝播）
 */
function propagate(
  allStructNames: ReadonlyArray<string>,
  refMap: Record<string, PluginParam<StructRefParam>[]>,
  initialNames: Set<string>
): Set<string> {
  // 状態を保持する型
  type State = { names: Set<string>; changed: boolean };

  // 最大伝播回数分だけreduceで状態を伝播
  const finalState = allStructNames.reduce<State>(
    (state) => {
      if (!state.changed) {
        return state;
      }
      const next: string[] = allStructNames.filter(
        (struct) =>
          !state.names.has(struct) &&
          refMap[struct].some((ref) => state.names.has(ref.attr.struct))
      );
      if (next.length === 0) {
        return { names: state.names, changed: false };
      }
      return {
        names: new Set([...state.names, ...next]),
        changed: true,
      };
    },
    { names: initialNames, changed: true }
  );

  return finalState.names;
}
/**
 * structNameを参照しているschemasをindirectsへ追加する（非再帰・イミュータブル・簡略化版）
 */
function findIndirectsFunctional(
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  directStructNames: ReadonlySet<string>
): Set<string> {
  const refMap = createRefMap(schemas);
  const allStructNames = Object.keys(refMap);
  // propagate関数を利用
  return propagate(allStructNames, refMap, new Set(directStructNames));
}

export function filterStructs(
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  predicate: (param: PluginParam) => boolean
): GG {
  // 直接一致するstructを抽出
  const directs = schemas.filter((schema) => schema.params.some(predicate));
  const directStructNames = new Set(directs.map((s) => s.struct));

  // 間接的に関連するstructを抽出（非再帰・イミュータブル）
  const indirects = findIndirectsFunctional(schemas, directStructNames);

  // indirectsの順序をテスト期待値に合わせるため、schemasの順でフィルタ
  const indirectsOrdered = schemas.filter(
    (s) => !directStructNames.has(s.struct) && indirects.has(s.struct)
  );

  return {
    directs,
    indirects: indirectsOrdered,
  };
}
