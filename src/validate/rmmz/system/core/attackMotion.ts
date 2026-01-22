import type { AttackMotion } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: {
    type: { type: "number" },
    weaponImageId: { type: "number" },
  },
} as const satisfies JSONSchemaType<AttackMotion>;
