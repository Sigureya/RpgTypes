import type { JSONValue } from "@RpgTypes/libs";
import type { PrimitiveParam } from "@RpgTypes/rmmz/plugin";
import { JSONPathJS } from "jsonpath-js";
import { extractArrayParamValue } from "./arrayEx/extractParam";
import type {
  NumberSequenceParamValues,
  ScalaPathResult,
  StringSequenceParamValues,
} from "./arrayEx/types/result";
import type { StructPropertysPath } from "./types";

export const extractScalaValuesFromJson = (
  json: JSONValue,
  structPath: StructPropertysPath
): ScalaPathResult[] => {
  if (!structPath.scalas) {
    return [];
  }
  const jsonPath = new JSONPathJS(structPath.scalas);
  const segments = jsonPath.pathSegments(json);
  return collectScalaResults(segments, structPath, structPath.structName);
};

interface PathSegment {
  value: JSONValue;
  segments: (string | number)[];
}

/**
 * セグメント配列からScalaPathResult配列を生成する
 */
const collectScalaResults = (
  segments: ReadonlyArray<PathSegment>,
  structPath: StructPropertysPath,
  structName: string
): ScalaPathResult[] => {
  return segments.reduce<ScalaPathResult[]>((acc, { segments, value }) => {
    if (typeof value === "object") {
      return acc;
    }
    const paramName = segments[segments.length - 1];
    if (typeof paramName === "number") {
      return acc;
    }

    const schema: PrimitiveParam | undefined =
      structPath.objectSchema[paramName];
    if (!schema) {
      return acc;
    }

    const result: ScalaPathResult = {
      value: value,
      structName: structName,
      param: { name: paramName, attr: schema },
    };
    return [...acc, result];
  }, []);
};

export const extractArrayValuesFromJson = (
  json: JSONValue,
  structPath: StructPropertysPath
): (StringSequenceParamValues | NumberSequenceParamValues)[] => {
  return structPath.scalaArrays
    .map((scalaArray) => {
      return extractArrayParamValue(json, scalaArray);
    })
    .filter((v) => v !== null);
};
