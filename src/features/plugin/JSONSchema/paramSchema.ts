import type {
  BooleanParam,
  ComboParam,
  RpgDataIdParam,
  FileParam,
  FileArrayParam,
  NumberParam,
  NumberArrayParam,
  StructRefParam,
  StructArrayRefParam,
  SelectParam,
  StringParam,
  StringArrayParam,
} from "@RpgTypes/rmmz/plugin/schema/compile";
import type { ParamBase } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/paramBase";
import type { JSONSchemaType } from "ajv";
import type { DiscriminatedUnionSchemaType3 } from "src/libs/templates/discriminator/discriminator3";

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

export const makePluginParamSchema = () =>
  ({
    type: "object",
    discriminator: {
      propertyName: "kind",
    },
    oneOf: [
      SCHEMA_BOOLEAN_PARAM,
      SCHEMA_COMBO_PARAM,
      SCHEMA_DATAID_PARAM,
      SCHEMA_FILEPATH_PARAM,
      SCHEMA_FILEARRAY_PARAM,
      SCHEMA_NUMBER_PARAM,
      SCHEMA_NUMBER_ARRAY_PARAM,
      SCHEMA_SELECT_PARAM,
      SCHEMA_STRUCT_REF_PARAM,
      SCHEMA_STRUCT_ARRAY_REF_PARAM,
      SCHEMA_STRING_PARAM,
      SCHEMA_STRING_ARRAY_PARAM,
    ],
  } as const satisfies DiscriminatedUnionSchemaType3<
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
const SCHEMA_BOOLEAN_PARAM = {
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
} as const satisfies JSONSchemaType<BooleanParam>;

const SCHEMA_NUMBER_PARAM = {
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
} as const satisfies JSONSchemaType<NumberParam>;

const SCHEMA_NUMBER_ARRAY_PARAM = {
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
    min: NUMBER_OPTIONAl,
    max: NUMBER_OPTIONAl,
    desc: BASIC_TEXT,
    text: BASIC_TEXT,
    parent: BASIC_TEXT,
  },
} as const satisfies JSONSchemaType<NumberArrayParam>;

const SCHEMA_STRING_PARAM = {
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
} as const satisfies JSONSchemaType<StringParam>;

const SCHEMA_STRING_ARRAY_PARAM = {
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
} as const satisfies JSONSchemaType<StringArrayParam>;

const SCHEMA_DATAID_PARAM = {
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
} as const satisfies JSONSchemaType<RpgDataIdParam>;

const SCHEMA_COMBO_PARAM = {
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
} as const satisfies JSONSchemaType<ComboParam>;

const SCHEMA_FILEPATH_PARAM = {
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
} as const satisfies JSONSchemaType<FileParam>;

const SCHEMA_FILEARRAY_PARAM = {
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
} as const satisfies JSONSchemaType<FileArrayParam>;
const STRUCT_NAME = {
  type: "string",
  pattern: "^[a-zA-Z][a-zA-Z0-9]*$",
  minLength: 1,
  maxLength: 48,
} as const satisfies JSONSchemaType<string>;

const SCHEMA_STRUCT_REF_PARAM = {
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
} as const satisfies JSONSchemaType<StructRefParam>;

const SCHEMA_STRUCT_ARRAY_REF_PARAM = {
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
} as const satisfies JSONSchemaType<StructArrayRefParam>;

const SCHEMA_SELECT_PARAM = {
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
} as const satisfies JSONSchemaType<SelectParam>;
