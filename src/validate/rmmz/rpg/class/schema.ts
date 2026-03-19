import type { Data_Class } from "@RpgTypes/rmmz/rpg";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_CLASS = {
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
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
        { type: "array", items: { type: "integer" } },
      ],
      minItems: 8,
      maxItems: 8,
    },
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
