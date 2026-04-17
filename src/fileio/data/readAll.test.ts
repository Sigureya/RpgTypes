import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Data_Actor,
  Data_Animation,
  Data_Armor,
  Data_Class,
  Data_CommonEvent,
  Data_Enemy,
  Data_Item,
  Data_Map,
  Data_MapInfo,
  Data_Skill,
  Data_State,
  Data_System,
  Data_SystemMV,
  Data_Tileset,
  Data_Troop,
  Data_Weapon,
} from "@RpgTypes/rmmz";
import {
  makeActorData,
  makeArmorData,
  makeClassData,
  makeCommonEventData,
  makeEnemyData,
  makeItemData,
  makeMapData,
  makeMapInfoData,
  makeSkillData,
  makeStateData,
  makeSystemData,
  makeTroopData,
  makeWeaponData,
} from "@RpgTypes/rmmz";
import {
  FILENAME_ACTORS,
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
} from "./arrayData";
import type { MapFileNameWithExt } from "./map";
import {
  readAllGameDataAsArrayFallback,
  readAllGameDataAsNullFallback,
  readAllRowGameData,
} from "./readAll";
import type {
  RpgDataReadHandlers,
  ValidateFunctionsOfReadRpgData,
} from "./reader/handlers";
import type { ReadAllDataResultFields, RowGameData } from "./resultType";
import { FILENAME_SYSTEM } from "./system";
import type { TermsOfReadAllData } from "./terms";
import type { DataFileNames } from "./types";

const terms: TermsOfReadAllData = {
  jsonParseError: "json parse error",
  notArray: "not array",
  invalidStructure: "invalid structure",
  fileNotFound: "file not found",
  mvAsMz: "mv to mz",
  validateFunctionError: "validate function error",
  dataConvertError: "data convert error",
};

const createMockedValidateFunctions = (
  value: boolean,
): MockedObject<
  Record<keyof ValidateFunctionsOfReadRpgData, (data: unknown) => boolean>
> => ({
  validateActor: vi.fn(() => value),
  validateArmor: vi.fn(() => value),
  validateClass: vi.fn(() => value),
  validateCommonEvent: vi.fn(() => value),
  validateEnemy: vi.fn(() => value),
  validateItem: vi.fn(() => value),
  validateMap: vi.fn(() => value),
  validateMapInfo: vi.fn(() => value),
  validateSkill: vi.fn(() => value),
  validateState: vi.fn(() => value),
  validateSystem: vi.fn(() => value),
  validateSystemMV: vi.fn(() => value),
  validateTroop: vi.fn(() => value),
  validateWeapon: vi.fn(() => value),
  validateAnimation: vi.fn(() => value),
  validateTileset: vi.fn(() => value),
});

const createValidateFunctions = (
  mocked: MockedObject<
    Record<keyof ValidateFunctionsOfReadRpgData, (data: unknown) => boolean>
  >,
): ValidateFunctionsOfReadRpgData => ({
  validateActor: (item): item is Data_Actor => mocked.validateActor(item),
  validateArmor: (item): item is Data_Armor => mocked.validateArmor(item),
  validateClass: (item): item is Data_Class => mocked.validateClass(item),
  validateCommonEvent: (item): item is Data_CommonEvent =>
    mocked.validateCommonEvent(item),
  validateEnemy: (item): item is Data_Enemy => mocked.validateEnemy(item),
  validateItem: (item): item is Data_Item => mocked.validateItem(item),
  validateMap: (item): item is Data_Map => mocked.validateMap(item),
  validateMapInfo: (item): item is Data_MapInfo => mocked.validateMapInfo(item),
  validateSkill: (item): item is Data_Skill => mocked.validateSkill(item),
  validateState: (item): item is Data_State => mocked.validateState(item),
  validateSystem: (item): item is Data_System => mocked.validateSystem(item),
  validateSystemMV: (item): item is Data_SystemMV =>
    mocked.validateSystemMV ? mocked.validateSystemMV(item) : false,
  validateTroop: (item): item is Data_Troop => mocked.validateTroop(item),
  validateWeapon: (item): item is Data_Weapon => mocked.validateWeapon(item),
  validateAnimation: (item): item is Data_Animation =>
    mocked.validateAnimation(item),
  validateTileset: (item): item is Data_Tileset => mocked.validateTileset(item),
});

