import type { Data_State } from "./state";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_STATE = {
  type: "object",
  required: [
    "name",
    "id",
    "iconIndex",
    "message1",
    "message2",
    "message3",
    "message4",
    "restriction",
    "priority",
    "motion",
    "overlay",
    "removeAtBattleEnd",
    "removeByDamage",
    "removeByWalking",
    "removeByRestriction",
    "autoRemovalTiming",
    "minTurns",
    "maxTurns",
    "chanceByDamage",
    "stepsToRemove",
    "note",
  ],

  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    iconIndex: { type: "integer", minimum: 0 },

    message1: { type: "string" },
    message2: { type: "string" },
    message3: { type: "string" },
    message4: { type: "string" },

    restriction: { type: "integer" },
    priority: { type: "integer" },
    motion: { type: "integer" },
    overlay: { type: "integer" },

    removeAtBattleEnd: { type: "boolean" },
    removeByDamage: { type: "boolean" },

    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },

    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: { type: "integer" },

    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },

    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },

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
      },
    } satisfies JSONSchemaType<Data_State["traits"]>,
  },
} as const satisfies JSONSchemaType<Data_State>;
