import type { ScalaStruct } from "@RpgTypes/rmmz/plugin/classifyTypes";
import { JSONPathJS } from "jsonpath-js";
import type { StructPropertysPath } from "./types/struct2";

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

const xxx = (
  p: StructPropertysPath,
  structMap: ReadonlyMap<string, ScalaStruct>
) => {
  const schema = structMap.get(p.structName);
  if (!schema) {
    return "";
  }
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
