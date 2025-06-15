import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import {
  metaSchemaBooleanRmmzParam,
  type X_MetaParam_Boolean,
} from "./boolean";
import { metaSchemaNumberRmmzParam, type X_MetaParam_Number } from "./numbers";

export interface X_RmmzParam<T> {
  kind: string;
  parent?: string;
  data: T;
}

interface XXX {
  properties: {
    kind: { type: "string"; const: string };
  };
}

const fff = () => {
  return [ifthen(metaSchemaXXX()), ifthen(metaSchemaNNN())];
};

const ifthen = <T extends XXX>(schema: Schema & T) =>
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
      data: metaSchemaBooleanRmmzParam(),
    },
  } satisfies JSONSchemaType<X_RmmzParam<Partial<X_MetaParam_Boolean>>>);

const metaSchemaNNN = () =>
  ({
    type: "object",
    additionalProperties: false,
    required: ["kind", "data"],
    properties: {
      kind: { type: "string", const: "number" },
      parent: { type: "string", nullable: true },
      data: metaSchemaNumberRmmzParam(),
    },
  } satisfies JSONSchemaType<X_RmmzParam<Partial<X_MetaParam_Number>>>);
