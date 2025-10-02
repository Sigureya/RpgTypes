import type {
  PrimitiveParam,
  PrimitiveStringParam,
} from "../core/primitiveParams";

const TABLE: ReadonlyArray<string> = ["string", "multiline_string", "select"];
export const paramHasText = (
  param: PrimitiveParam
): param is PrimitiveStringParam => {
  return TABLE.includes(param.kind);
};
