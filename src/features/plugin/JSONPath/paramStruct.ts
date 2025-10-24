import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { makeScalaPath } from "./paramScala";
import type { Result3 } from "./types/struct2";

export const getPathFromStructParam = (
  params: ReadonlyArray<PluginParam<StructRefParam>>,
  parent: string,
  map: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] => {
  return getPathFromStructParamCore(params, parent, map);
};

export const getPathFromStructSchema = (
  schema: ClassifiedPluginParams,
  parent: string,
  map: ReadonlyMap<string, ClassifiedPluginParams>
): Result3[] => {
  return getPathFromStruct2(schema, parent, map);
};

const getPathFromStruct2 = (
  structSchema: ClassifiedPluginParams,
  parent: string,
  map: ReadonlyMap<string, ClassifiedPluginParams>,
  visited: ReadonlySet<string> = new Set<string>()
): Result3[] => {
  const currentPath = `${parent}`;
  const newItem: Result3 = makeScalaPath(structSchema, currentPath);
  const childStructs: Result3[] = getPathFromStructParamCore(
    structSchema.structs,
    currentPath,
    map
  );
  const childStructs2: Result3[] = structSchema.structs.reduce<Result3[]>(
    (acc, param) => {
      if (visited.has(param.attr.struct)) {
        return acc;
      }
      const child = map.get(param.attr.struct);
      const v2 = new Set<string>(visited);
      v2.add(param.attr.struct);

      return child
        ? acc.concat(getPathFromStruct2(child, `${parent}[*]`, map, v2))
        : acc;
    },
    []
  );

  return [newItem, ...childStructs, ...childStructs2];
};

const getPathFromStructParamCore = (
  params: ReadonlyArray<PluginParam<StructRefParam>>,
  parent: string,
  map: ReadonlyMap<string, ClassifiedPluginParams>,
  visited: ReadonlySet<string> = new Set<string>()
): Result3[] => {
  return params.reduce<Result3[]>((acc, param): Result3[] => {
    const structSchema = map.get(param.attr.struct);
    if (!structSchema) {
      return acc;
    }
    return [
      ...acc,
      ...getPathFromStruct2(structSchema, `${parent}`, map, visited),
    ];
  }, []);
};
