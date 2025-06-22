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
} from "./core/primitiveParams";

const BASIC_TEXT = {
  type: "string",
  nullable: true,
  maxLength: 100,
} as const satisfies JSONSchemaType<string | null>;

export const makeParamSchema = (): DiscriminatedUnionSchemaType3<
  KindBase,
  string,
  "kind",
  | KindOfBoolean
  | KindOfNumber
  | KindOfCombo
  | KindOfFile
  | KindOfFileArray
  | KindOfNumberArray
  | KindOfSelect
  | KindOfString
  | KindOfStringArray
  | KindOfStructRef
  | KindOfStructArrayRef
> => ({
  type: "object",
  discriminator: {
    propertyName: "kind",
  },
  oneOf: [
    makeSchemaBooleanParam() satisfies JSONSchemaType<KindOfBoolean>,
    rmmzSchemaNumberParam() satisfies JSONSchemaType<KindOfNumber>,
    rmmzSchemaComboParam() satisfies JSONSchemaType<KindOfCombo>,
    rmmzSchemaFilePathParam() satisfies JSONSchemaType<KindOfFile>,
    rmmzSchemaFileArrayParam() satisfies JSONSchemaType<KindOfFileArray>,
    rmmzSchemaNumberArrayParam() satisfies JSONSchemaType<KindOfNumberArray>,
    rmmzSchemaStringParam() satisfies JSONSchemaType<KindOfString>,
    rmmzSchemaStringArrayParam() satisfies JSONSchemaType<KindOfStringArray>,
  ],
});

const rmmzSchemaNumberParam = (): JSONSchemaType<KindOfNumber> => ({
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
});

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
  } satisfies JSONSchemaType<KindOfBoolean>);

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
  } satisfies JSONSchemaType<KindOfCombo>);

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
  } satisfies JSONSchemaType<KindOfFile>);
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
  } satisfies JSONSchemaType<KindOfFileArray>);

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
  } satisfies JSONSchemaType<KindOfNumberArray>);

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
  } satisfies JSONSchemaType<KindOfString>);

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
  } satisfies JSONSchemaType<KindOfStringArray>);
