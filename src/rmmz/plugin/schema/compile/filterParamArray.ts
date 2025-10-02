/* eslint-disable @functional/no-return-void */

import type { PluginParamGroups } from "./filter2Type2";
import type {
  PrimitiveParam,
  ArrayParam,
  StructRefParam,
  StructArrayRefParam,
  ScalaParam,
} from "./kinds";
import type { PluginParam } from "./kinds/core/types";
import { isArrayParam } from "./kinds/isArray";
import { isStructArrayParam, isStructParam } from "./kinds/isStruct";

export interface GGG<T> {
  single: { name: string; attr: ScalaParam }[];
  array: { name: string; attr: Extract<PrimitiveParam, ArrayParam> }[];
  struct: PPP<StructRefParam>[];
  structArray: PPP<StructArrayRefParam>[];
}

export interface PPP<T> {
  name: string;
  attr: T;
}

export const filterParams = <T extends ScalaParam>(
  params2: PluginParam<PrimitiveParam>[],
  set: Pick<ReadonlySet<string>, "has">,
  fn: (param: ScalaParam) => param is T
): GGG<T> => {
  const single: GGG<T>["single"] = [];
  const array: GGG<T>["array"] = [];
  const struct: GGG<T>["struct"] = [];
  const structArray: GGG<T>["structArray"] = [];
  params2.forEach(({ attr, name }) => {
    if (isStructParam(attr)) {
      if (set.has(attr.struct)) {
        struct.push({
          attr: attr,
          name: name,
        });
      }
      return;
    }
    if (isStructArrayParam(attr)) {
      if (set.has(attr.struct)) {
        structArray.push({
          attr: attr,
          name: name,
        });
      }
      return;
    }
    if (isArrayParam(attr)) {
      array.push({
        name: name,
        attr: attr,
      });
      return;
    }
    if (fn(attr)) {
      single.push({
        name: name,
        attr: attr,
      });
    }
  });
  return {
    single: single,
    array: array,
    struct: struct,
    structArray: structArray,
  } satisfies Record<keyof PluginParamGroups, unknown>;
};
