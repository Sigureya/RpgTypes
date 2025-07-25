import type { JSONSchemaType } from "ajv";
import { SCHEMA_SYSTEM_EDITOR_SETTINGS } from "./editor/schema";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./testPlay/schema";
import type { System_GameEditorBundleRMMZ } from "./types";

const SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE = {
  additionalProperties: false,
  type: "object",
  required: [
    "battleback1Name",
    "battleback2Name",
    "battlerHue",
    "battlerName",
    "editMapId",
    "editor",
    "testBattlers",
    "testTroopId",
  ],
  properties: {
    testBattlers: {
      type: "array",
      items: SCHEMA_SYSTEM_TEST_BATTLER,
    },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    editor: SCHEMA_SYSTEM_EDITOR_SETTINGS,
  },
} as const satisfies JSONSchemaType<System_GameEditorBundleRMMZ>;

export default SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE;
