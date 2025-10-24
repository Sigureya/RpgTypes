import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import type { Result3 } from "./types/struct2";

function makeScalasPath(
  base: string,
  scalas: ReadonlyArray<PluginParam>
): string {
  if (!scalas || scalas.length === 0) {
    return `${base}[]`;
  }
  const names = scalas
    .map((s) => s.name)
    .map((n) => `"${n}"`)
    .join(",");
  return `${base}[${names}]`;
}

function makeScalaArraysPaths(
  base: string,
  scalaArrays: ReadonlyArray<PluginParam>
): string[] {
  if (!scalaArrays || scalaArrays.length === 0) {
    return [];
  }
  return scalaArrays.map((p) => `${base}.${p.name}[*]`);
}

/**
 * 指定した struct 名（schema）の内容を basePath を起点に再帰的に収集して Result3[] を返す
 */
function collectFromSchema(
  schemaName: string,
  basePath: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>,
  out: Result3[]
): void {
  const schema = structMap.get(schemaName);
  if (!schema) {
    return;
  }

  // scalas のパス（basePath["a","b"] 形式）
  const scalasPath = makeScalasPath(basePath, schema.scalas ?? []);
  // scalaArrays のパス（basePath.prop[*] 形式）
  const scalaArrays = makeScalaArraysPaths(basePath, schema.scalaArrays ?? []);

  out.push({
    scalas: scalasPath,
    scalaArrays,
  });

  // struct fields -> 再帰（普通のドットアクセス）
  for (const s of schema.structs ?? []) {
    const childBase = `${basePath}.${s.name}`;
    collectFromSchema(s.attr.struct, childBase, structMap, out);
  }

  // struct array fields -> 再帰（ワイルドカード付き）
  for (const sa of schema.structArrays ?? []) {
    const childBase = `${basePath}.${sa.name}[*]`;
    collectFromSchema(sa.attr.struct, childBase, structMap, out);
  }
}

/**
 * PluginParam<StructRefParam> の配列を root(parent) を起点に Result3[] に展開する
 */
export function getPathFromStructParam(
  params: ReadonlyArray<PluginParam<StructRefParam>>,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] {
  const result: Result3[] = [];
  for (const p of params) {
    const base = `${parent}.${p.name}`;
    collectFromSchema(p.attr.struct, base, structMap, result);
  }
  return result;
}

/**
 * struct schema 名と parent を渡して Result3[] を得る補助関数
 */
export function getPathFromStructSchema(
  structName: string,
  parent: string,
  structMap: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] {
  const result: Result3[] = [];
  const base = `${parent}`;
  collectFromSchema(structName, base, structMap, result);
  return result;
}