const createReadFileFn = (
  map: Record<string, string | Error>,
): ((filename: DataFileNames | MapFileNameWithExt) => Promise<string>) => {
  return vi.fn(async (filename: DataFileNames | MapFileNameWithExt) => {
    const value = map[filename];
    if (value instanceof Error) {
      throw value;
    }
    if (typeof value === "string") {
      return value;
    }
    throw new Error(`missing mock:${filename}`);
  });
};

const baseData = {
  actor: {
    success: true,
    fileName: FILENAME_ACTORS,
    error: "",
    data: [makeActorData({ id: 1, name: "A" })],
  },
  armor: {
    success: true,
    fileName: FILENAME_ARMORS,
    error: "",
    data: [makeArmorData({ id: 1, name: "R" })],
  },
  classes: {
    success: true,
    fileName: FILENAME_CLASSES,
    error: "",
    data: [makeClassData({ id: 1, name: "C" })],
  },
  commonEvent: {
    success: true,
    fileName: FILENAME_COMMON_EVENTS,
    error: "",
    data: [makeCommonEventData({ id: 1, name: "CE" })],
  },
  enemies: {
    success: true,
    fileName: FILENAME_ENEMIES,
    error: "",
    data: [makeEnemyData({ id: 1, name: "E" })],
  },
  item: {
    success: true,
    fileName: FILENAME_ITEMS,
    error: "",
    data: [makeItemData({ id: 1, name: "I" })],
  },
  mapInfo: {
    success: true,
    fileName: FILENAME_MAP_INFOS,
    error: "",
    data: [makeMapInfoData({ id: 1, name: "Map1" })],
  },
  skill: {
    success: true,
    fileName: FILENAME_SKILLS,
    error: "",
    data: [makeSkillData({ id: 1, name: "S" })],
  },
  state: {
    success: true,
    fileName: FILENAME_STATES,
    error: "",
    data: [makeStateData({ id: 1, name: "ST" })],
  },
  troop: {
    success: true,
    fileName: FILENAME_TROOPS,
    error: "",
    data: [makeTroopData({ id: 1, name: "T" })],
  },
  weapon: {
    success: true,
    fileName: FILENAME_WEAPONS,
    error: "",
    data: [makeWeaponData({ id: 1, name: "W" })],
  },
  system: {
    message: "",
    system: makeSystemData({ texts: { gameTitle: "RPG" } }),
  },
  mapFiles: {
    info: { success: true },
    validMaps: [
      {
        filename: "Map001",
        editingName: "Map1",
        map: makeMapData({ displayName: "Map1" }),
      },
    ],
    invalidMaps: [],
  },
  animations: {
    success: true,
    fileName: "Animations.json",
    error: "",
    data: [],
  },
  tilesets: {
    success: true,
    fileName: "Tilesets.json",
    error: "",
    data: [],
  },
} as const satisfies RowGameData;

const baseFileMap: Record<string, string> = {
  [baseData.actor.fileName]: JSON.stringify(baseData.actor.data),
  [baseData.armor.fileName]: JSON.stringify(baseData.armor.data),
  [baseData.classes.fileName]: JSON.stringify(baseData.classes.data),
  [baseData.commonEvent.fileName]: JSON.stringify(baseData.commonEvent.data),
  [baseData.enemies.fileName]: JSON.stringify(baseData.enemies.data),
  [baseData.item.fileName]: JSON.stringify(baseData.item.data),
  [baseData.mapInfo.fileName]: JSON.stringify(baseData.mapInfo.data),
  [baseData.skill.fileName]: JSON.stringify(baseData.skill.data),
  [baseData.state.fileName]: JSON.stringify(baseData.state.data),
  [baseData.troop.fileName]: JSON.stringify(baseData.troop.data),
  [baseData.weapon.fileName]: JSON.stringify(baseData.weapon.data),
  [FILENAME_SYSTEM]: JSON.stringify(baseData.system.system),
  [baseData.animations.fileName]: JSON.stringify(baseData.animations.data),
  [baseData.tilesets.fileName]: JSON.stringify(baseData.tilesets.data),
  "Map001.json": JSON.stringify(baseData.mapFiles.validMaps[0].map),
};

