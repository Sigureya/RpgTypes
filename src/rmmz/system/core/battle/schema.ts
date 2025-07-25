import type { JSONSchemaType } from "ajv";
import type { BattleRuleRMMZ } from "./types";

const SCHEMA_SYSTEM_BATTLE_RULE_RMMZ = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: {
    magicSkills: {
      type: "array",
      items: { type: "number" },
      minItems: 0,
      uniqueItems: true,
    },
    battleSystem: { type: "number" },
  },
} as const satisfies JSONSchemaType<BattleRuleRMMZ>;

export default SCHEMA_SYSTEM_BATTLE_RULE_RMMZ;
