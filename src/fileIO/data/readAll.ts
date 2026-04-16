import type { Data_System } from "@RpgTypes/rmmz";
import type { ReadArrayResult } from "./arrayData";
import {
  readActorData,
  readArmorData,
  readClassData,
  readCommonEventData,
  readEnemyData,
  readItemData,
  readMapInfoData,
  readSkillData,
  readStateData,
  readTroopData,
  readWeaponData,
} from "./arrayData";
import type {
  RpgDataReadHandlersA,
  ValidateFunctionsOfReadRpgData,
} from "./reader/handlers";
import type {
  ReadAllArrayDataResult,
  ReadAllGameDataResult,
  ReadHandledResult,
} from "./resultType";
import { FILENAME_SYSTEM, readSystemData } from "./system";
import type { ReadSystemResult } from "./system";
import type { TermsOfReadAllData } from "./terms";

export const readAllRowGameData = async (
  readFileFn: (filename: string) => Promise<string>,
  validateFunctions: ValidateFunctionsOfReadRpgData,
  terms: TermsOfReadAllData,
): Promise<ReadAllArrayDataResult> => {
  return readAllGameDataCore(
    terms,
    readFileFn,
    {
      readActor: dtx,
      readArmor: dtx,
      readClass: dtx,
      readCommonEvent: dtx,
      readEnemy: dtx,
      readItem: dtx,
      readMap: dtx,
      readSkill: dtx,
      readState: dtx,
      readSystem: dtx,
      readTroop: dtx,
      readWeapon: dtx,
    },
    validateFunctions,
    () => [],
  );
};

const dtx = <T>(data: T): T => data;

const readAllGameDataCore = async <
  Commmon,
  Map,
  System,
  Actor,
  Skill,
  Item,
  Weapon,
  Armor,
  Enemy,
  Class,
  State,
  Troop,
>(
  terms: TermsOfReadAllData,
  readFileFn: (filename: string) => Promise<string>,
  handles: RpgDataReadHandlersA<
    Commmon,
    Map,
    System,
    Actor,
    Skill,
    Item,
    Weapon,
    Armor,
    Enemy,
    Class,
    State,
    Troop
  >,
  validateFunctions: ValidateFunctionsOfReadRpgData,
  makeEmptyValue: () => [],
): Promise<
  ReadAllGameDataResult<
    Commmon,
    System,
    Actor,
    Skill,
    Item,
    Weapon,
    Armor,
    Enemy,
    Class,
    State,
    Troop
  >
> => {
  const [
    actor,
    classes,
    skill,
    item,
    weapon,
    armor,
    enemies,
    troop,
    state,
    commonEvent,
    mapInfo,
    system,
  ] = await Promise.all([
    readActorData(terms, readFileFn, validateFunctions.validateActor),
    readClassData(terms, readFileFn, validateFunctions.validateClass),
    readSkillData(terms, readFileFn, validateFunctions.validateSkill),
    readItemData(terms, readFileFn, validateFunctions.validateItem),
    readWeaponData(terms, readFileFn, validateFunctions.validateWeapon),
    readArmorData(terms, readFileFn, validateFunctions.validateArmor),
    readEnemyData(terms, readFileFn, validateFunctions.validateEnemy),
    readTroopData(terms, readFileFn, validateFunctions.validateTroop),
    readStateData(terms, readFileFn, validateFunctions.validateState),
    readCommonEventData(
      terms,
      readFileFn,
      validateFunctions.validateCommonEvent,
    ),
    readMapInfoData(terms, readFileFn, validateFunctions.validateMapInfo),
    readSystemData(terms, readFileFn, {
      validateSystemMz: validateFunctions.validateSystem,
      validateSystemMv: validateFunctions.validateSystemMV,
    }),
  ]);

  return {
    actor: convertIfSuccess(actor, terms, handles.readActor, makeEmptyValue),
    armor: convertIfSuccess(armor, terms, handles.readArmor, makeEmptyValue),
    classes: convertIfSuccess(
      classes,
      terms,
      handles.readClass,
      makeEmptyValue,
    ),
    commonEvent: convertIfSuccess(
      commonEvent,
      terms,
      handles.readCommonEvent,
      makeEmptyValue,
    ),
    enemies: convertIfSuccess(
      enemies,
      terms,
      handles.readEnemy,
      makeEmptyValue,
    ),
    item: convertIfSuccess(item, terms, handles.readItem, makeEmptyValue),
    mapInfo,
    skill: convertIfSuccess(skill, terms, handles.readSkill, makeEmptyValue),
    state: convertIfSuccess(state, terms, handles.readState, makeEmptyValue),
    system: convertSystemIfSuccess(system, terms, handles.readSystem),
    troop: convertIfSuccess(troop, terms, handles.readTroop, makeEmptyValue),
    weapon: convertIfSuccess(weapon, terms, handles.readWeapon, makeEmptyValue),
  };
};

const convertSystemIfSuccess = <R>(
  result: ReadSystemResult,
  terms: TermsOfReadAllData,
  fn: (system: Data_System, filename: string) => R,
): ReadSystemResult<R> => {
  if (result.system === null) {
    return {
      message: result.message,
      system: null,
    };
  }
  try {
    return {
      message: result.message,
      system: fn(result.system, FILENAME_SYSTEM),
    };
  } catch {
    return {
      message: terms.dataConvertError,
      system: null,
    };
  }
};

const convertIfSuccess = <T, R>(
  result: ReadArrayResult<T>,
  terms: TermsOfReadAllData,
  fn: (data: T[], filename: string) => R,
  makeEmptyValue: () => R extends unknown[] ? [] : null,
): ReadHandledResult<R> => {
  if (!result.succcess) {
    return {
      fileName: result.fileName,
      succcess: false,
      error: result.error,
      data: makeEmptyValue(),
    };
  }
  try {
    return {
      fileName: result.fileName,
      succcess: true,
      error: "",
      data: fn(result.data, result.fileName),
    };
  } catch {
    return {
      fileName: result.fileName,
      succcess: false,
      error: terms.dataConvertError,
      data: makeEmptyValue(),
    };
  }
};