type ConvertHandlers = RpgDataReadHandlers<
  unknown[],
  Data_Map,
  Data_System,
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[],
  unknown[]
>;

const createIdentityHandlers = (): MockedObject<ConvertHandlers> => ({
  readActors: vi.fn((data) => data),
  readArmors: vi.fn((data) => data),
  readClasses: vi.fn((data) => data),
  readCommonEvents: vi.fn((data) => data),
  readEnemies: vi.fn((data) => data),
  readItems: vi.fn((data) => data),
  readMap: vi.fn((data) => data.map),
  readSkills: vi.fn((data) => data),
  readStates: vi.fn((data) => data),
  readSystem: vi.fn((data) => data),
  readTroops: vi.fn((data) => data),
  readWeapons: vi.fn((data) => data),
  readAnimations: vi.fn((data) => data),
  readTilesets: vi.fn((data) => data),
});

const errorFunc = () => {
  throw new Error("conv error");
};
const createConvertErrorHandlers = (): MockedObject<ConvertHandlers> => ({
  readActors: vi.fn(errorFunc),
  readArmors: vi.fn(errorFunc),
  readClasses: vi.fn(errorFunc),
  readCommonEvents: vi.fn(errorFunc),
  readEnemies: vi.fn(errorFunc),
  readItems: vi.fn(errorFunc),
  readMap: vi.fn(errorFunc),
  readSkills: vi.fn(errorFunc),
  readStates: vi.fn(errorFunc),
  readSystem: vi.fn(errorFunc),
  readTroops: vi.fn(errorFunc),
  readWeapons: vi.fn(errorFunc),
  readAnimations: vi.fn(errorFunc),
  readTilesets: vi.fn(errorFunc),
});

const expectConvertHandlersNotCalled = (
  convHandlers: MockedObject<ConvertHandlers>,
) => {
  expect(convHandlers.readActors).not.toHaveBeenCalled();
  expect(convHandlers.readArmors).not.toHaveBeenCalled();
  expect(convHandlers.readClasses).not.toHaveBeenCalled();
  expect(convHandlers.readCommonEvents).not.toHaveBeenCalled();
  expect(convHandlers.readEnemies).not.toHaveBeenCalled();
  expect(convHandlers.readItems).not.toHaveBeenCalled();
  expect(convHandlers.readMap).not.toHaveBeenCalled();
  expect(convHandlers.readSkills).not.toHaveBeenCalled();
  expect(convHandlers.readStates).not.toHaveBeenCalled();
  expect(convHandlers.readSystem).not.toHaveBeenCalled();
  expect(convHandlers.readTroops).not.toHaveBeenCalled();
  expect(convHandlers.readWeapons).not.toHaveBeenCalled();
};

const expectValidateFunctionsNotCalled = (
  mockedValidators: MockedObject<
    Record<keyof ValidateFunctionsOfReadRpgData, (data: unknown) => boolean>
  >,
) => {
  expect(mockedValidators.validateActor).not.toHaveBeenCalled();
  expect(mockedValidators.validateArmor).not.toHaveBeenCalled();
  expect(mockedValidators.validateClass).not.toHaveBeenCalled();
  expect(mockedValidators.validateCommonEvent).not.toHaveBeenCalled();
  expect(mockedValidators.validateEnemy).not.toHaveBeenCalled();
  expect(mockedValidators.validateItem).not.toHaveBeenCalled();
  expect(mockedValidators.validateMap).not.toHaveBeenCalled();
  expect(mockedValidators.validateMapInfo).not.toHaveBeenCalled();
  expect(mockedValidators.validateSkill).not.toHaveBeenCalled();
  expect(mockedValidators.validateState).not.toHaveBeenCalled();
  expect(mockedValidators.validateSystem).not.toHaveBeenCalled();
  expect(mockedValidators.validateTroop).not.toHaveBeenCalled();
  expect(mockedValidators.validateWeapon).not.toHaveBeenCalled();
};

