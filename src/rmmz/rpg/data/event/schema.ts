import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { JSONSchemaType } from "ajv";
import type {
  BattleEventPage,
  Data_TroopUnknonw,
  Troop_EventConditions,
  Troop_Member,
} from "./troop";

const SCHEMA_DATA_TROOP = {
  type: "object",
  required: [
    "id",
    "name",
    "members",
    "pages",
  ] satisfies (keyof Data_TroopUnknonw)[],
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
          list: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: true,
              required: [
                "code",
                "indent",
                "parameters",
              ] satisfies (keyof EventCommandUnknown)[],
              properties: {
                code: { type: "integer" },
                indent: { type: "integer" },
                parameters: {
                  type: "array",
                },
              },
            },
          },
        },
      } satisfies JSONSchemaType<Omit<BattleEventPage, "list">>,
    },
  },
} as const;

export default SCHEMA_DATA_TROOP;
