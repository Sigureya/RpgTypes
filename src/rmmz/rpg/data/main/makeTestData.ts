import type { TestDataSourceWithNote } from "@RpgTypes/libs";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_State,
  Data_Weapon,
} from "./traitContainers";
import {
  makeActorData,
  makeArmorData,
  makeClassData,
  makeEnemyData,
  makeStateData,
  makeWeaponData,
} from "./traitContainers";
import type { Data_Item, Data_Skill } from "./usableItems";
import { makeItemData, makeSkillData } from "./usableItems";

export const makeActorDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Actor => {
  return makeActorData({
    battlerName: soruce.image,
    characterName: soruce.image,
    faceName: soruce.image,
    name: soruce.text,
    profile: soruce.text,
    nickname: soruce.text,
    note: soruce.note,
  });
};

export const makeClassDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Class => {
  return makeClassData({
    name: soruce.text,
    note: soruce.note,
  });
};

export const makeWeaponDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Weapon => {
  return makeWeaponData({
    name: soruce.text,
    note: soruce.note,
    description: soruce.text,
  });
};

export const makeArmorDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Armor => {
  return makeArmorData({
    name: soruce.text,
    note: soruce.note,
    description: soruce.text,
  });
};

export const makeEnemyDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Enemy => {
  return makeEnemyData({
    name: soruce.text,
    note: soruce.note,
    battlerName: soruce.image,
  });
};

export const makeStateDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_State => {
  return makeStateData({
    name: soruce.text,
    note: soruce.note,
    message1: soruce.text,
    message2: soruce.text,
    message3: soruce.text,
    message4: soruce.text,
  });
};

export const makeSkillDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Skill => {
  return makeSkillData({
    name: soruce.text,
    note: soruce.note,
    iconIndex: 0,
    description: soruce.text,
    message1: soruce.text,
    message2: soruce.text,
  });
};

export const makeItemDataFromTestSoruce = (
  soruce: TestDataSourceWithNote,
): Data_Item => {
  return makeItemData({
    name: soruce.text,
    note: soruce.note,
    iconIndex: 0,
    description: soruce.text,
  });
};
