import type { ScalaStruct } from "@RpgTypes/rmmz/plugin/classifyTypes";
import { JSONPathJS } from "jsonpath-js";
import type { JSONValue } from "./types";
import type { ArrayPathPair, StructPropertysPath } from "./types/struct2";

const pp = (path: StructPropertysPath, schema: ScalaStruct) => {
  return {
    s: {
      paramSchema: [...schema.scalas],
    },
    a: {
      paramSchema: [...schema.scalaArrays],
    },
  };
};

export const aa = (object: JSONValue, pair: ArrayPathPair) => {
  const path = new JSONPathJS(pair.path);

  const values: JSONValue = path.find(object);
  if (!Array.isArray(values)) {
    return [];
  }
  const s: string[] = values.filter((v) => typeof v === "string");
  return [];
};

const xxx = (
  p: StructPropertysPath,
  structMap: ReadonlyMap<string, ScalaStruct>
) => {
  const schema = structMap.get(p.structName);
  if (!schema) {
    return "";
  }
  //  p.scalaArrays[0].
};

const getParamKind = (
  p: StructPropertysPath,
  structMap: ReadonlyMap<string, ScalaStruct>
) => {
  const schema = structMap.get(p.structName);
  if (!schema) {
    return "";
  }
};
