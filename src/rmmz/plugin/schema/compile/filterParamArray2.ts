/* eslint-disable @functional/no-return-void */

import type { NamedAttribute, PluginParamGroups } from "./filter2Type2";
import type {
  ArrayParam,
  ParamKinds,
  PrimitiveParam,
  ScalaParam,
  StructArrayRefParam,
  StructRefParam,
} from "./kinds";
import type { PluginParam } from "./kinds/core/types";
import { isArrayParam } from "./kinds/isArray";
import { isStructArrayParam, isStructParam } from "./kinds/isStruct";

export interface ParamFilterCriteria {
  structNames: ReadonlySet<string>;
  singleKinds: ReadonlySet<ParamKinds>;
  arrayKinds: ReadonlySet<`${ParamKinds}[]`>;
}

export const filterParams2 = (
  params2: ReadonlyArray<PluginParam<PrimitiveParam>>,
  { arrayKinds, singleKinds, structNames }: ParamFilterCriteria
): PluginParamGroups => {
  const single: NamedAttribute<ScalaParam>[] = [];
  const array: NamedAttribute<Extract<PrimitiveParam, ArrayParam>>[] = [];
  const struct: NamedAttribute<StructRefParam>[] = [];
  const structArray: NamedAttribute<StructArrayRefParam>[] = [];
  params2.forEach(({ attr, name }) => {
    if (isStructParam(attr)) {
      if (structNames.has(attr.struct)) {
        struct.push({
          attr: attr,
          name: name,
        });
      }
      return;
    }
    if (isStructArrayParam(attr)) {
      if (structNames.has(attr.struct)) {
        structArray.push({
          attr: attr,
          name: name,
        });
      }
      return;
    }
    if (isArrayParam(attr)) {
      if (arrayKinds.has(attr.kind)) {
        array.push({
          name: name,
          attr: attr,
        });
      }
      return;
    }
    if (singleKinds.has(attr.kind)) {
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
  };
};
