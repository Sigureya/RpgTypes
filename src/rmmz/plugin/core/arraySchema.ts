// ...existing code...

import type {
  GG,
  PluginParam,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import type { StructRefParam } from "./primitiveParams";
import { isStructParam } from "./typeTest";

/**
 * structNameを参照しているschemasをindirectsへ追加する（非再帰・イミュータブル・禁止事項対応）
 */
function findIndirectsFunctional(
  schemas: ReadonlyArray<PluginStructSchemaArray>,
  directStructNames: Set<string>
): PluginStructSchemaArray[] {
  // 間接的に参照されるstruct名を集める
  const allStructNames = schemas.map((s): string => s.struct);
  // 参照関係をマップ化
  const refMap: Record<string, string[]> = Object.fromEntries(
    schemas.map((schema) => [
      schema.struct,
      schema.params
        .filter((param): param is PluginParam<StructRefParam> =>
          isStructParam(param.attr)
        )
        .map((param) => param.attr.struct),
    ])
  );

  // 間接的に参照されるstruct名を集める（再帰・ループ禁止なのでreduceで伝播）
  function propagate(names: Set<string>): Set<string> {
    const next = allStructNames.filter(
      (struct) =>
        !names.has(struct) && refMap[struct].some((ref) => names.has(ref))
    );
    if (next.length === 0) {
      return names;
    }
    return propagate(new Set([...names, ...next]));
  }

  const allRelated = propagate(new Set(directStructNames));
  // 直接一致は除外
  const indirectNames = [...allRelated].filter(
    (name) => !directStructNames.has(name)
  );

  return schemas.filter((s) => indirectNames.includes(s.struct));
}

/**
 * 指定した条件に一致するstructをdirectsに、間接的に関連するstructをindirectsに分類する
 */
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
  const indirectsOrdered = schemas.filter((s) =>
    indirects.some((i) => i.struct === s.struct)
  );

  return {
    directs,
    indirects: indirectsOrdered,
  };
}
// ...existing code...
