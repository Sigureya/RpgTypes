import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { BooleanArg, X_MetaParam_Boolean } from "./types";

export const rmmzParamToSchema = (bool: BooleanArg) => {
  return {
    title: bool.text,
    description: bool.desc,
    default: bool.default,
    type: "boolean",
    "x-rmmzParam": {
      kind: "boolean",
      on: bool.on,
      off: bool.off,
      parent: bool.parent,
    } satisfies X_MetaParam_Boolean,
  } satisfies JSONSchemaType<boolean> & Schema;
};
