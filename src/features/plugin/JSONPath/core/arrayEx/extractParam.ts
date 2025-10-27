import type { JSONValue } from "@RpgTypes/libs";
import type {
  ArrayParamTypes,
  PluginParam,
  ScalaParam,
} from "@RpgTypes/rmmz/plugin";
import { isNumberArrayParam, isStringArrayParam } from "@RpgTypes/rmmz/plugin";
import { JSONPathJS } from "jsonpath-js";
import type {
  ArrayPathPair,
  NumberSequenceParamValues,
  ScalaPathResult,
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

export const extractScalaParams = (
  data: JSONValue,
  path: string,
  params: ReadonlyArray<PluginParam<ScalaParam>>
): ScalaPathResult[] => {
  const map = new Map(params.map((param) => [param.name, param.attr] as const));
  const jsonPath = new JSONPathJS(path);
  const values = jsonPath.pathSegments(data);
  return values.reduce<ScalaPathResult[]>((acc, { value, segments }) => {
    if (typeof value === "object") {
      return acc;
    }
    const lastSegment = segments[segments.length - 1];
    if (typeof lastSegment === "number") {
      return acc;
    }
    const schema = map.get(lastSegment);
    if (!schema) {
      return acc;
    }
    acc.push({
      value: value,
      param: { name: lastSegment, attr: schema },
    });
    return acc;
  }, []);
};
