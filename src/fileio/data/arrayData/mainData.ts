import type { Data_CommonEvent, Data_Troop } from "@RpgTypes/rmmz";
import type {
  Data_Actor,
  Data_Weapon,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Armor,
  Data_Animation,
  Data_MapInfo,
  Data_Tileset,
} from "@RpgTypes/rmmz/rpg";
import { readArrayData } from "./arrayData";
import {
  FILENAME_ACTORS,
  FILENAME_CLASSES,
  FILENAME_SKILLS,
  FILENAME_ITEMS,
  FILENAME_ARMORS,
  FILENAME_ENEMIES,
  FILENAME_STATES,
  FILENAME_ANIMATIONS,
  FILENAME_MAP_INFOS,
  FILENAME_COMMON_EVENTS,
  FILENAME_TILESET,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
} from "./constants";
import type { ReadArrayResult, ArrayDataErrorMessages } from "./types";

export const readActorData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_ACTORS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Actor,
): Promise<ReadArrayResult<Data_Actor>> => {
  return readArrayData(terms, FILENAME_ACTORS, readFileFn, validateFn);
};

export const readClassData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_CLASSES) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Class,
): Promise<ReadArrayResult<Data_Class>> => {
  return readArrayData(terms, FILENAME_CLASSES, readFileFn, validateFn);
};

export const readSkillData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_SKILLS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Skill,
): Promise<ReadArrayResult<Data_Skill>> => {
  return readArrayData(terms, FILENAME_SKILLS, readFileFn, validateFn);
};

export const readItemData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_ITEMS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Item,
): Promise<ReadArrayResult<Data_Item>> => {
  return readArrayData(terms, FILENAME_ITEMS, readFileFn, validateFn);
};

export const readWeaponData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_WEAPONS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Weapon,
): Promise<ReadArrayResult<Data_Weapon>> => {
  return readArrayData(terms, FILENAME_WEAPONS, readFileFn, validateFn);
};

export const readArmorData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_ARMORS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Armor,
): Promise<ReadArrayResult<Data_Armor>> => {
  return readArrayData(terms, FILENAME_ARMORS, readFileFn, validateFn);
};

export const readEnemyData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_ENEMIES) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Enemy,
): Promise<ReadArrayResult<Data_Enemy>> => {
  return readArrayData(terms, FILENAME_ENEMIES, readFileFn, validateFn);
};

export const readTroopData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_TROOPS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Troop,
): Promise<ReadArrayResult<Data_Troop>> => {
  return readArrayData(terms, FILENAME_TROOPS, readFileFn, validateFn);
};

export const readStateData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_STATES) => Promise<string>,
  validateFn: (item: unknown) => item is Data_State,
): Promise<ReadArrayResult<Data_State>> => {
  return readArrayData(terms, FILENAME_STATES, readFileFn, validateFn);
};

export const readAnimationData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_ANIMATIONS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Animation,
): Promise<ReadArrayResult<Data_Animation>> => {
  return readArrayData(terms, FILENAME_ANIMATIONS, readFileFn, validateFn);
};

export const readTilesetData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_TILESET) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Tileset,
): Promise<ReadArrayResult<Data_Tileset>> => {
  return readArrayData(terms, FILENAME_TILESET, readFileFn, validateFn);
};

export const readCommonEventData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_COMMON_EVENTS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_CommonEvent,
): Promise<ReadArrayResult<Data_CommonEvent>> => {
  return readArrayData(terms, FILENAME_COMMON_EVENTS, readFileFn, validateFn);
};

export const readMapInfoData = (
  terms: ArrayDataErrorMessages,
  readFileFn: (filename: typeof FILENAME_MAP_INFOS) => Promise<string>,
  validateFn: (item: unknown) => item is Data_MapInfo,
): Promise<ReadArrayResult<Data_MapInfo>> => {
  return readArrayData(terms, FILENAME_MAP_INFOS, readFileFn, validateFn);
};
