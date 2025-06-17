import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { DiscriminatedUnionSchemaType } from "src/templates";
import type { X_MetaParamCore_Boolean } from "./boolean";
import type { X_MetaParamCore_Number } from "./numbers";
import type { ParamKinds_String } from "./string";

type KindOf<Kind extends string, T> = {
  kind: Kind;
  data: T;
};
export interface X_MetaParam_Shared {
  kind: string;
  parent?: string | null;
}

type kindsOfBoolean = KindOf<"boolean", X_MetaParamCore_Boolean>;
type kindsOfNumber = KindOf<"number", X_MetaParamCore_Number>;
type kindsOfDataId = KindOf<"dataId", SourceIdentifier | undefined>;

export type X_MetaParam_Boolean = X_MetaParam_Shared & kindsOfBoolean;
export type X_MetaParam_Number = X_MetaParam_Shared & kindsOfNumber;
export type X_MetaParam_DataId = X_MetaParam_Shared & kindsOfDataId;

export type X_MetaParamUnion =
  | X_MetaParam_Boolean
  | X_MetaParam_Number
  | X_MetaParam_DataId;

type UnionSchema = DiscriminatedUnionSchemaType<
  X_MetaParam_Shared,
  string,
  "kind",
  kindsOfNumber | kindsOfBoolean | kindsOfDataId | { kind: string }
>;

export const makeUnionSchema = () =>
  ({
    definitions: {
      base: {
        type: "object",
        properties: {
          kind: { type: "string" },
          parent: { type: "string", nullable: true },
        },
        required: ["kind"],
      } satisfies JSONSchemaType<X_MetaParam_Shared>,
    },
    oneOf: [
      {
        allOf: [
          {
            type: "object",
            required: ["kind"],
            properties: {
              kind: {
                type: "string",
                enum: [
                  "string",
                  "multiline_string",
                ] satisfies ParamKinds_String[],
              },
            },
          } satisfies JSONSchemaType<{ kind: string }>,
          { $ref: "#/definitions/base" },
        ],
      },

      {
        allOf: [
          {
            type: "object",
            required: ["kind"],
            properties: {
              kind: { type: "string", const: "number" },
              data: {
                type: "object",
                properties: {
                  digit: { type: "number", nullable: true },
                },
              },
            },
          } satisfies JSONSchemaType<kindsOfNumber>,
          { $ref: "#/definitions/base" },
        ],
      },
      {
        allOf: [
          {
            type: "object",
            required: ["kind"],
            properties: {
              kind: { type: "string", const: "boolean" },
              data: {
                type: "object",
                properties: {
                  on: { type: "string", nullable: true },
                  off: { type: "string", nullable: true },
                },
              },
            },
          } satisfies JSONSchemaType<
            KindOf<"boolean", X_MetaParamCore_Boolean>
          >,
          { $ref: "#/definitions/base" },
        ],
      },
      {
        allOf: [
          {
            type: "object",
            required: ["kind"],
            properties: {
              kind: { type: "string", const: "dataId" },
              data: {
                type: "object",
                nullable: true,
                required: ["author", "kind", "module"],
                properties: {
                  author: { type: "string" },
                  module: { type: "string" },
                  kind: { type: "string" },
                },
              },
            },
          } satisfies JSONSchemaType<kindsOfDataId>,
          { $ref: "#/definitions/base" },
        ],
      },
    ],
  } satisfies UnionSchema);
