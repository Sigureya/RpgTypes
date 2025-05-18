import type { JSONSchemaType } from "ajv";
import type {
  BattleEventPage,
  Data_Troop,
  Troop_EventConditions,
  Troop_Member,
} from "./troop";
import type { SomeJSONSchema } from "ajv/dist/types/json-schema";

export const SCHEMA_DATA_TROOP = {
  type: "object",
  required: ["id", "name", "members", "pages"] satisfies (keyof Data_Troop)[],
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
        required: ["enemyId", "x", "y", "hidden"],
      } as const satisfies JSONSchemaType<Troop_Member>,
    },
    pages: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: true,
        required: ["conditions", "span"],
        properties: {
          conditions: {
            type: "object",
            required: ["actorHp", "actorId", "enemyValid", "switchValid"],
            properties: {
              actorHp: {
                type: "integer",
                minimum: 0,
              },
              actorId: {
                type: "integer",
                minimum: 0,
              },
              enemyValid: {
                type: "integer",
                minimum: 0,
              },
              switchValid: {
                type: "integer",
                minimum: 0,
              },
            },
          } satisfies JSONSchemaType<Troop_EventConditions>,
          span: { type: "number" },
          list: { type: "array" },
        },
      } satisfies JSONSchemaType<Omit<BattleEventPage, "list">>,
    },
  } as Record<keyof Data_Troop, SomeJSONSchema>,
} as const;
