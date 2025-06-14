import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { BooleanArg } from "./boolean";
import { booleanMetaParam } from "./boolean";

export const rmmzParamToSchemaBoolean = (boolArg: BooleanArg) => {
  return {
    title: boolArg.text,
    description: boolArg.desc,
    default: boolArg.default,
    type: "boolean",
    "x-rmmzParam": booleanMetaParam(boolArg),
  } satisfies JSONSchemaType<boolean> & Schema;
};
