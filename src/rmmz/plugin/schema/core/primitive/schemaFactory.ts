import { Ajv, type JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { BooleanArg } from "./boolean";
import { booleanMetaParam, metaSchemaBooleanRmmzParam } from "./boolean";
import {
  X_RMMZ_PARAM_BOOLEAN,
  X_RMMZ_PARAM_NUMBER,
  X_RMMZ_PARAM_SHARED,
} from "./keyConstants";
import type { X_MetaParam_Shread } from "./metaTextField";
import { metaSchemaSharedParam } from "./metaTextField";
import type { RmmzParamCore_Number } from "./numbers";
import { metaSchemaNumberRmmzParam, x_metaParamNumber } from "./numbers";
import { rmmzDataTypes } from "./rpgData";
import { paramKindsString } from "./string";

const allKind = () => [...rmmzDataTypes(), ...paramKindsString()];

const makeMetaSchema = () =>
  ({
    type: "object",
    additionalProperties: false,
    properties: {
      kind: {
        type: "string",
        enum: allKind(),
      },
      parent: { type: "string", nullable: true },
    },
    required: ["kind"],
  } satisfies JSONSchemaType<X_MetaParam_Shread>);

const makeShared = () => ({});

export const rmmzParamToSchemaBoolean = (boolArg: BooleanArg) => {
  return {
    title: boolArg.text,
    description: boolArg.desc,
    default: boolArg.default,
    type: "boolean",
    [X_RMMZ_PARAM_BOOLEAN]: booleanMetaParam(boolArg),
  } satisfies JSONSchemaType<boolean> & Schema;
};

export const paramToNumberSchema = (num: RmmzParamCore_Number) => {
  const digit = num.digit ?? 0;
  return {
    default: num.default ?? 0,
    type: digit === 0 ? "integer" : "number",
    maximum: num.max,
    minimum: num.min,
    [X_RMMZ_PARAM_NUMBER]: x_metaParamNumber(num),
  } satisfies JSONSchemaType<number> & Schema;
};
