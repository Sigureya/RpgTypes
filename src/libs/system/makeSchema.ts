import type { JSONSchemaType } from "ajv";
import type { OmitByType } from "src/templates";
import type { AudioFileParams } from "src/utils";
import type {
  AttackMotion,
  Data_Vehicle,
  System_Advanced,
  System_AudioFiles,
  System_BooleanGameOptions,
  System_Terms,
} from "./core";
import { SCHEMA_SYSTEM_ADVANCED, SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./core";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./core/attackMotion/schema";
import { SCHEMA_SYSTEM_AUDIOFILES } from "./core/audio/schema";
import { SCHEMA_SYSTEM_VEHICLE } from "./core/vehicle/schema";
import type { EditorSettings, TestBattler } from "./gameEdit";
import type { Data_System } from "./system";

export const SCHEMA_SYSTEM_PARTIAL_BUNDLE = {
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
  OmitByType<
    Data_System,
    | number[]
    | string[]
    | string
    | number
    | boolean
    | AudioFileParams
    | EditorSettings
    | System_Terms
    | AudioFileParams[]
    | boolean[]
    | TestBattler[]
  >
>;

const makeSystemSchema = () =>
  ({
    type: "object",
    required: [],
    allOf: [SCHEMA_SYSTEM_AUDIOFILES, SCHEMA_SYSTEM_BOOLEAN_OPTIONS],
  } as const satisfies JSONSchemaType<
    Pick<Data_System, keyof System_BooleanGameOptions | keyof System_AudioFiles>
  >);
