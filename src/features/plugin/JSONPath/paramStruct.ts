import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { getScalaParams, getScalaArrayParams } from "./paramScala";
import type { Result3 } from "./types/struct2";

/**
 * 指定した struct 名（schema）の内容を basePath を起点に再帰的に収集して Result3[] を返す
 * - for 禁止
 * - void を返さない（常に Result3[] を返す）
 * - 各 Result3 に型名情報 (struct) を追加する
 */
function collectFromSchema(
  schemaName: string,
  basePath: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] {
  const schema = structMap.get(schemaName);
  if (!schema) {
    return [];
  }

  // 現在ノード（このスキーマ由来）の Result3（struct に schemaName を含める）
  const current: Result3 = {
    struct: schemaName,
    scalas: getScalaParams(schema.scalas, basePath),
    scalaArrays: getScalaArrayParams(schema.scalaArrays, basePath),
  };

  // structs（通常の入れ子）の再帰結果を reduce で取得
  const structChildren = (schema.structs ?? []).reduce<Result3[]>(
    (acc, s) =>
      acc.concat(
        collectFromSchema(s.attr.struct, `${basePath}.${s.name}`, structMap)
      ),
    []
  );

  // structArrays（配列入れ子）の再帰結果を reduce で取得
  const structArrayChildren = (schema.structArrays ?? []).reduce<Result3[]>(
    (acc, sa) =>
      acc.concat(
        collectFromSchema(
          sa.attr.struct,
          `${basePath}.${sa.name}[*]`,
          structMap
        )
      ),
    []
  );

  return [current, ...structChildren, ...structArrayChildren];
}

/**
 * PluginParam<StructRefParam> の配列を root(parent) を起点に Result3[] に展開する
 */
export function getPathFromStructParam(
  params: ReadonlyArray<PluginParam<StructRefParam>>,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] {
  return (params ?? []).reduce<Result3[]>(
    (acc, p) =>
      acc.concat(
        collectFromSchema(p.attr.struct, `${parent}.${p.name}`, structMap)
      ),
    []
  );
}

/**
 * struct schema 名と parent を渡して Result3[] を得る補助関数
 */
export function getPathFromStructSchema(
  structName: string,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] {
  return collectFromSchema(structName, parent, structMap);
}
