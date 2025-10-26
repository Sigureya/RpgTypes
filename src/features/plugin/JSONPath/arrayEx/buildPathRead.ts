import type { JSONValue } from "@RpgTypes/libs";
import type { ArrayParamTypes } from "@RpgTypes/rmmz/plugin";
import { isNumberArrayParam, isStringArrayParam } from "@RpgTypes/rmmz/plugin";
import { JSONPathJS } from "jsonpath-js";
import type {
  ArrayPathPair,
  NumberSequenceParamValues,
  StringSequenceParamValues,
} from "./types";

export const extractArrayParamValue = (
  object: JSONValue,
  pair: ArrayPathPair
): null | StringSequenceParamValues | NumberSequenceParamValues => {
  const path = new JSONPathJS(pair.path);
  const values: JSONValue = path.find(object);
  if (!Array.isArray(values)) {
    return null;
  }

  const attr: ArrayParamTypes = pair.param.attr;
  if (isStringArrayParam(attr)) {
    const s: string[] = values.filter((v) => typeof v === "string");
    return {
      values: s,
      valueKind: "string",
      param: {
        name: pair.param.name,
        attr: attr,
      },
    };
  }
  if (isNumberArrayParam(attr)) {
    const n: number[] = values.filter((v) => typeof v === "number");
    return {
      values: n,
      valueKind: "number",
      param: {
        name: pair.param.name,
        attr: attr,
      },
    };
  }

  return null;
};
