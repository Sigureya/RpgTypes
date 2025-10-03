import type {
  PluginParam,
  PluginStructSchemaArray,
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import {
  isStructArrayParam,
  isStructParam,
} from "@RpgTypes/rmmz/plugin/isStruct";

const isXXStrurct = (
  param: PrimitiveParam,
  visited: ReadonlySet<string>
): param is StructRefParam | StructArrayRefParam => {
  if (isStructParam(param) || isStructArrayParam(param)) {
    return !!param.struct && !visited.has(param.struct);
  }
  return false;
};

function collectStructDeps(
  name: string,
  map: ReadonlyMap<string, ReadonlyArray<PrimitiveParam>>,
  visited: Set<string>
): string[] {
  const struct = map.get(name);
  if (!struct) {
    return [];
  }
  return struct
    .filter((param) => isXXStrurct(param, visited))
    .flatMap((param) => {
      const depName: string = param.struct;
      visited.add(depName);
      return [depName, ...collectStructDeps(depName, map, visited)];
    });
}

export const structDep = (
  structName: string,
  map: ReadonlyMap<string, ReadonlyArray<PrimitiveParam>>
): string[] => {
  const visited = new Set<string>();
  return collectStructDeps(structName, map, visited);
};

export const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};
