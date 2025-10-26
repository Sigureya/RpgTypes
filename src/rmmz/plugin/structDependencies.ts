import type {
  PrimitiveParam,
  StructRefParam,
  StructArrayRefParam,
  PluginStructSchemaArray,
  PluginParam,
} from "./core";
import { isStructArrayParam, isStructParam } from "./core";

const hasStruct = (
  param: PrimitiveParam,
  visited: ReadonlySet<string>
): param is StructRefParam | StructArrayRefParam => {
  if (isStructParam(param) || isStructArrayParam(param)) {
    return !!param.struct && !visited.has(param.struct);
  }
  return false;
};

const collectStructDeps = (
  name: string,
  map: ReadonlyMap<string, ReadonlyArray<PrimitiveParam>>,
  visited: Set<string>
): string[] => {
  const struct = map.get(name);
  if (!struct) {
    return [];
  }
  return struct
    .filter((param) => hasStruct(param, visited))
    .flatMap((param) => {
      const depName: string = param.struct;
      visited.add(depName);
      return [depName, ...collectStructDeps(depName, map, visited)];
    });
};

export const structDependencies = (
  structName: string,
  map: ReadonlyMap<string, ReadonlyArray<PrimitiveParam>>
): string[] => {
  const visited = new Set<string>();
  return collectStructDeps(structName, map, visited);
};

// export const structDependenciesEx = (
//   structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>
// ): Map<string, string[]> => {
//   const map = createStructMap(structs);
//   const items = Array.from(map.keys()).map(
//     (structName: string): [string, string[]] => [
//       structName,
//       structDependencies(structName, map),
//     ]
//   );
//   return new Map(items);
// };

export const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};
