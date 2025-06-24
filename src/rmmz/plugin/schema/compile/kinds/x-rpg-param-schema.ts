import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import type {
  X_ParamGGG,
  X_RmmzParamBase,
  X_RmmzParamInput,
} from "./core/paramBase/x-rpg-param";
import type {
  BooleanParam,
  SelectParam,
  StringParam,
} from "./core/primitiveParams";

type UnionSchema = DiscriminatedUnionSchemaType3<
  X_RmmzParamBase,
  string,
  "kind",
  | X_ParamGGG<BooleanParam>
  | NumberKind2
  | X_ParamGGG<StringParam>
  | X_ParamGGG<SelectParam>
  | DataXX
>;
type DataXX = X_RmmzParamInput<SourceIdentifier, "dataId">;
type NumberKind2 = {
  parent?: string | null;
  kind: "number";
  data: { digit?: number };
};

interface NullableString {
  type: "string";
  nullable: true;
  maxLength: 100;
}

const parentSchema = () =>
  ({
    type: "string",
    nullable: true,
    maxLength: 100,
    default: "",
  } as const satisfies JSONSchemaType<string | null>);

export const makeSchema3 = () => {
  const nullablString = {
    type: "string",
    nullable: true,
    maxLength: 100,
  } as const satisfies JSONSchemaType<string | null>;
  return {
    type: "object",
    discriminator: {
      propertyName: "kind",
    },
    oneOf: [
      stringKind(nullablString),
      numberKind(),
      dataIdKind(),
      selectKind(),
      booleanKind(nullablString),
    ],
  } as const satisfies UnionSchema;
};

const numberKind = () =>
  ({
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "number" },
      parent: parentSchema(),
      data: {
        type: "object",
        properties: {
          digit: {
            type: "number",
            nullable: true,
            minimum: 0,
            default: 0,
          },
        },
      },
    },
  } satisfies JSONSchemaType<NumberKind2>);

const stringKind = (nullablString: NullableString) =>
  ({
    type: "object",
    required: ["kind"],
    additionalProperties: false,
    properties: {
      kind: {
        type: "string",
        enum: ["string", "multiline_string"],
      },
      parent: nullablString,
      data: { type: "object", properties: {} },
    },
  } as const satisfies JSONSchemaType<X_ParamGGG<StringParam>>);

const booleanKind = (nullablString: NullableString) =>
  ({
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "boolean" },
      parent: parentSchema(),
      data: {
        type: "object",
        properties: {
          on: nullablString,
          off: nullablString,
        },
      },
    },
  } as const satisfies JSONSchemaType<X_ParamGGG<BooleanParam>>);

const dataIdKind = () => {
  const dataIdtext = { type: "string", maxLength: 100 } as const;
  return {
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "dataId" },
      parent: { type: "string", maxLength: 100, default: "", nullable: true },
      data: {
        additionalProperties: false,
        type: "object",
        required: ["author", "module", "kind"],
        properties: {
          author: dataIdtext,
          module: dataIdtext,
          kind: dataIdtext,
        },
      } satisfies JSONSchemaType<SourceIdentifier>,
    },
  } as const satisfies JSONSchemaType<DataXX>;
};

const selectKind = () =>
  ({
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "select" },
      parent: { type: "string", nullable: true, maxLength: 100 },
      data: {
        type: "object",
        required: ["options"],
        properties: {
          options: {
            type: "array",
            items: {
              type: "object",
              properties: {
                value: { type: "string", maxLength: 100 },
                option: { type: "string", maxLength: 100 },
              },
              required: ["value", "option"],
              additionalProperties: false,
            },
          },
        },
      },
    },
  } as const satisfies JSONSchemaType<X_ParamGGG<SelectParam>>);
