import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamTextFields, X_MetaParam_Shread } from "./types";

export const makeRmmzParamTextSchemaOld = () =>
  ({
    desc: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
    text: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
    parent: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
  } satisfies Record<
    keyof RmmzParamTextFields,
    JSONSchemaType<string | undefined>
  >);

export const makeRmmzParamTextSchema = () =>
  ({
    additionalProperties: false,
    type: "object",
    properties: {
      desc: { type: "string", default: "", maxLength: 250, nullable: true },
      text: { type: "string", default: "", maxLength: 250, nullable: true },
      parent: { type: "string", default: "", maxLength: 250, nullable: true },
    },
  } satisfies Schema & JSONSchemaType<Partial<RmmzParamTextFields>>);

export const metaSchemaSharedParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    properties: {
      kind: { type: "string" },
      parent: { type: "string", nullable: true },
    },
    required: ["kind"],
  } satisfies Schema & JSONSchemaType<X_MetaParam_Shread>);
