import { JSONPathJS } from "jsonpath-js";
import type { ParamJSONPath, ParamJSONPathSturct } from "./types";
import type { Json } from "./types/jsonTypes";
export interface PPValue {
  name: string;
  value: number | string;
  kind: string;
}

const xx = (value: Json, path: ReadonlyArray<ParamJSONPath>): PPValue[] => {
  return path.reduce<PPValue[]>((result, p) => {
    const values = new JSONPathJS(p.path).find(value);
    if (!Array.isArray(values)) {
      return result;
    }
    const pp2: PPValue[] = values.map(
      (v): PPValue => ({
        name: p.param.name,
        value: v as number | string,
        kind: p.param.attr.kind,
      })
    );
    return [...result, ...pp2];
  }, []);
};

export const findValues = (
  jsonValue: Json,
  paths: ParamJSONPathSturct
): PPValue[] => {
  const scalaValues = xx(jsonValue, paths.scalas);
  const scalaArray = xx(jsonValue, paths.scalaArrays);
  const structValues = xx(jsonValue, paths.structs);
  const structArray = xx(jsonValue, paths.structArrays);
  return [...scalaValues, ...scalaArray, ...structValues, ...structArray];
};
