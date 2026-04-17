import type {
  Data_Map,
  Data_MapInfo,
  Data_System,
  MapFileInfo,
} from "@RpgTypes/rmmz";
import type { ReadArrayResult } from "./arrayData";
import {
  readActorData,
  readAnimationData,
  readArmorData,
  readClassData,
  readCommonEventData,
  readEnemyData,
  readItemData,
  readMapInfoData,
  readSkillData,
  readStateData,
  readTilesetData,
  readTroopData,
  readWeaponData,
} from "./arrayData";
import type { MapBatchReadResult, MapFileNameWithExt } from "./map";
import { readMapFilesFromInfoEx } from "./map";
import type { RpgDataReadHandlers, RpgDataValidators } from "./reader/handlers";
import type {
  RawGameData,
  ReadGameDataResult,
  ReadGameDataResultNullable,
  ReadHandledResult,
} from "./resultType";
import { FILENAME_SYSTEM, readSystemData } from "./system";
import type { ReadSystemResult } from "./system";
import type { ReadAllDataErrorMessages } from "./terms";
import type { DataFileNames } from "./types";

export const readAllRawGameData = async (
  errorMessages: ReadAllDataErrorMessages,
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: RpgDataValidators,
): Promise<RawGameData> => {
  return readAllGameDataWithFallback(
    errorMessages,
    readFileFn,
    {
      readMap: pickMapData,
      readActors: identity,
      readArmors: identity,
      readClasses: identity,
      readCommonEvents: identity,
      readEnemies: identity,
      readItems: identity,
      readSkills: identity,
      readStates: identity,
      readSystem: identity,
      readTroops: identity,
      readWeapons: identity,
      readAnimations: identity,
      readTilesets: identity,
    },
    validateFunctions,
    () => [],
  );
};

const pickMapData = (map: MapFileInfo<Data_Map>): Data_Map => map.map;

const identity = <T>(data: T): T => data;

export const readAllGameDataWithArrayFallback = <
  Common,
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
  Animation,
  Tileset,
>(
  errorMessages: ReadAllDataErrorMessages,
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: RpgDataValidators,
  handles: RpgDataReadHandlers<
    Common[],
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
    Troop[],
    Animation[],
    Tileset[]
  >,
): Promise<
  ReadGameDataResult<
    Common[],
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
    Troop[],
    Animation[],
    Tileset[]
  >
> => {
  return readAllGameDataWithFallback(
    errorMessages,
    readFileFn,
    handles,
    validateFunctions,
    () => [],
  );
};

export const readAllGameDataWithNullFallback = <
  Common,
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
  Animation,
  Tileset,
>(
  errorMessages: ReadAllDataErrorMessages,
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: RpgDataValidators,
  handles: RpgDataReadHandlers<
    Common,
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
    Animation,
    Tileset
  >,
): Promise<
  ReadGameDataResultNullable<
    Common,
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
    Animation,
    Tileset
  >
> => {
  return readAllGameDataWithFallback(
    errorMessages,
    readFileFn,
    handles,
    validateFunctions,
    () => null,
  );
};

const readAllGameDataWithFallback = async <
  N,
  Common,
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
  Animation,
  Tileset,
