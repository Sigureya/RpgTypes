import type { TestBattler } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_TEST_BATTLE = {
  type: "object",
  required: ["actorId", "level", "equips"],
  properties: {
    level: { type: "integer", minimum: 0 },
    actorId: { type: "integer", minimum: 0 },
    equips: {
      type: "array",
      items: { type: "integer" },
    },
  },
} as const satisfies JSONSchemaType<TestBattler>;
