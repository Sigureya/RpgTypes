import Ajv from "ajv";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_State,
  Data_Weapon,
} from "./traitContainers";
import {
  SCHEMA_DATA_ACTOR,
  SCHEMA_DATA_ARMMOR,
  SCHEMA_DATA_CLASS,
  SCHEMA_DATA_ENEMY,
  SCHEMA_DATA_STATE,
  SCHEMA_DATA_WEAPON,
} from "./traitContainers";
import type { Data_Item, Data_Skill } from "./usableItems";
import { SCHEMA_DATA_ITEM, SCHEMA_DATA_SKILL } from "./usableItems";

const ajv = new Ajv();
const item = ajv.compile(SCHEMA_DATA_ITEM);
const skill = ajv.compile(SCHEMA_DATA_SKILL);
const actor = ajv.compile(SCHEMA_DATA_ACTOR);
const armor = ajv.compile(SCHEMA_DATA_ARMMOR);
const weapon = ajv.compile(SCHEMA_DATA_WEAPON);
const enemy = ajv.compile(SCHEMA_DATA_ENEMY);
const state = ajv.compile(SCHEMA_DATA_STATE);
const class_ = ajv.compile(SCHEMA_DATA_CLASS);

export const isDataItem = (data: unknown): data is Data_Item => {
  return item(data);
};

export const isDataSkill = (data: unknown): data is Data_Skill => {
  return skill(data);
};

export const isDataActor = (data: unknown): data is Data_Actor => {
  return actor(data);
};

export const isDataArmor = (data: unknown): data is Data_Armor => {
  return armor(data);
};

export const isDataWeapon = (data: unknown): data is Data_Weapon => {
  return weapon(data);
};

export const isDataEnemy = (data: unknown): data is Data_Enemy => {
  return enemy(data);
};

export const isDataState = (data: unknown): data is Data_State => {
  return state(data);
};

export const isDataClass = (data: unknown): data is Data_Class => {
  return class_(data);
};