const runTest = (
  fn: (
    fileReadFn: (
      filename: DataFileNames | MapFileNameWithExt,
    ) => Promise<string>,
    convHandlers: ConvertHandlers,
    mockedValidators: ValidateFunctionsOfReadRpgData,
  ) => Promise<ReadAllDataResultFields>,
) => {
  test("when read rejected,do not call convert and validate", async () => {
    const fileReadFn = vi.fn(() => Promise.reject());
    const convHandlers = createConvertErrorHandlers();
    const mockedValidators = createMockedValidateFunctions(true);
    const handlers = createValidateFunctions(mockedValidators);
    await fn(fileReadFn, convHandlers, handlers);
    expectConvertHandlersNotCalled(convHandlers);
    expectValidateFunctionsNotCalled(mockedValidators);
  });
};

describe("readAllGameDataAsArrayFallback", () => {
  runTest(async (fileReadFn, convHandlers, mockedValidators) => {
    return readAllGameDataAsArrayFallback(
      terms,
      fileReadFn,
      mockedValidators,
      convHandlers,
    );
  });
  describe("normal case", () => {
    test("ハンドラが適切に呼び出されている", async () => {
      const fileReadFn = createReadFileFn(baseFileMap);
      const convHandlers = createIdentityHandlers();
      const mockedValidators = createMockedValidateFunctions(true);

      await readAllGameDataAsArrayFallback(
        terms,
        fileReadFn,
        createValidateFunctions(mockedValidators),
        convHandlers,
      );
    });
    test("sholed return value", async () => {
      const fileReadFn = createReadFileFn(baseFileMap);
      const convHandlers = createIdentityHandlers();
      const mockedValidators = createMockedValidateFunctions(true);

      const result = await readAllGameDataAsArrayFallback(
        terms,
        fileReadFn,
        createValidateFunctions(mockedValidators),
        convHandlers,
      );

      expect(result.actor).toEqual(baseData.actor);
      expect(result.armor).toEqual(baseData.armor);
      expect(result.classes).toEqual(baseData.classes);
      expect(result.commonEvent).toEqual(baseData.commonEvent);
      expect(result.enemies).toEqual(baseData.enemies);
      expect(result.item).toEqual(baseData.item);
      expect(result.mapInfo).toEqual(baseData.mapInfo);
      expect(result.skill).toEqual(baseData.skill);
      expect(result.state).toEqual(baseData.state);
      expect(result.system).toEqual(baseData.system);
      expect(result.troop).toEqual(baseData.troop);
      expect(result.weapon).toEqual(baseData.weapon);
      expect(result.mapFiles).toEqual(baseData.mapFiles);
      expect(convHandlers.readSystem).toHaveBeenCalledWith(
        baseData.system.system,
        FILENAME_SYSTEM,
      );
    });

    test("map handler が MapFileInfo を返す実装でもネストした map を許容する", async () => {
      const fileReadFn = createReadFileFn(baseFileMap);
      const mockedValidators = createMockedValidateFunctions(true);
      const convHandlers: RpgDataReadHandlers<
        unknown[],
        Data_Map,
        Data_System,
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[],
        unknown[]
      > = {
        readActors: (data) => data,
        readArmors: (data) => data,
        readClasses: (data) => data,
        readCommonEvents: (data) => data,
        readEnemies: (data) => data,
        readItems: (data) => data,
        readMap: (data) => data.map,
        readSkills: (data) => data,
        readStates: (data) => data,
        readSystem: (data) => data,
        readTroops: (data) => data,
        readWeapons: (data) => data,
        readAnimations: (data) => data,
        readTilesets: (data) => data,
      };

      const expectedMaps = baseData.mapFiles.validMaps;
      const result = await readAllGameDataAsArrayFallback(
        terms,
        fileReadFn,
        createValidateFunctions(mockedValidators),
        convHandlers,
      );

      expect(result.mapFiles.validMaps).toHaveLength(1);
      expect(result.mapFiles.validMaps).toEqual(expectedMaps);
    });
  });
  test("変換で失敗したら配列フォールバックになる", async () => {
    const fileReadFn = createReadFileFn(baseFileMap);
    const mockedValidators = createMockedValidateFunctions(true);
    const convHandlers = createIdentityHandlers();
    convHandlers.readActors.mockImplementation(errorFunc);

    const result = await readAllGameDataAsArrayFallback(
      terms,
      fileReadFn,
      createValidateFunctions(mockedValidators),
      convHandlers,
    );

    expect(result.actor.success).toBe(false);
    expect(result.actor.error).toBe(terms.dataConvertError);
    expect(result.actor.data).toEqual([]);
  });

  test("mapInfo 読み込み失敗時は mapFiles.info が失敗になる", async () => {
    const fileMap: Record<string, string | Error> = {
      ...baseFileMap,
      [FILENAME_MAP_INFOS]: JSON.stringify({ id: 1 }),
    };
    const fileReadFn = createReadFileFn(fileMap);
    const convHandlers = createIdentityHandlers();
    const mockedValidators = createMockedValidateFunctions(true);

    const result = await readAllGameDataAsArrayFallback(
      terms,
      fileReadFn,
      createValidateFunctions(mockedValidators),
      convHandlers,
    );

    expect(result.mapInfo.success).toBe(false);
    expect(result.mapInfo.fileName).toBe(FILENAME_MAP_INFOS);
    expect(result.mapInfo.error).toBe(terms.notArray);
    expect(result.mapFiles.info.success).toBe(false);
    if (!result.mapFiles.info.success) {
      expect(result.mapFiles.info.filename).toBe(FILENAME_MAP_INFOS);
      expect(result.mapFiles.info.message).toBe(terms.notArray);
    }
    expect(convHandlers.readMap).not.toHaveBeenCalled();
  });
});

