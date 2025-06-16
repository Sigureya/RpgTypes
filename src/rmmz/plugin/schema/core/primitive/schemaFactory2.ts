import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { MetaParam_Boolean } from "./boolean";
import type { RmmzParamTextFields } from "./metaTextField";
import type {
  NewRmmzParam_Boolean,
  NewRmmzParam_DataId,
  NewRmmzParam_Number,
} from "./newParamType";
import { lookupKind } from "./rpgDataId/lookup";
import type { RmmzParamCore_Option, RmmzParamCore_Select } from "./select";

export type ParamSchema<Value, X> = JSONSchemaType<Value> & {
  "x-rpg-param": X_RmmzParam<X>;
};

interface X_RmmzParam<T> {
  parent?: string;
  kind: string;
  data: T;
}

const schemaFromRmmzParam = <
  V,
  P extends Partial<RmmzParamTextFields> & { type: string; default: V },
  X,
  TypeName extends "boolean" | "number" | "integer" | "string"
>(
  default_: V,
  param: P,
  type: TypeName,
  data: X
) => {
  const xxx = {
    type: type,
    default: default_,
    title: param.text,
    description: param.desc,
    "x-rpg-param": {
      parent: param.parent,
      kind: param.type,
      data: data,
    } satisfies X_RmmzParam<X>,
  };
  // undefinedを除去するためにスプレッド構文を使う。
  // [key]:undefinedが混ざると問題になる
  return { ...xxx };
};

export const schemaFromBooleanParam = (bool: NewRmmzParam_Boolean) => {
  return schemaFromRmmzParam(bool.default, bool, "boolean", {
    on: bool.on ?? "{on}",
    off: bool.off ?? "{off}",
  }) satisfies ParamSchema<boolean, MetaParam_Boolean>;
};

export const schemaFromDataId = (dataId: NewRmmzParam_DataId) => {
  return schemaFromRmmzParam(
    dataId.default,
    dataId,
    "number",
    lookupKind(dataId.type) satisfies NonNullable<SourceIdentifier>
  ) satisfies ParamSchema<number, SourceIdentifier>;
};

export const schemaFromNumberParam = (num: NewRmmzParam_Number) => {
  const digit = num.digit ?? 0;
  return {
    ...{
      default: num.default ?? 0,
      type: digit === 0 ? "integer" : "number",
      // 整数型に限定。小数型の最大・最少は読みづらい
      maximum: num.max,
      minimum: num.min,
      ["x-rpg-param"]: {
        ...{
          parent: num.parent,
          kind: num.type,
          data: { digit: Math.max(digit, 0) },
        },
      },
    },
  } satisfies ParamSchema<number, { digit: number }>;
};

const toOptions = <T extends number | string>(
  options: RmmzParamCore_Option<T>[]
) => options.map(({ value, option }) => ({ value, option }));

export const schemaFromSelectParam = (select: RmmzParamCore_Select<number>) => {
  return schemaFromRmmzParam(select.default, select, "number", {
    options: toOptions(select.options),
  }) satisfies ParamSchema<number, { options: RmmzParamCore_Option<number>[] }>;
};

export const schemaFromStringSelectParam = (
  select: RmmzParamCore_Select<string>
) => {
  return schemaFromRmmzParam(select.default, select, "string", {
    options: toOptions(select.options),
  }) satisfies ParamSchema<string, { options: RmmzParamCore_Option<string>[] }>;
};
