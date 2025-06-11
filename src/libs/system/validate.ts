import Ajv from "ajv";
import type {
  AttackMotion,
  System_BooleanOptionsRMMMZ,
  TestBattler,
} from "./core";
import { SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./core";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./core/attackMotion/schema";
import { SCHEMA_SYSTEM_IMAGE_SIZE } from "./core/imageSize/size";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./core/testBattler/schema";
import type { System_ImageSize } from "./subset";

const ajv = new Ajv({ strict: false });
const booleanOptions = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);

export const isSystemBooleanOptions = (
  data: object
): data is System_BooleanOptionsRMMMZ => {
  return booleanOptions(data);
};

const testBattler = ajv.compile(SCHEMA_SYSTEM_TEST_BATTLER);

export const isTestBattler = (data: unknown): data is TestBattler => {
  return testBattler(data);
};

const attackMotion = ajv.compile(SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION);
export const isAttackMotion = (data: unknown): data is AttackMotion => {
  return attackMotion(data);
};
const imageSize = ajv.compile(SCHEMA_SYSTEM_IMAGE_SIZE);
export const isImageSize = (data: unknown): data is System_ImageSize => {
  return imageSize(data);
};
