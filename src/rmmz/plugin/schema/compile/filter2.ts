/* eslint-disable @functional/no-return-void */
import type { ArrayParam, PluginJSON, PrimitiveParam } from "./kinds";
import { isArrayParam } from "./kinds/isArray";

export const rrr = (params: Record<string, PrimitiveParam>) => {
  const single: PrimitiveParam[] = [];
  const array: Extract<PrimitiveParam, ArrayParam>[] = [];
  const struct: PrimitiveParam[] = [];
  const structArray: PrimitiveParam[] = [];

  Object.values(params).forEach((param) => {
    if (param.kind === "struct") {
      struct.push(param);
    } else if (param.kind === "struct[]") {
      structArray.push(param);
    } else if (isArrayParam(param)) {
      array.push(param);
    } else {
      single.push(param);
    }
  });

  return { single, array, struct, structArray };
};
