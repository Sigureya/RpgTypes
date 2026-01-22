import type { System_TestBattle } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_TEST_PLAY = {
  type: "object",
  required: [
    "testBattlers",
    "testTroopId",
    "battleback1Name",
    "battleback2Name",
  ],
  properties: {
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    testBattlers: {
      type: "array",
      items: {
        type: "object",
        required: ["actorId", "equips", "level"],
        properties: {
          actorId: { type: "integer" },
          level: { type: "integer", minimum: 0 },
          equips: {
            type: "array",
            items: { type: "integer" },
          },
        },
      },
    },
  },
} as const satisfies JSONSchemaType<System_TestBattle>;
