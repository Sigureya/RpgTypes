import type { JSONSchemaType, SchemaObject } from "ajv";
import type { Schema } from "jsonschema";
import { K } from "vitest/dist/chunks/reporters.d.79o4mouw.js";
import {
  metaSchemaBooleanRmmzParamCore,
  type X_MetaParamCore_Boolean,
} from "./boolean";
import {
  metaSchemaNumberRmmzParamCore,
  type X_MetaParamCore_Number,
} from "./numbers";
import type { X_MetaParam_DataId } from "./rpgDataId";
import { metaSchemaDataIdParamCore } from "./rpgDataId";

export interface X_RmmzParam<Kind, T> {
  kind: Kind;
  parent?: string;
  data: T;
}

export type X_RmmzParamBoolean = X_RmmzParam<
  "boolean",
  X_MetaParamCore_Boolean
>;

export type X_RmmzParamNumber = X_RmmzParam<"number", X_MetaParamCore_Number>;
export type X_RmmzParamDataId = X_RmmzParam<"dataId", X_MetaParam_DataId>;

interface XXX {
  properties: {
    kind: { type: "string"; const: string };
  };
}

export const sss = () =>
  ({
    allOf: fff(),
    required: ["kind", "data"],
    additionalProperties: false,
    type: "object",
    properties: {
      kind: { type: "string" },
      parent: { type: "string", nullable: true },
      data: {},
    },
  } satisfies SchemaObject);

const xx = {
  discriminator: { propertyName: "kind" },
  oneOf: [
    {
      properties: {
        Kind: { type: "string", const: "boolean" },
        data: metaSchemaBooleanRmmzParamCore(),
      },
    },
    {
      properties: {
        Kind: { type: "string", const: "number" },
        data: metaSchemaNumberRmmzParamCore(),
      },
    },
    {
      properties: {
        Kind: { type: "string", const: "dataId" },
        data: metaSchemaDataIdParamCore(),
      },
    },
  ],
};

const fff = () => {
  return [
    ifthen(metaSchemaXXX()),
    ifthen(metaSchemaNNN()),
    ifthen(metaSchemaDataIdParam()),
  ];
};

const ifthen = <T extends Schema & XXX>(schema: T) =>
  ({
    if: {
      type: "object",
      properties: { kind: { type: "string", const: schema.properties.kind } },
    },
    then: schema,
  } satisfies Schema);

const metaSchemaXXX = () =>
  ({
    type: "object",
    additionalProperties: false,
    required: ["kind", "data"],
    properties: {
      kind: { type: "string", const: "boolean" },
      parent: { type: "string", nullable: true },
      data: metaSchemaBooleanRmmzParamCore(),
    },
  } satisfies JSONSchemaType<X_RmmzParamBoolean>);

const metaSchemaNNN = () =>
  ({
    type: "object",
    additionalProperties: false,
    required: ["kind", "data"],
    properties: {
      kind: { type: "string", const: "number" },
      parent: { type: "string", nullable: true },
      data: metaSchemaNumberRmmzParamCore(),
    },
  } satisfies JSONSchemaType<X_RmmzParamNumber>);

export const metaSchemaDataIdParam = () =>
  ({
    type: "object",
    additionalProperties: false,
    required: ["kind", "data"],
    properties: {
      kind: { type: "string", const: "dataId" },
      parent: { type: "string", nullable: true },
      data: metaSchemaDataIdParamCore(),
    },
  } satisfies JSONSchemaType<X_RmmzParamDataId>);
