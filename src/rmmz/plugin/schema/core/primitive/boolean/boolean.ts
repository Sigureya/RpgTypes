import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type {
  BooleanArg,
  RmmzParamCore_Boolean,
  X_MetaParam_Boolean,
} from "./types";

export const rmmzParamToSchemaBoolean = (boolArg: BooleanArg) => {
  return {
    title: boolArg.text,
    description: boolArg.desc,
    default: boolArg.default,
    type: "boolean",
    "x-rmmzParam": booleanMetaParam(boolArg),
  } satisfies JSONSchemaType<boolean> & Schema;
};

export const booleanMetaParam = (bool: BooleanArg): X_MetaParam_Boolean => ({
  on: bool.on,
  off: bool.off,
  kind: "boolean",
  parent: bool.parent,
});

export const makeSchemaBooleanParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["type", "default"],
    properties: {
      type: { type: "string", const: "boolean" },
      default: { type: "boolean" },
      on: { type: "string", nullable: true },
      off: { type: "string", nullable: true },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_Boolean>);
