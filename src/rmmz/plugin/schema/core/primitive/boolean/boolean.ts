import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamCore_Boolean, X_MetaParam_Boolean } from "./types";

export const metaSchemaBooleanRmmzParam = () =>
  ({
    type: "object",
    additionalProperties: false,
    properties: {
      on: { type: "string", nullable: true },
      off: { type: "string", nullable: true },
    },
  } satisfies Schema & JSONSchemaType<Partial<X_MetaParam_Boolean>>);

export const booleanMetaParam = (
  bool: RmmzParamCore_Boolean
): Partial<X_MetaParam_Boolean> =>
  ({
    on: bool.on,
    off: bool.off,
  } satisfies Record<keyof X_MetaParam_Boolean, string | undefined>);

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
