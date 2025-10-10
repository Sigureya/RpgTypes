import { JSONPathJS } from "jsonpath-js";
import type { Json } from "./jsonTypes";
import type { ParamJSONPath, ParamJSONPathSturct } from "./types";

export interface JsonValueEx {
  value: Json;
  schema: ParamJSONPath;
}

export const deep2 = (
  jsonPathStruct: ParamJSONPathSturct,
  obj: Json
): JsonValueEx[] => {
  return jsonPathStruct.params.map((param): JsonValueEx => {
    const pathJS = new JSONPathJS(param.path);
    return {
      value: pathJS.find(obj),
      schema: param,
    };
  });
};
