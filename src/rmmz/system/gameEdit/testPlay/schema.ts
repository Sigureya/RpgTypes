import type { JSONSchemaType } from "ajv";
import SCHEMA_SYSTEM_TEST_BATTLER from "./testBattler/schema";
import type { System_TestBattle } from "./types";

export const SCHEMA_SYSTEM_TEST_PLAY = {
  additionalProperties: false,
  type: "object",
  required: [
    "testBattlers",
    "testTroopId",
    "battleback1Name",
    "battleback2Name",
  ],
  properties: {
    testBattlers: {
      type: "array",
      items: SCHEMA_SYSTEM_TEST_BATTLER,
    },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
  },
} as const satisfies JSONSchemaType<System_TestBattle>;
