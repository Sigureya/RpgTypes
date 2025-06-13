import Ajv from "ajv";
import type { AttackMotion, System_ImageSize } from "./core";
import {
  SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  SCHEMA_SYSTEM_IMAGE_SIZE,
} from "./core";
import type { TestBattler } from "./gameEdit";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./gameEdit/testPlay/schema";
import { mergeSystemSchema, allSystemSchema } from "./schemaMerge";
import type { Data_System } from "./system";

const ajv = new Ajv({ strict: true });

const schema = mergeSystemSchema(allSystemSchema());
const systemValidate = ajv.compile(schema);

export const isDataSystem = (data: unknown): data is Data_System => {
  return systemValidate(data);
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
