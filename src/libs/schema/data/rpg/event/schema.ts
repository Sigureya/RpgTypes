import type { JSONSchemaType } from "ajv";
import type { Data_Troop } from "./troop";
export const SCHEMA_DATA_TROOP = {
  type: "object",
  required: ["id", "name", "members"],
  properties: {
    id: { type: "integer", minimum: 0 },
    name: { type: "string" },
    members: {
      type: "array",
      items: {
        type: "object",
        properties: {
          enemyId: { type: "integer" },
          x: { type: "integer" },
          y: { type: "integer" },
          hidden: { type: "boolean" },
        },
        required: ["enemyId", "x", "y"],
      },
    } as const satisfies JSONSchemaType<Data_Troop["members"]>,
    pages: {
      type: "array",
      items: {
        type: "object",
        properties: {
          conditions: {
            type: "object",
            properties: {
              switch1Valid: { type: "boolean" },
              switch2Valid: { type: "boolean" },
              variableValid: { type: "boolean" },
              selfSwitchValid: { type: "boolean" },
              actorValid: { type: "boolean" },
              enemyValid: { type: "boolean" },
              timerValid: { type: "boolean" },
            },
          },
          span: { type: "string" },
        },
      } as const,
      required: ["conditions", "span"],
    },
  },
};
