import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { makeScalaPath } from "./paramScala";
import type { Result3 } from "./types/struct2";

function collectFromSchema(
  schemaName: string,
  basePath: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] {
  const schema = structMap.get(schemaName);
  if (!schema) {
    return [];
  }

  const current: Result3 = makeScalaPath(schema, basePath);

  const structChildren = schema.structs.reduce<Result3[]>(
    (acc, s) =>
      acc.concat(
        collectFromSchema(s.attr.struct, `${basePath}.${s.name}`, structMap)
      ),
    []
  );

  const structArrayChildren = schema.structArrays.reduce<Result3[]>(
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
  return params.reduce<Result3[]>(
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
