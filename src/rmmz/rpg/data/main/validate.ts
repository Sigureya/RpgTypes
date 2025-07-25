import Ajv from "ajv";
import { SCHEMA_DATA_ITEM, SCHEMA_DATA_SKILL } from "./schema.usableItem";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_State,
  Data_Weapon,
} from "./traitContainers";
import { SCHEMA_DATA_ACTOR } from "./traitContainers/actor/schema";
import SCHEMA_DATA_ARMMOR from "./traitContainers/armor/schema";
import SCHEMA_DATA_CLASS from "./traitContainers/class/schema";
import SCHEMA_DATA_ENEMY from "./traitContainers/enemy/schema";
import SCHEMA_DATA_STATE from "./traitContainers/state/schema";
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

const actor = ajv.compile(SCHEMA_DATA_ACTOR);
export const isDataActor = (data: unknown): data is Data_Actor => {
  return actor(data);
};

const armor = ajv.compile(SCHEMA_DATA_ARMMOR);
export const isDataArmor = (data: unknown): data is Data_Armor => {
  return armor(data);
};

const weapon = ajv.compile(SCHEMA_DATA_WEAPON);
export const isDataWeapon = (data: unknown): data is Data_Weapon => {
  return weapon(data);
};

export const isDataState = (data: unknown): data is Data_State => {
  const state = ajv.compile(SCHEMA_DATA_STATE);
  return state(data);
};
