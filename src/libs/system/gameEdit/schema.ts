import type { JSONSchemaType } from "ajv";
import { SCHEMA_SYSTEM_EDITOR_SETTINGS } from "./editor/schema";
import type { System_GameEditorRMMZ } from "./gameEditorType";
import type { TestBattler } from "./testPlay";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./testPlay/schema";

export const SCHEMA_SYSTEM_GAME_EDITOR_RMMZ = {
  additionalProperties: false,
  required: ["testBattlers", "testTroopId", "editor"],
  type: "object",
  properties: {
    editor: SCHEMA_SYSTEM_EDITOR_SETTINGS,

    testBattlers: {
      type: "array",
      items: SCHEMA_SYSTEM_TEST_BATTLER,
    } satisfies JSONSchemaType<TestBattler[]>,
    testTroopId: { type: "number" },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
  },
} as const satisfies JSONSchemaType<System_GameEditorRMMZ>;
