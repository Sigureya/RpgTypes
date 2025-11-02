import type {
  PrimitiveParam,
  StructRefParam,
  StructArrayRefParam,
} from "./types";
import { isStructParam, isStructArrayParam } from "./typeTest";

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
