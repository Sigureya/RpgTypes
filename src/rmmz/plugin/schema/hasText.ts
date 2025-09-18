import type { PrimitiveParam } from "./compile/kinds";

const TABLE: ReadonlyArray<string> = ["string", "multiline_string", "select"];
export const paramHasText = (param: PrimitiveParam) => {
  return TABLE.includes(param.kind);
};