>(
  errorMessages: ReadAllDataErrorMessages,
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  handles: RpgDataReadHandlers<
    Common,
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
    Animation,
    Tileset
  >,
  validateFunctions: RpgDataValidators,
  makeEmptyValue: () => N,
) => {
  // この関数の戻り値の型は非常に複雑なので、型推論で解決するため意図的に省略している
  const [
    commonEvent,
    troop,
    enemies,
    classes,
    skill,
    item,
    weapon,
    armor,
    state,
    actor,
    animation,
    tileset,
    mapInfo,
    system,
  ] = await Promise.all([
    readCommonEventData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateCommonEvent(c),
    ),
    readTroopData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateTroop(c),
    ),
    readEnemyData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateEnemy(c),
    ),
    readClassData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateClass(c),
    ),
    readSkillData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateSkill(c),
    ),
    readItemData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateItem(c),
    ),
    readWeaponData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateWeapon(c),
    ),
    readArmorData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateArmor(c),
    ),
    readStateData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateState(c),
    ),
    readActorData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateActor(c),
    ),
    readAnimationData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateAnimation(c),
    ),
    readTilesetData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateTileset(c),
    ),
    readMapInfoData(errorMessages, readFileFn, (c) =>
      validateFunctions.validateMapInfo(c),
    ),
    readSystemData(errorMessages, readFileFn, {
      validateSystemMz: (c) => validateFunctions.validateSystem(c),
      validateSystemMv: validateFunctions.validateSystemMV,
    }),
  ]);
  return {
    mapFiles: mapInfo.success
      ? await readMapBatchData(
          mapInfo.data,
          errorMessages,
          handles,
          readFileFn,
          validateFunctions.validateMap,
        )
      : createFailedMapBatchResult<Map>(mapInfo),
    actors: convertIfSuccess(
      actor,
      errorMessages,
      handles.readActors,
      makeEmptyValue,
    ),
    armors: convertIfSuccess(
      armor,
      errorMessages,
      handles.readArmors,
      makeEmptyValue,
    ),
    classes: convertIfSuccess(
      classes,
      errorMessages,
      handles.readClasses,
      makeEmptyValue,
    ),
    commonEvents: convertIfSuccess(
      commonEvent,
      errorMessages,
      handles.readCommonEvents,
      makeEmptyValue,
    ),
    enemies: convertIfSuccess(
      enemies,
      errorMessages,
      handles.readEnemies,
      makeEmptyValue,
    ),
    items: convertIfSuccess(
      item,
      errorMessages,
      handles.readItems,
      makeEmptyValue,
    ),
    mapInfos: mapInfo,
    skills: convertIfSuccess(
      skill,
      errorMessages,
      handles.readSkills,
      makeEmptyValue,
    ),
    states: convertIfSuccess(
      state,
      errorMessages,
      handles.readStates,
      makeEmptyValue,
    ),
    system: convertSystemIfSuccess(system, errorMessages, handles.readSystem),
    troops: convertIfSuccess(
      troop,
      errorMessages,
      handles.readTroops,
      makeEmptyValue,
    ),
    weapons: convertIfSuccess(
      weapon,
      errorMessages,
      handles.readWeapons,
      makeEmptyValue,
    ),
    animations: convertIfSuccess(
      animation,
      errorMessages,
      handles.readAnimations,
      makeEmptyValue,
    ),
    tilesets: convertIfSuccess(
      tileset,
      errorMessages,
      handles.readTilesets,
      makeEmptyValue,
    ),
  } satisfies Record<keyof RawGameData, unknown>;
};
interface MapReader<T> {
  readMap(map: MapFileInfo): T;
}

const createFailedMapBatchResult = <T>(
  infos: ReadArrayResult<Data_MapInfo>,
): MapBatchReadResult<T> => ({
  info: {
    filename: infos.fileName,
    message: infos.error,
    success: false,
  },
  validMaps: [],
  invalidMaps: [],
});

const readMapBatchData = async <T>(
  mapInfos: Data_MapInfo[],
  terms: ReadAllDataErrorMessages,
  handles: MapReader<T>,
  readFileFn: (filename: MapFileNameWithExt) => Promise<string>,
  validateFn: (item: unknown) => item is Data_Map,
): Promise<MapBatchReadResult<T>> => {
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
  terms: ReadAllDataErrorMessages,
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
  terms: ReadAllDataErrorMessages,
  fn: (data: T[], filename: string) => R,
  makeEmptyValue: () => N,
): ReadHandledResult<R, N> => {
  if (!result.success) {
    return {
      fileName: result.fileName,
      success: false,
      error: result.error,
      data: makeEmptyValue(),
    };
  }
  try {
    return {
      fileName: result.fileName,
      success: true,
      error: "",
      data: fn(result.data, result.fileName),
    };
  } catch {
    return {
      fileName: result.fileName,
      success: false,
      error: terms.dataConvertError,
      data: makeEmptyValue(),
    };
  }
};
