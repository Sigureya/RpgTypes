import type { JSONSchemaType } from "ajv";
import type { AttackMotion, Data_Vehicle, System_Advanced } from "./core";
import SCHEMA_SYSTEM_ADVANCED from "./core/advanced/schema";
import SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION from "./core/attackMotion/schema";
import SCHEMA_SYSTEM_VEHICLE from "./core/vehicle/schema";
import type { Data_System } from "./system";

const SCHEMA_SYSTEM_PARTIAL_BUNDLE = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: {
    airship: SCHEMA_SYSTEM_VEHICLE satisfies JSONSchemaType<Data_Vehicle>,
    boat: SCHEMA_SYSTEM_VEHICLE satisfies JSONSchemaType<Data_Vehicle>,
    ship: SCHEMA_SYSTEM_VEHICLE satisfies JSONSchemaType<Data_Vehicle>,
    advanced: SCHEMA_SYSTEM_ADVANCED satisfies JSONSchemaType<System_Advanced>,
    attackMotions: {
      type: "array",
      items: SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
    } satisfies JSONSchemaType<AttackMotion[]>,
  },
} as const satisfies JSONSchemaType<
  Pick<Data_System, "airship" | "boat" | "ship" | "advanced" | "attackMotions">
>;

export default SCHEMA_SYSTEM_PARTIAL_BUNDLE;
