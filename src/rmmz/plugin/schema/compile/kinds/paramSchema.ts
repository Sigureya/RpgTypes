import type { JSONSchemaType } from "ajv";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import type {
  KindBase,
  KindOfBoolean,
  KindOfCombo,
  KindOfFile,
  KindOfFileArray,
  KindOfNumber,
  KindOfNumberArray,
  KindOfSelect,
  KindOfString,
  KindOfStringArray,
  KindOfStructArrayRef,
  KindOfStructRef,
  KindOfRpgDataId,
} from "./core/primitiveParams";

const BASIC_TEXT = {
  type: "string",
  nullable: true,
  maxLength: 100,
} as const satisfies JSONSchemaType<string | null>;

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
    KindBase,
    string,
    "kind",
    | KindOfBoolean
    | KindOfCombo
    | KindOfRpgDataId
    | KindOfFile
    | KindOfFileArray
    | KindOfNumber
    | KindOfNumberArray
    | KindOfStructRef
    | KindOfStructArrayRef
    | KindOfSelect
    | KindOfString
    | KindOfStringArray
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
  } as const satisfies JSONSchemaType<KindOfBoolean>);

const rmmzSchemaNumberParam = () =>
  ({
    type: "object",
    required: ["kind", "default"],
    properties: {
      digit: { type: "integer", minimum: 0, default: 0, nullable: true },
      min: { type: "number", nullable: true },
      max: { type: "number", nullable: true },
      default: { type: "number", default: 0 },
      kind: { type: "string", const: "number" },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfNumber>);

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
      digit: { type: "integer", minimum: 0, default: 0, nullable: true },
      min: { type: "number", nullable: true },
      max: { type: "number", nullable: true },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfNumberArray>);

const rmmzSchemaStringParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: { type: "string", const: "string" },
      default: { type: "string", default: "" },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfString>);

const rmmzSchemaStringArrayParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default"],
    properties: {
      kind: { type: "string", const: "string[]" },
      default: {
        type: "array",
        items: { type: "string", default: "" },
        default: [],
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfStringArray>);

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
  } as const satisfies JSONSchemaType<KindOfRpgDataId>);

const rmmzSchemaComboParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "options"],
    properties: {
      kind: { type: "string", const: "combo" },
      default: { type: "string", default: "" },
      options: {
        type: "array",
        items: { type: "string" },
        default: [],
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfCombo>);

const rmmzSchemaFilePathParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "dir"],
    properties: {
      kind: { type: "string", const: "file" },
      default: { type: "string", default: "" },
      dir: { type: "string", default: "" },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfFile>);

const rmmzSchemaFileArrayParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "dir"],
    properties: {
      kind: { type: "string", const: "file[]" },
      default: { type: "array", items: { type: "string" }, default: [] },
      dir: { type: "string", default: "" },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfFileArray>);

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
      struct: { type: "string", default: "", minLength: 1 },
    },
  } as const satisfies JSONSchemaType<KindOfStructRef>);

const rmmzSchemaStructArrayRefParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "struct"],
    properties: {
      kind: { type: "string", const: "struct[]" },
      struct: { type: "string", default: "", minLength: 1 },
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
  } as const satisfies JSONSchemaType<KindOfStructArrayRef>);

const rmmzSchemaSelectParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "options"],
    properties: {
      kind: { type: "string", const: "select" },
      default: { type: "string", default: "" },
      options: {
        type: "array",
        items: {
          type: "object",
          properties: { value: { type: "string" }, option: { type: "string" } },
          required: ["value", "option"],
        },
        default: [],
      },
      desc: BASIC_TEXT,
      text: BASIC_TEXT,
      parent: BASIC_TEXT,
    },
  } as const satisfies JSONSchemaType<KindOfSelect>);
