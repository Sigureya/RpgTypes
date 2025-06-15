import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import { booleanMetaParam } from "./boolean";
import {
  X_RMMZ_PARAM_BOOLEAN,
  X_RMMZ_PARAM_DATA_INDEX,
  X_RMMZ_PARAM_NUMBER,
} from "./keyConstants";
import type { DataIndexArg, RmmzParamCore_Number } from "./numbers";
import { x_metaParamNumber } from "./numbers";
import type { BooleanArg } from "./paramTypesOld";
import type { DataKindUnion } from "./rpgDataId";

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

export const makeDataIndexValueSchema = <Name extends DataKindUnion>(
  index: DataIndexArg<Name>
) =>
  ({
    title: index.text,
    default: index.default satisfies number,
    type: "integer",
    minimum: 0,
    [X_RMMZ_PARAM_DATA_INDEX]: {
      kind: index.type,
      parent: index.parent,
    },
  } satisfies JSONSchemaType<number> & Schema);
