import Ajv from "ajv";
import { SCHEMA_DATA_ITEM, SCHEMA_DATA_SKILL } from "./schema.usableItem";
import type { Data_Actor, Data_Armor, Data_Weapon } from "./traitContainers";
import SCHEMA_DATA_WEAPON from "./traitContainers/weapon/schema";
import type { Data_Item, Data_Skill } from "./usableItems";

const ajv = new Ajv({
  strict: true,
});
const item = ajv.compile(SCHEMA_DATA_ITEM);

export const isDataItem = (data: unknown): data is Data_Item => {
  return item(data);
};

const skill = ajv.compile(SCHEMA_DATA_SKILL);
export const isDataSkill = (data: unknown): data is Data_Skill => {
  return skill(data);
};

const weapon = ajv.compile(SCHEMA_DATA_WEAPON);
export const isDataWeapon = (data: unknown): data is Data_Weapon => {
  return weapon(data);
};
