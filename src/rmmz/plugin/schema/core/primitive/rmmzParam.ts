import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
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
  Partial<X_MetaParamCore_Boolean>
>;

interface XXX {
  properties: {
    kind: { type: "string"; const: string };
  };
}

const sss = () => ({} satisfies Schema);

const fff = () => {
  return [
    ifthen(metaSchemaXXX()),
    ifthen(metaSchemaNNN()),

    ifthen(metaSchemaIII()),
  ];
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
  } satisfies JSONSchemaType<
    X_RmmzParam<"number", Partial<X_MetaParamCore_Number>>
  >);

const metaSchemaIII = () =>
  ({
    type: "object",
    additionalProperties: false,
    required: ["kind", "data"],
    properties: {
      kind: { type: "string", const: "dataId" },
      parent: { type: "string", nullable: true },
      data: metaSchemaDataIdParamCore(),
    },
  } satisfies JSONSchemaType<X_RmmzParam<"dataId", X_MetaParam_DataId>>);
