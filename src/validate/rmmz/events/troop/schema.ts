import type { EventCommandUnknown } from "@RpgTypes/libs";
import type {
  Data_TroopUnknonw,
  Troop_Member,
  Troop_EventConditions,
  BattleEventPage,
} from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

const SCHEMA_TROOP_MEMBER_ARRAY = {
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
  },
} as const satisfies JSONSchemaType<Troop_Member[]>;

const SCHEMA_TROOP_EVENT_CONDITIONS = {
  type: "object",
  required: [
    "actorHp",
    "actorId",
    "actorValid",

    "enemyValid",
    "enemyIndex",
    "enemyHp",

    "switchValid",
    "switchId",

    "turnEnding",
    "turnValid",
    "turnA",
    "turnB",
  ],
  properties: {
    actorValid: { type: "boolean" },
    actorHp: { type: "integer", minimum: 0 },
    actorId: { type: "integer", minimum: 0 },
    enemyValid: { type: "boolean" },
    enemyIndex: { type: "integer", minimum: 0 },
    enemyHp: { type: "integer", minimum: 0 },
    switchValid: { type: "boolean" },
    switchId: { type: "integer", minimum: 0 },
    turnEnding: { type: "boolean" },
    turnValid: { type: "boolean" },
    turnA: { type: "integer" },
    turnB: { type: "integer" },
  },
} satisfies JSONSchemaType<Troop_EventConditions>;

export const SCHEMA_DATA_TROOP = {
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
    members: SCHEMA_TROOP_MEMBER_ARRAY,
    pages: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: true,
        required: ["conditions", "span"],
        properties: {
          conditions: SCHEMA_TROOP_EVENT_CONDITIONS,
          span: { type: "integer", minimum: 0 },
          list: {
            type: "array",
            items: {
              type: "object",
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
