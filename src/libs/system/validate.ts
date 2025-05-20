import Ajv from "ajv";
import type { System_BooleanOptions } from "./subset";
import { SCHEMA_SYSTEM_BOOLEAN_OPTIONS } from "./booleanOptions";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./members/testBattler/schema";
import type { AttackMotion, TestBattler } from "./members";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./members/attackMotion/schema";

const ajv = new Ajv();
const booleanOptions = ajv.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);

export const isSystemBooleanOptions = (
  data: object
): data is System_BooleanOptions => {
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
