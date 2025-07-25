import type { JSONSchemaType } from "ajv";
import type { TestBattler } from "./types";

const SCHEMA_SYSTEM_TEST_BATTLER = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: {
    actorId: { type: "integer" },

    level: { type: "integer", minimum: 1 },
    equips: {
      type: "array",
      items: { type: "integer" },
    },
  },
} as const satisfies JSONSchemaType<TestBattler>;

export default SCHEMA_SYSTEM_TEST_BATTLER;
