import type { JSONSchemaType } from "ajv";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import type {
  KindBase,
  KindOfBoolean,
  KindOfCombo,
  KindOfNumber,
  KindOfFile,
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
  KindOfBoolean | KindOfNumber | KindOfCombo | KindOfFile
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
