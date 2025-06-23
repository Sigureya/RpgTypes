import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import type { X_MetaParamCore_Boolean } from "../../core/primitive/boolean";
import type { X_MetaParamCore_Number } from "../../core/primitive/numbers";
import { optionsSchema } from "../../core/primitive/select";
import type {
  X_Param_DataId,
  X_Param_StringInput,
} from "../../core/primitive/x-rpg-param";
import type { X_RmmzParamInput } from "./core/kindBase/x-rpg-param";
import type { BooleanParam } from "./core/primitiveParams";

type UnionSchema = DiscriminatedUnionSchemaType3<
  BaseKind,
  string,
  "kind",
  BooleanParam | X_Param_DataId | NumberKind | X_Param_StringInput | SelectKind
>;

interface BaseKind {
  kind: string;
  parent?: string | null;
  data?: unknown;
}

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
    ],
  } satisfies UnionSchema;
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
  } satisfies JSONSchemaType<NumberKind>);
type NumberKind = X_RmmzParamInput<X_MetaParamCore_Number, "number">;

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
    },
  } satisfies JSONSchemaType<X_Param_StringInput>);

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
  } satisfies JSONSchemaType<BooelanKind>);
type BooelanKind = X_RmmzParamInput<X_MetaParamCore_Boolean, "boolean">;

const dataIdKind = () => {
  const dataIdtext = { type: "string", maxLength: 100 } as const;
  return {
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "dataId" },
      parent: { type: "string", maxLength: 100, default: "" },
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
  } satisfies JSONSchemaType<X_Param_DataId>;
};

const selectKind = () => {
  return {
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
          options: optionsSchema() satisfies JSONSchemaType<
            { value: string; option: string }[]
          >,
        },
      },
    },
  } satisfies JSONSchemaType<SelectKind>;
};

interface SelectKind {
  kind: "select";
  parent?: string | null;
  data: {
    options: { value: string; option: string }[];
  };
}
