import type { JSONSchemaType } from "ajv";
import type { AttackMotion } from "./types";

const SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: {
    type: { type: "number" },
    weaponImageId: { type: "number" },
  },
} as const satisfies JSONSchemaType<AttackMotion>;

export default SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION;
