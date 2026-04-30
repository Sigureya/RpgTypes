import type { RpgDataValidators } from "@RpgTypes/fileio";
import { isDataCommonEvent, isDataMap, isDataTroop } from "./events";
import {
  isDataActor,
  isDataAnimation,
  isDataArmor,
  isDataClass,
  isDataEnemy,
  isDataItem,
  isDataMapInfo,
  isDataSkill,
  isDataState,
  isDataWeapon,
  isDataTileset,
} from "./rpg";
import { isDataSystem } from "./system";
import { isDataSystemMV } from "./systemMV";

export const createRpgValidator = (): Required<RpgDataValidators> => ({
  validateActor(data) {
    return isDataActor(data);
  },
  validateAnimation(data) {
    return isDataAnimation(data);
  },
  validateArmor(data) {
    return isDataArmor(data);
  },
  validateClass(data) {
    return isDataClass(data);
  },
  validateEnemy(data) {
    return isDataEnemy(data);
  },
  validateItem(data) {
    return isDataItem(data);
  },
  validateMapInfo(data) {
    return isDataMapInfo(data);
  },
  validateSkill(data) {
    return isDataSkill(data);
  },
  validateState(data) {
    return isDataState(data);
  },
  validateWeapon(data) {
    return isDataWeapon(data);
  },
  validateCommonEvent(data) {
    return isDataCommonEvent(data);
  },
  validateMap(data) {
    return isDataMap(data);
  },
  validateTroop(data) {
    return isDataTroop(data);
  },
  validateSystemMV(data) {
    return isDataSystemMV(data);
  },
  validateSystem(data) {
    return isDataSystem(data);
  },
  validateTileset(data) {
    return isDataTileset(data);
  },
});
