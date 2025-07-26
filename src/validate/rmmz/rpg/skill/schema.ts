import type { Data_Skill } from "@RpgTypes/rpg";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_SKILL = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "message1",
    "message2",
    "messageType",
    "mpCost",
    "requiredWtypeId1",
    "requiredWtypeId2",
    "stypeId",
    "tpCost",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "note",
    "effects",
  ],

  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },

    messageType: { type: "integer", minimum: 0 },
    mpCost: { type: "integer" },
    requiredWtypeId1: { type: "integer", minimum: 0 },
    requiredWtypeId2: { type: "integer", minimum: 0 },
    stypeId: { type: "integer", minimum: 0 },
    tpCost: { type: "integer" },

    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer", minimum: 0 },
    occasion: { type: "integer" },
    repeats: { type: "integer", minimum: 0 },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: { type: "integer" },
    tpGain: { type: "integer" },

    note: { type: "string" },

    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer", minimum: 0 },
          value1: { type: "integer" },
          value2: { type: "integer" },
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: false,
      },
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer" },
        elementId: { type: "integer", minimum: 0 },
        formula: { type: "string" },
        variance: { type: "integer" },
        critical: { type: "boolean" },
      },
      required: ["type", "elementId", "formula", "variance", "critical"],
      additionalProperties: false,
    },
  },

  additionalProperties: false,
} as const satisfies JSONSchemaType<Data_Skill>;
