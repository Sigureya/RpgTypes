import type {
  Data_Actor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Armor,
  Data_MapInfo,
  Data_Animation,
} from "@RpgTypes/rmmz/rpg";
import { readArrayData } from "./arrayData";
import {
  FILENAME_ACTORS,
  FILENAME_CLASSES,
  FILENAME_ANIMATIONS,
  FILENAME_ARMORS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
} from "./constants";
import type { ReadArrayResult, TermsOfReadArrayData } from "./types";

export const readActorData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Actor,
): Promise<ReadArrayResult<Data_Actor>> => {
  return readArrayData(terms, FILENAME_ACTORS, readFileFn, validateFn);
};

export const readClassData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Class,
): Promise<ReadArrayResult<Data_Class>> => {
  return readArrayData(terms, FILENAME_CLASSES, readFileFn, validateFn);
};

export const readSkillData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Skill,
): Promise<ReadArrayResult<Data_Skill>> => {
  return readArrayData(terms, FILENAME_SKILLS, readFileFn, validateFn);
};

export const readItemData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Item,
): Promise<ReadArrayResult<Data_Item>> => {
  return readArrayData(terms, FILENAME_ITEMS, readFileFn, validateFn);
};

export const readArmorData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Armor,
): Promise<ReadArrayResult<Data_Armor>> => {
  return readArrayData(terms, FILENAME_ARMORS, readFileFn, validateFn);
};

export const readEnemyData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Enemy,
): Promise<ReadArrayResult<Data_Enemy>> => {
  return readArrayData(terms, FILENAME_ENEMIES, readFileFn, validateFn);
};

export const readStateData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_State,
): Promise<ReadArrayResult<Data_State>> => {
  return readArrayData(terms, FILENAME_STATES, readFileFn, validateFn);
};

export const readAnimationData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Animation,
): Promise<ReadArrayResult<Data_Animation>> => {
  return readArrayData(terms, FILENAME_ANIMATIONS, readFileFn, validateFn);
};

export const readMapInfoData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_MapInfo,
): Promise<ReadArrayResult<Data_MapInfo>> => {
  return readArrayData(terms, FILENAME_MAP_INFOS, readFileFn, validateFn);
};
