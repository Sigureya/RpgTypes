import type {
  Data_Map,
  Data_MapInfo,
  Data_System,
  MapFileInfo,
} from "@RpgTypes/rmmz";
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
import type { MapFileNameWithExt, MapFiles } from "./map";
import { readMapFilesFromInfoEx } from "./map";
import type {
  RpgDataReadHandlers,
  ValidateFunctionsOfReadRpgData,
} from "./reader/handlers";
import type {
  RowGameData,
  ReadAllDataResultFields,
  ReadAllGameDataResult,
  ReadAllGameDataResultWithNullFallback,
  ReadHandledResult,
} from "./resultType";
import { FILENAME_SYSTEM, readSystemData } from "./system";
import type { ReadSystemResult } from "./system";
import type { TermsOfReadAllData } from "./terms";
import type { DataFileNames } from "./types";

export const readAllRowGameData = async (
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: ValidateFunctionsOfReadRpgData,
  terms: TermsOfReadAllData,
): Promise<RowGameData> => {
  return readAllGameDataWithFallback(
    terms,
    readFileFn,
    {
      readMap: pickMapData,
      readActors: identity,
      readArmors: identity,
      readClasss: identity,
      readCommonEvents: identity,
      readEnemys: identity,
      readItems: identity,
      readSkills: identity,
      readStates: identity,
      readSystem: identity,
      readTroops: identity,
      readWeapons: identity,
    },
    validateFunctions,
    () => [],
  );
};

const pickMapData = (map: MapFileInfo<Data_Map>): Data_Map => map.map;

const identity = <T>(data: T): T => data;

export const readAllGameDataAsArrayFallback = <
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
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: ValidateFunctionsOfReadRpgData,
  handles: RpgDataReadHandlers<
    Commmon[],
    Map,
    System,
    Actor[],
    Skill[],
    Item[],
    Weapon[],
    Armor[],
    Enemy[],
    Class[],
    State[],
    Troop[]
  >,
): Promise<
  ReadAllGameDataResult<
    Commmon[],
    Map,
    System,
    Actor[],
    Skill[],
    Item[],
    Weapon[],
    Armor[],
    Enemy[],
    Class[],
    State[],
    Troop[]
  >
> => {
  return readAllGameDataWithFallback(
    terms,
    readFileFn,
    handles,
    validateFunctions,
    () => [],
  );
};

export const readAllGameDataAsNullFallback = <
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
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: ValidateFunctionsOfReadRpgData,
  handles: RpgDataReadHandlers<
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
): Promise<
  ReadAllGameDataResultWithNullFallback<
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
  >
> => {
  return readAllGameDataWithFallback(
    terms,
    readFileFn,
    handles,
    validateFunctions,
    () => null,
  );
};

const readAllGameDataWithFallback = async <
  N,
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
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  handles: RpgDataReadHandlers<
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
  makeEmptyValue: () => N,
) => {
  // この関数の戻り値の型は非常に複雑なので、型推論で解決するため意図的に省略している
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
    mapFiles: mapInfo.succcess
      ? await convertMapData(
          mapInfo.data,
          terms,
          handles,
          readFileFn,
          validateFunctions.validateMap,
        )
      : mapInfosFailed<Map>(mapInfo),
    actor: convertIfSuccess(actor, terms, handles.readActors, makeEmptyValue),
    armor: convertIfSuccess(armor, terms, handles.readArmors, makeEmptyValue),
    classes: convertIfSuccess(
      classes,
      terms,
      handles.readClasss,
      makeEmptyValue,
    ),
    commonEvent: convertIfSuccess(
      commonEvent,
      terms,
      handles.readCommonEvents,
      makeEmptyValue,
    ),
    enemies: convertIfSuccess(
      enemies,
      terms,
      handles.readEnemys,
      makeEmptyValue,
    ),
    item: convertIfSuccess(item, terms, handles.readItems, makeEmptyValue),
    mapInfo,
    skill: convertIfSuccess(skill, terms, handles.readSkills, makeEmptyValue),
    state: convertIfSuccess(state, terms, handles.readStates, makeEmptyValue),
    system: convertSystemIfSuccess(system, terms, handles.readSystem),
    troop: convertIfSuccess(troop, terms, handles.readTroops, makeEmptyValue),
    weapon: convertIfSuccess(
      weapon,
      terms,
      handles.readWeapons,
      makeEmptyValue,
    ),
  } satisfies Record<keyof ReadAllDataResultFields, unknown>;
};
interface MapReader<T> {
  readMap(map: MapFileInfo): T;
}

const mapInfosFailed = <T>(
  infos: ReadArrayResult<Data_MapInfo>,
): MapFiles<T> => ({
  info: {
    filename: infos.fileName,
    message: infos.error,
    success: false,
  },
  validMaps: [],
  invalidMaps: [],
});

const convertMapData = async <T>(
  mapInfos: Data_MapInfo[],
  terms: TermsOfReadAllData,
  handles: MapReader<T>,
  readFileFn: (filename: MapFileNameWithExt) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Map,
): Promise<MapFiles<T>> => {
  return await readMapFilesFromInfoEx(
    mapInfos,
    terms,
    async (filename) => readFileFn(filename),
    validateFn,
    (data): T => handles.readMap(data),
  );
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

const convertIfSuccess = <T, R, N>(
  result: ReadArrayResult<T>,
  terms: TermsOfReadAllData,
  fn: (data: T[], filename: string) => R,
  makeEmptyValue: () => N,
): ReadHandledResult<R, N> => {
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
