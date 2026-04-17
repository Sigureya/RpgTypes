import type {
  Data_Actor,
  Data_Enemy,
  Data_Class,
  Data_Item,
  Data_Weapon,
  Data_Armor,
  Data_Animation,
  Data_Skill,
  Data_MapInfo,
  Data_State,
  Data_Tileset,
} from "@RpgTypes/rmmz/rpg";
import validateActor from "./actor/actorValidate";
import validateAnimation from "./animation/animationValidate";
import validateArmor from "./armor/armorValidate";
import validateClass from "./class/classValidate";
import validateEnemy from "./enemy/enemyValidate";
import validateItem from "./item/itemValidate";
import validateMapInfo from "./mapinfo/mapinfoValidate";
import validateSkill from "./skill/skillValidate";
import validateState from "./state/stateValidate";
import validateTileset from "./tileset/tilesetValidate";
import validateWeapon from "./weapon/weaponValidate";

export const isDataActor = (data: unknown): data is Data_Actor => {
  return validateActor(data);
};

export const isDataAnimation = (data: unknown): data is Data_Animation => {
  return validateAnimation(data);
};

export const isDataArmor = (data: unknown): data is Data_Armor => {
  return validateArmor(data);
};

export const isDataClass = (data: unknown): data is Data_Class => {
  return validateClass(data);
};

export const isDataEnemy = (data: unknown): data is Data_Enemy => {
  return validateEnemy(data);
};

export const isDataItem = (data: unknown): data is Data_Item => {
  return validateItem(data);
};

export const isDataMapInfo = (data: unknown): data is Data_MapInfo => {
  return validateMapInfo(data);
};

export const isDataSkill = (data: unknown): data is Data_Skill => {
  return validateSkill(data);
};

export const isDataState = (data: unknown): data is Data_State => {
  return validateState(data);
};

export const isDataWeapon = (data: unknown): data is Data_Weapon => {
  return validateWeapon(data);
};

export const isDataTileset = (data: unknown): data is Data_Tileset => {
  return validateTileset(data);
};
