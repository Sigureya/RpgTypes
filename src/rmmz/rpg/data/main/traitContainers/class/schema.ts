import type { JSONSchemaType } from "ajv";
import type { Data_Class } from "./types";

const SCHEMA_DATA_CLASS = {
  type: "object",
  required: [
    "name",
    "id",
    "note",
    "expParams",
    "params",
    "learnings",
    "traits",
  ],

  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },

    expParams: {
      type: "array",
      items: { type: "integer" },
    },
    params: {
      type: "array",
      items: [
        { type: "integer" }, // mhp
        { type: "integer" }, // mmp
        { type: "integer" }, // atk
        { type: "integer" }, // def
        { type: "integer" }, // mat
        { type: "integer" }, // mdf
        { type: "integer" }, // agi
        { type: "integer" }, // luk
      ],
      minItems: 8,
      maxItems: 8,
    } satisfies JSONSchemaType<Data_Class["params"]>,
    learnings: {
      type: "array",
      items: {
        type: "object",
        properties: {
          level: { type: "integer" },
          skillId: { type: "integer" },
          note: { type: "string" },
        },
        required: ["level", "skillId"],
        additionalProperties: false,
      },
    } satisfies JSONSchemaType<Data_Class["learnings"]>,
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" },
        },
        required: ["code", "dataId", "value"],
        additionalProperties: false,
      },
    } satisfies JSONSchemaType<Data_Class["traits"]>,
  },

  additionalProperties: false,
} satisfies JSONSchemaType<Data_Class>;
export default SCHEMA_DATA_CLASS;
