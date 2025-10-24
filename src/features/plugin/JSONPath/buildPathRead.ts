import type { ScalaStruct } from "@RpgTypes/rmmz/plugin/classifyTypes";
import type { StructPropertysPath } from "./types/struct2";

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
