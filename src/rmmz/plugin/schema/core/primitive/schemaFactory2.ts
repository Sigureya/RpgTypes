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
import type {
  NumberParamSchema,
  ParamSchemaCompiled,
  X_RmmzParam,
} from "./x-rpg-param";
import { X_RPG_PARM } from "./x-rpg-param";

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
) => ({
  type: type,
  default: default_,
  title: param.text ?? "",
  description: param.desc ?? "",
  [X_RPG_PARM]: makeData(param.parent, param.type, data),
});

const makeData = <T>(
  parent: string | null | undefined,
  kind: string,
  data: T
) => {
  return {
    parent: parent ?? "",
    kind: kind,
    data: data,
  } satisfies X_RmmzParam<T>;
};

export const schemaFromBooleanParam = (bool: NewRmmzParam_Boolean) => {
  return schemaFromRmmzParam(bool.default, bool, "boolean", {
    on: bool.on ?? "{on}",
    off: bool.off ?? "{off}",
  }) satisfies ParamSchemaCompiled<boolean, MetaParam_Boolean>;
};

export const schemaFromDataId = (dataId: NewRmmzParam_DataId) => {
  return schemaFromRmmzParam(
    dataId.default,
    dataId,
    "number",
    lookupKind(dataId.type) satisfies NonNullable<SourceIdentifier>
  ) satisfies ParamSchemaCompiled<number, SourceIdentifier>;
};

export const schemaFromNumberParam = (num: NewRmmzParam_Number) => {
  const digit = num.digit ?? 0;

  return {
    title: num.text ?? "",
    description: num.desc ?? "",
    default: num.default ?? 0,
    type: digit === 0 ? "integer" : "number",
    // 整数型に限定。小数型の最大・最少は読みづらい
    maximum: num.max ?? Number.MAX_SAFE_INTEGER,
    minimum: num.min ?? Number.MIN_SAFE_INTEGER,
    [X_RPG_PARM]: makeData(num.parent, num.type, {
      digit: Math.max(digit, 0),
    }),
  } satisfies NumberParamSchema;
};

const toOptions = <T extends number | string>(
  options: RmmzParamCore_Option<T>[]
) => options.map(({ value, option }) => ({ value, option }));

export const schemaFromSelectParam = (select: RmmzParamCore_Select<number>) => {
  return schemaFromRmmzParam(select.default, select, "number", {
    options: toOptions(select.options),
  }) satisfies ParamSchemaCompiled<
    number,
    { options: RmmzParamCore_Option<number>[] }
  >;
};

export const schemaFromStringSelectParam = (
  select: RmmzParamCore_Select<string>
) => {
  return schemaFromRmmzParam(select.default, select, "string", {
    options: toOptions(select.options),
  }) satisfies ParamSchemaCompiled<
    string,
    { options: RmmzParamCore_Option<string>[] }
  >;
};
