import type { JSONSchemaType } from "ajv";
import type { OmitByType } from "src/templates";
import type { AudioFileParams } from "src/utils";
import type {
  AttackMotion,
  Data_Vehicle,
  System_Advanced,
  System_AudioFiles,
  System_BooleanOptionsRMMMZ,
  System_Terms,
} from "./core";
import { SCHEMA_SYSTEM_ADVANCED, SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./core";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./core/attackMotion/schema";
import { SCHEMA_SYSTEM_AUDIOFILES } from "./core/audio/schema";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY } from "./core/terms/basic/schema";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY } from "./core/terms/commands/schema";
import { SCHEMA_SYSTEM_TERMS_MESSAGES } from "./core/terms/messages/schema";
import { SCHEMA_SYSTEM_PARAM_NAMS_ARRAY } from "./core/terms/paramArray/schema";
import { SCHEMA_SYSTEM_VEHICLE } from "./core/vehicle/schema";
import type { EditorSettings, TestBattler } from "./gameEdit";
import type { Data_System } from "./system";

export const SCHEMA_SYSTEM_PARTIAL_BUNDLE: JSONSchemaType<
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
> = {
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
};

export const SCHEMA_SYSTEM_TERMS_BUNDLE = {
  required: ["terms"],
  additionalProperties: false,
  type: "object",
  properties: {
    terms: {
      additionalProperties: false,
      type: "object",
      required: ["messages", "commands", "basic", "params"],
      properties: {
        messages: SCHEMA_SYSTEM_TERMS_MESSAGES,
        commands: SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY,
        basic: SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY,
        params: SCHEMA_SYSTEM_PARAM_NAMS_ARRAY,
      },
    },
  },
} as const;

const makeSystemSchema = () =>
  ({
    type: "object",
    required: [],
    allOf: [SCHEMA_SYSTEM_AUDIOFILES, SCHEMA_SYSTEM_BOOLEAN_OPTIONS],
  } as const satisfies JSONSchemaType<
    Pick<
      Data_System,
      keyof System_BooleanOptionsRMMMZ | keyof System_AudioFiles
    >
  >);
