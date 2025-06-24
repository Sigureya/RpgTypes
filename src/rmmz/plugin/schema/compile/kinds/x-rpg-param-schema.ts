import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import type {
  X_ParamData,
  X_RmmzParamBase,
  X_RmmzParam,
} from "./core/paramBase/x-rpg-param";
import type {
  BooleanParam,
  ComboParam,
  NumberParam,
  SelectParam,
  StringParam,
} from "./core/primitiveParams";

type UnionSchema = DiscriminatedUnionSchemaType3<
  X_RmmzParamBase,
  string,
  "kind",
  | X_ParamNumber
  | X_ParamDataId
  | X_ParamData<BooleanParam>
  | X_ParamData<StringParam>
  | X_ParamData<SelectParam>
  | X_ParamData<ComboParam>
>;
type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;

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
  } satisfies JSONSchemaType<X_ParamNumber>);

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
  } as const satisfies JSONSchemaType<X_ParamData<StringParam>>);

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
  } as const satisfies JSONSchemaType<X_ParamData<BooleanParam>>);

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
  } as const satisfies JSONSchemaType<X_ParamDataId>;
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
  } as const satisfies JSONSchemaType<X_ParamData<SelectParam>>);
