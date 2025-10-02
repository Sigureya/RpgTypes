/* eslint-disable @functional/no-return-void */

import type { PluginParamGroups } from "./filter2Type2";
import type {
  PrimitiveParam,
  ArrayParam,
  StructRefParam,
  StructArrayRefParam,
} from "./kinds";
import type { PluginParam } from "./kinds/core/types";
import { isArrayParam } from "./kinds/isArray";

export const filterParams = <T extends PrimitiveParam>(
  params2: PluginParam<T>[],
  set: ReadonlySet<string>,
  fn: (param: PrimitiveParam) => param is T
) => {
  const single: T[] = [];
  const array: Extract<PrimitiveParam, ArrayParam>[] = [];
  const struct: StructRefParam[] = [];
  const structArray: StructArrayRefParam[] = [];
  params2.forEach(({ attr: param }) => {
    if (param.kind === "struct") {
      if (set.has(param.struct)) {
        struct.push(param);
        return;
      }
    }
    if (param.kind === "struct[]") {
      if (set.has(param.struct)) {
        structArray.push(param);
        return;
      }
    }
    if (isArrayParam(param)) {
      array.push(param);
      return;
    }
    if (fn(param)) {
      single.push(param);
    }
  });
  return {
    single: single,
    array: array,
    structs: struct,
    structArray: structArray,
  } satisfies Record<keyof PluginParamGroups, unknown>;
};
