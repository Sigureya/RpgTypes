import type { SourceIdentifier } from "src/namedItemSource";
import type { MetaParam_Boolean } from "./boolean";
import type {
  NewRmmzParam_Boolean,
  NewRmmzParam_DataId,
  NewRmmzParam_Number,
} from "./newParamType";
import { lookupKind } from "./rpgDataId/lookup";
import type { RmmzParamCore_Option, RmmzParamCore_Select } from "./select";
import type { NumberParamSchema } from "./x-rpg-param";
import type {
  ParamSchemaCompiled,
  RmmzParamTextFields,
  X_RmmzParam,
} from "./x-rpg-param2";
import { X_RPG_PARM } from "./x-rpg-param2";

const compileSchema = <
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

export const compileSchemaFromBooleanParam = (bool: NewRmmzParam_Boolean) => {
  return compileSchema(bool.default, bool, "boolean", {
    on: bool.on ?? "{on}",
    off: bool.off ?? "{off}",
  }) satisfies ParamSchemaCompiled<boolean, MetaParam_Boolean>;
};

export const compileSchemaFromDataId = (dataId: NewRmmzParam_DataId) => {
  return compileSchema(
    dataId.default,
    dataId,
    "number",
    lookupKind(dataId.type) satisfies NonNullable<SourceIdentifier>
  ) satisfies ParamSchemaCompiled<number, SourceIdentifier>;
};

export const compileSchemaFromNumberParam = (num: NewRmmzParam_Number) => {
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

export const schemaFromStringSelectParam = (select: RmmzParamCore_Select) => {
  return compileSchema(select.default, select, "string", {
    options: select.options.map(({ value, option }) => ({ value, option })),
  }) satisfies ParamSchemaCompiled<string, { options: RmmzParamCore_Option[] }>;
};
