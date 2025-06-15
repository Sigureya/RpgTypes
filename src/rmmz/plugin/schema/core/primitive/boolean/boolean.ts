import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamCore_Boolean, X_MetaParamCore_Boolean } from "./types";

export const metaSchemaBooleanRmmzParamCore = () =>
  ({
    type: "object",
    additionalProperties: false,
    properties: {
      on: { type: "string", nullable: true },
      off: { type: "string", nullable: true },
    },
  } satisfies Schema & JSONSchemaType<Partial<X_MetaParamCore_Boolean>>);

export const booleanMetaParam = (
  bool: RmmzParamCore_Boolean
): Partial<X_MetaParamCore_Boolean> =>
  ({
    on: bool.on,
    off: bool.off,
  } satisfies Record<keyof X_MetaParamCore_Boolean, string | undefined>);

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