describe("readAllGameDataAsNullFallback", () => {
  runTest(async (fileReadFn, convHandlers, mockedValidators) => {
    return readAllGameDataAsNullFallback(
      terms,
      fileReadFn,
      mockedValidators,
      convHandlers,
    );
  });

  test("変換で失敗したら null フォールバックになる", async () => {
    const fileReadFn = createReadFileFn(baseFileMap);
    const mockedValidators = createMockedValidateFunctions(true);
    const convHandlers = createIdentityHandlers();
    convHandlers.readActors.mockImplementation(errorFunc);

    const result = await readAllGameDataAsNullFallback(
      terms,
      fileReadFn,
      createValidateFunctions(mockedValidators),
      convHandlers,
    );

    expect(result.actor.success).toBe(false);
    expect(result.actor.error).toBe(terms.dataConvertError);
    expect(result.actor.data).toBeNull();
  });
});

describe("readAllRowGameData", () => {
  test("生データをそのまま返す", async () => {
    const fileReadFn = createReadFileFn(baseFileMap);
    const mockedValidators = createMockedValidateFunctions(true);

    const result = await readAllRowGameData(
      fileReadFn,
      createValidateFunctions(mockedValidators),
      terms,
    );

    expect(result).toEqual(baseData);
  });
  test("全てのファイル読み込みを失敗させ、validateは呼ばれない", async () => {
    const fileReadFn = vi.fn(() => Promise.reject());
    const mockedValidators = createMockedValidateFunctions(true);
    await readAllRowGameData(
      fileReadFn,
      createValidateFunctions(mockedValidators),
      terms,
    );
    expectValidateFunctionsNotCalled(mockedValidators);
  });
});
