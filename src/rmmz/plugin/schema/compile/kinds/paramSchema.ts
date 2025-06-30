import type { JSONSchemaType } from "ajv";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import type { ParamBase } from "./core/paramBase";
import type {
  BooleanParam,
  ComboParam,
  FileParam,
  FileArrayParam,
  NumberParam,
  NumberArrayParam,
  SelectParam,
  StringParam,
  StringArrayParam,
  StructArrayRefParam,
  StructRefParam,
  RpgDataIdParam,
} from "./core/primitiveParams";

const BASIC_TEXT = {
  type: "string",
  nullable: true,
  maxLength: 100,
} as const satisfies JSONSchemaType<string | null>;

const DEFAULT_STRING = {
  type: "string",
  default: "",
  nullable: false,
} as const satisfies JSONSchemaType<string>;

const NUMBER_OPTIONAl = {
  type: "number",
  nullable: true,
} as const satisfies JSONSchemaType<number | null>;

export const makeParamSchema = () =>
  ({
    type: "object",
    discriminator: {
      propertyName: "kind",
    },
    oneOf: [
      makeSchemaBooleanParam(),
      rmmzSchemaComboParam(),
      rmmzSchemaDataIdParam(),
      rmmzSchemaFilePathParam(),
      rmmzSchemaFileArrayParam(),
      rmmzSchemaNumberParam(),
      rmmzSchemaNumberArrayParam(),
      rmmzSchemaSelectParam(),
      rmmzSchemaStructRefParam(),
      rmmzSchemaStructArrayRefParam(),
      rmmzSchemaStringParam(),
      rmmzSchemaStringArrayParam(),
    ],
  } satisfies DiscriminatedUnionSchemaType3<
    ParamBase,
    string,
    "kind",
    | BooleanParam
    | ComboParam
    | RpgDataIdParam
    | FileParam
    | FileArrayParam
    | NumberParam
    | NumberArrayParam
    | StructRefParam
    | StructArrayRefParam
    | SelectParam
    | StringParam
    | StringArrayParam
  >);
const makeSchemaBooleanParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: { type: "string", const: "boolean" },
      default: { type: "boolean", default: true },
      on: BASIC_TEXT,
      off: BASIC_TEXT,
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<BooleanParam>);

const rmmzSchemaNumberParam = () =>
  ({
    type: "object",
    required: ["kind", "default"],
    properties: {
      decimals: { type: "integer", minimum: 0, default: 0, nullable: true },
      min: NUMBER_OPTIONAl,
      max: NUMBER_OPTIONAl,
      default: { type: "number", default: 0 },
      kind: { type: "string", const: "number" },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<NumberParam>);

const rmmzSchemaNumberArrayParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: { type: "string", const: "number[]" },
      default: {
        type: "array",
        items: { type: "number", default: 0 },
        default: [],
      },
      decimals: { type: "integer", minimum: 0, default: 0, nullable: true },
      min: { type: "number", nullable: true },
      max: { type: "number", nullable: true },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<NumberArrayParam>);

const rmmzSchemaStringParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: { type: "string", const: "string" },
      default: DEFAULT_STRING,
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<StringParam>);

const rmmzSchemaStringArrayParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: { type: "string", const: "string[]" },
      default: {
        type: "array",
        items: DEFAULT_STRING,
        default: [],
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<StringArrayParam>);

const rmmzSchemaDataIdParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: {
        type: "string",
        enum: [
          "actor",
          "class",
          "skill",
          "item",
          "weapon",
          "armor",
          "enemy",
          "state",
          "common_event",
        ],
      },
      default: { type: "integer", default: 0 },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<RpgDataIdParam>);

const rmmzSchemaComboParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "options"],
    properties: {
      kind: { type: "string", const: "combo" },
      default: DEFAULT_STRING,
      options: {
        type: "array",
        items: { type: "string" },
        default: [],
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<ComboParam>);

const rmmzSchemaFilePathParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "dir"],
    properties: {
      kind: { type: "string", const: "file" },
      default: DEFAULT_STRING,
      dir: DEFAULT_STRING,
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<FileParam>);

const rmmzSchemaFileArrayParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "dir"],
    properties: {
      kind: { type: "string", const: "file[]" },
      default: { type: "array", items: { type: "string" }, default: [] },
      dir: DEFAULT_STRING,
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<FileArrayParam>);
const STRUCT_NAME = {
  type: "string",
  pattern: "^[a-zA-Z][a-zA-Z0-9]*$",
  minLength: 1,
  maxLength: 48,
} as const satisfies JSONSchemaType<string>;

const rmmzSchemaStructRefParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "struct"],
    properties: {
      kind: { type: "string", const: "struct" },
      default: { type: "object", default: {}, nullable: true },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
      struct: STRUCT_NAME,
    },
  } as const satisfies JSONSchemaType<StructRefParam>);

const rmmzSchemaStructArrayRefParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "struct"],
    properties: {
      kind: { type: "string", const: "struct[]" },
      struct: STRUCT_NAME,
      default: {
        type: "array",
        items: { type: "object" },
        default: [],
        nullable: true,
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<StructArrayRefParam>);

const rmmzSchemaSelectParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "options"],
    properties: {
      kind: { type: "string", const: "select" },
      default: DEFAULT_STRING,
      options: {
        type: "array",
        items: {
          type: "object",
          properties: { value: DEFAULT_STRING, option: DEFAULT_STRING },
          required: ["value", "option"],
        },
        default: [],
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<SelectParam>);
