import Ajv from "ajv";
import SCHEMA_DATA_WEAPON from "../../../../validate/rmmz/rpg/weapon/schema";
import { SCHEMA_DATA_ITEM, SCHEMA_DATA_SKILL } from "./schema.usableItem";
import type { Data_Weapon } from "./traitContainers";
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
