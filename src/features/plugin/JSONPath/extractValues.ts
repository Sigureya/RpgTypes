import { JSONPathJS } from "jsonpath-js";
import type {
  JSONValue,
  ParamJSONPath,
  PluginParamExtractedValue,
  ParamJSONPathSturct,
} from "./types";

const gg = (
  value: JSONValue,
  path: ReadonlyArray<ParamJSONPath>
): PluginParamExtractedValue[] => {
  return path.reduce<PluginParamExtractedValue[]>((result, p) => {
    const values = new JSONPathJS(p.path).find(value);
    if (!Array.isArray(values)) {
      return result;
    }
    const pp2: PluginParamExtractedValue[] = values.map(
      (v): PluginParamExtractedValue => ({
        name: p.param.name,
        value: v,
        param: p.param.attr,
      })
    );
    return [...result, ...pp2];
  }, []);
};

export const extractPluginParamValues = (
  jsonValue: JSONValue,
  paths: ParamJSONPathSturct
): PluginParamExtractedValue[] => {
  const scalaValues = gg(jsonValue, paths.scalas);
  const scalaArray = gg(jsonValue, paths.scalaArrays);
  const structValues = gg(jsonValue, paths.structs);
  const structArray = gg(jsonValue, paths.structArrays);
  return [...scalaValues, ...scalaArray, ...structValues, ...structArray];
};
