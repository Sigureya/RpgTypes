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
  ReadAllDataFields,
  ReadGameDataResult,
  ReadGameDataResultNullable,
  ReadHandledResult,
} from "./resultType";
import { FILENAME_SYSTEM, readSystemData } from "./system";
import type { ReadSystemResult } from "./system";
import type { ReadAllDataErrorMessages } from "./terms";
import type { DataFileNames } from "./types";

export const readAllRawGameData = async (
  readFileFn: (filename: DataFileNames | MapFileNameWithExt) => Promise<string>,
  validateFunctions: RpgDataValidators,
  terms: ReadAllDataErrorMessages,
): Promise<RawGameData> => {
  return readAllGameDataWithFallback(
    terms,
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

export const readAllGameDataAsArrayFallback = <
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
  terms: ReadAllDataErrorMessages,
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
    terms,
    readFileFn,
    handles,
    validateFunctions,
    () => [],
  );
};

export const readAllGameDataAsNullFallback = <
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
  terms: ReadAllDataErrorMessages,
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
  terms: ReadAllDataErrorMessages,
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
    readCommonEventData(
      terms,
      readFileFn,
      validateFunctions.validateCommonEvent,
    ),
    readTroopData(terms, readFileFn, validateFunctions.validateTroop),
    readEnemyData(terms, readFileFn, validateFunctions.validateEnemy),
    readClassData(terms, readFileFn, validateFunctions.validateClass),
    readSkillData(terms, readFileFn, validateFunctions.validateSkill),
    readItemData(terms, readFileFn, validateFunctions.validateItem),
    readWeaponData(terms, readFileFn, validateFunctions.validateWeapon),
    readArmorData(terms, readFileFn, validateFunctions.validateArmor),
    readStateData(terms, readFileFn, validateFunctions.validateState),
    readActorData(terms, readFileFn, validateFunctions.validateActor),
    readAnimationData(terms, readFileFn, validateFunctions.validateAnimation),
    readTilesetData(terms, readFileFn, validateFunctions.validateTileset),
    readMapInfoData(terms, readFileFn, validateFunctions.validateMapInfo),
    readSystemData(terms, readFileFn, {
      validateSystemMz: validateFunctions.validateSystem,
      validateSystemMv: validateFunctions.validateSystemMV,
    }),
  ]);
  return {
    mapFiles: mapInfo.success
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
      handles.readClasses,
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
      handles.readEnemies,
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
    animations: convertIfSuccess(
      animation,
      terms,
      handles.readAnimations,
      makeEmptyValue,
    ),
    tilesets: convertIfSuccess(
      tileset,
      terms,
      handles.readTilesets,
      makeEmptyValue,
    ),
  } satisfies Record<keyof ReadAllDataFields, unknown>;
};
interface MapReader<T> {
  readMap(map: MapFileInfo): T;
}

const mapInfosFailed = <T>(
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

const convertMapData = async <T>(
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
