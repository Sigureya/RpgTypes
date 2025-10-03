import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";

// 再帰関数の戻り値を string[] に変更し、for文を使わずmap/filter/reduceで処理
function collectStructDeps(
  name: string,
  map: ReadonlyMap<string, PluginStructSchemaArray>,
  visited: Set<string>
): string[] {
  const struct = map.get(name);
  if (!struct) {
    return [];
  }
  return struct.params
    .filter(
      (param) =>
        param.attr.kind === "struct" &&
        param.attr.struct &&
        !visited.has(param.attr.struct)
    )
    .flatMap((param) => {
      const depName = param.attr.struct!;
      visited.add(depName);
      return [depName, ...collectStructDeps(depName, map, visited)];
    });
}

export const structDep = (
  structName: string,
  map: ReadonlyMap<string, PluginStructSchemaArray>
): string[] => {
  const visited = new Set<string>();
  return collectStructDeps(structName, map, visited);
};

export const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray>
): Map<string, PluginStructSchemaArray> => {
  return new Map(structs.map((s) => [s.struct, s]));
};
