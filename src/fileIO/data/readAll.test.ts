import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
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
  type Data_Actor,
  type Data_Armor,
  type Data_Class,
  type Data_CommonEvent,
  type Data_Enemy,
  type Data_Item,
  type Data_Map,
  type Data_MapInfo,
  type Data_Skill,
  type Data_State,
  type Data_System,
  type Data_SystemMV,
  type Data_Troop,
  type Data_Weapon,
  type MapFileInfo,
} from "@RpgTypes/rmmz";
import {
  FILENAME_ACTORS,
  FILENAME_ANIMATIONS,
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
});

const lapXX = (
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
    succcess: true,
    fileName: FILENAME_ACTORS,
    error: "",
    data: [makeActorData({ id: 1, name: "A" })],
  },
  armor: {
    succcess: true,
    fileName: FILENAME_ARMORS,
    error: "",
    data: [makeArmorData({ id: 1, name: "R" })],
  },
  classes: {
    succcess: true,
    fileName: FILENAME_CLASSES,
    error: "",
    data: [makeClassData({ id: 1, name: "C" })],
  },
  commonEvent: {
    succcess: true,
    fileName: FILENAME_COMMON_EVENTS,
    error: "",
    data: [makeCommonEventData({ id: 1, name: "CE" })],
  },
  enemies: {
    succcess: true,
    fileName: FILENAME_ENEMIES,
    error: "",
    data: [makeEnemyData({ id: 1, name: "E" })],
  },
  item: {
    succcess: true,
    fileName: FILENAME_ITEMS,
    error: "",
    data: [makeItemData({ id: 1, name: "I" })],
  },
  mapInfo: {
    succcess: true,
    fileName: FILENAME_MAP_INFOS,
    error: "",
    data: [makeMapInfoData({ id: 1, name: "Map1" })],
  },
  skill: {
    succcess: true,
    fileName: FILENAME_SKILLS,
    error: "",
    data: [makeSkillData({ id: 1, name: "S" })],
  },
  state: {
    succcess: true,
    fileName: FILENAME_STATES,
    error: "",
    data: [makeStateData({ id: 1, name: "ST" })],
  },
  troop: {
    succcess: true,
    fileName: FILENAME_TROOPS,
    error: "",
    data: [makeTroopData({ id: 1, name: "T" })],
  },
  weapon: {
    succcess: true,
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
} as const satisfies RowGameData;

const createBaseFileMap = (): Record<DataFileNames, string | Error> => ({
  [FILENAME_ACTORS]: JSON.stringify([{ id: 1, name: "A" }]),
  [FILENAME_CLASSES]: JSON.stringify([{ id: 1, name: "C" }]),
  "Skills.json": JSON.stringify([{ id: 1, name: "S" }]),
  "Items.json": JSON.stringify([{ id: 1, name: "I" }]),
  "Weapons.json": JSON.stringify([{ id: 1, name: "W" }]),
  "Armors.json": JSON.stringify([{ id: 1, name: "R" }]),
  "Enemies.json": JSON.stringify([{ id: 1, name: "E" }]),
  "Troops.json": JSON.stringify([{ id: 1, name: "T" }]),
  "States.json": JSON.stringify([{ id: 1, name: "ST" }]),
  "CommonEvents.json": JSON.stringify([{ id: 1, name: "CE" }]),
  "MapInfos.json": JSON.stringify([
    {
      id: 1,
      name: "Map1",
      expanded: false,
      order: 0,
      parentId: 0,
      scrollX: 0,
      scrollY: 0,
    },
  ]),
  "System.json": JSON.stringify({ gameTitle: "RPG" }),
  "Animations.json": JSON.stringify([{ id: 1, name: "AN" }]),
  "Tilesets.json": JSON.stringify([{ id: 1, name: "TS" }]),
});

type ConvertHandlers = RpgDataReadHandlers<
  unknown[],
  MapFileInfo,
  Data_System,
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
  readClasss: vi.fn((data) => data),
  readCommonEvents: vi.fn((data) => data),
  readEnemys: vi.fn((data) => data),
  readItems: vi.fn((data) => data),
  readMap: vi.fn((data) => data),
  readSkills: vi.fn((data) => data),
  readStates: vi.fn((data) => data),
  readSystem: vi.fn((data) => data),
  readTroops: vi.fn((data) => data),
  readWeapons: vi.fn((data) => data),
});

const errorFunc = () => {
  throw new Error("conv error");
};
const createConvertErrorHandlers = (): MockedObject<ConvertHandlers> => ({
  readActors: vi.fn(errorFunc),
  readArmors: vi.fn(errorFunc),
  readClasss: vi.fn(errorFunc),
  readCommonEvents: vi.fn(errorFunc),
  readEnemys: vi.fn(errorFunc),
  readItems: vi.fn(errorFunc),
  readMap: vi.fn(errorFunc),
  readSkills: vi.fn(errorFunc),
  readStates: vi.fn(errorFunc),
  readSystem: vi.fn(errorFunc),
  readTroops: vi.fn(errorFunc),
  readWeapons: vi.fn(errorFunc),
});

const runTest = (
  name: string,
  fn: (
    fileReadFn: (
      filename: DataFileNames | MapFileNameWithExt,
    ) => Promise<string>,
    convHandlers: ConvertHandlers,
    mockedValidators: ValidateFunctionsOfReadRpgData,
  ) => Promise<ReadAllDataResultFields>,
) => {
  describe(name, () => {
    test("", async () => {
      const fileReadFn = vi.fn(() => Promise.reject());
      const convHandlers = createConvertErrorHandlers();
      const mockedValidators = createMockedValidateFunctions(true);
      const handlers = lapXX(mockedValidators);
      await fn(fileReadFn, convHandlers, handlers);
      expect(convHandlers.readActors).not.toHaveBeenCalled();
      expect(convHandlers.readArmors).not.toHaveBeenCalled();
      expect(convHandlers.readClasss).not.toHaveBeenCalled();
      expect(convHandlers.readCommonEvents).not.toHaveBeenCalled();
      expect(convHandlers.readEnemys).not.toHaveBeenCalled();
      expect(convHandlers.readItems).not.toHaveBeenCalled();
      expect(convHandlers.readMap).not.toHaveBeenCalled();
      expect(convHandlers.readSkills).not.toHaveBeenCalled();
      expect(convHandlers.readStates).not.toHaveBeenCalled();
      expect(convHandlers.readSystem).not.toHaveBeenCalled();
      expect(convHandlers.readTroops).not.toHaveBeenCalled();
      expect(convHandlers.readWeapons).not.toHaveBeenCalled();
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
    });
  });
};
describe("", () => {
  runTest(
    "readAllGameDataAsArrayFallback",
    async (fileReadFn, convHandlers, mockedValidators) => {
      return readAllGameDataAsArrayFallback(
        terms,
        fileReadFn,
        mockedValidators,
        convHandlers,
      );
    },
  );
  runTest(
    "readAllGameDataAsNullFallback",
    async (fileReadFn, convHandlers, mockedValidators) => {
      return readAllGameDataAsNullFallback(
        terms,
        fileReadFn,
        mockedValidators,
        convHandlers,
      );
    },
  );

  test("readAllGameDataAsArrayFallback: 正常系で各データを変換して返す", async () => {
    const fileMap: Record<string, string | Error> = {
      ...createBaseFileMap(),
      ["Map001.json"]: JSON.stringify({ displayName: "Map1" }),
    };
    const fileReadFn = createReadFileFn(fileMap);
    const convHandlers = createIdentityHandlers();
    const mockedValidators = createMockedValidateFunctions(true);

    const result = await readAllGameDataAsArrayFallback(
      terms,
      fileReadFn,
      lapXX(mockedValidators),
      convHandlers,
    );

    expect(result.actor.succcess).toBe(true);
    expect(result.actor.data).toEqual([{ id: 1, name: "A" }]);
    expect(result.classes.succcess).toBe(true);
    expect(result.skill.succcess).toBe(true);
    expect(result.item.succcess).toBe(true);
    expect(result.weapon.succcess).toBe(true);
    expect(result.armor.succcess).toBe(true);
    expect(result.enemies.succcess).toBe(true);
    expect(result.troop.succcess).toBe(true);
    expect(result.state.succcess).toBe(true);
    expect(result.commonEvent.succcess).toBe(true);
    expect(result.mapInfo.succcess).toBe(true);
    expect(result.system.message).toBe("");
    expect(result.system.system).toEqual({ gameTitle: "RPG" });
    expect(result.mapFiles.info.success).toBe(true);
    expect(result.mapFiles.validMaps).toHaveLength(1);
    expect(result.mapFiles.validMaps[0]?.filename).toBe("Map001");
    expect(result.mapFiles.validMaps[0]?.editingName).toBe("Map1");
    expect(result.mapFiles.invalidMaps).toHaveLength(0);
    expect(convHandlers.readSystem).toHaveBeenCalledWith(
      { gameTitle: "RPG" },
      "System.json",
    );
  });

  test("readAllGameDataAsArrayFallback: 変換で失敗したら配列フォールバックになる", async () => {
    const fileMap: Record<string, string | Error> = {
      ...createBaseFileMap(),
      ["Map001.json"]: JSON.stringify({ displayName: "Map1" }),
    };
    const fileReadFn = createReadFileFn(fileMap);
    const mockedValidators = createMockedValidateFunctions(true);
    const convHandlers = createIdentityHandlers();
    convHandlers.readActors.mockImplementation(errorFunc);

    const result = await readAllGameDataAsArrayFallback(
      terms,
      fileReadFn,
      lapXX(mockedValidators),
      convHandlers,
    );

    expect(result.actor.succcess).toBe(false);
    expect(result.actor.error).toBe(terms.dataConvertError);
    expect(result.actor.data).toEqual([]);
  });

  test("readAllGameDataAsNullFallback: 変換で失敗したら null フォールバックになる", async () => {
    const fileMap: Record<string, string | Error> = {
      ...createBaseFileMap(),
      ["Map001.json"]: JSON.stringify({ displayName: "Map1" }),
    };
    const fileReadFn = createReadFileFn(fileMap);
    const mockedValidators = createMockedValidateFunctions(true);
    const convHandlers = createIdentityHandlers();
    convHandlers.readActors.mockImplementation(errorFunc);

    const result = await readAllGameDataAsNullFallback(
      terms,
      fileReadFn,
      lapXX(mockedValidators),
      convHandlers,
    );

    expect(result.actor.succcess).toBe(false);
    expect(result.actor.error).toBe(terms.dataConvertError);
    expect(result.actor.data).toBeNull();
  });

  test("readAllGameDataAsArrayFallback: mapInfo 読み込み失敗時は mapFiles.info が失敗になる", async () => {
    const base = createBaseFileMap();
    const fileMap: Record<string, string | Error> = {
      ...base,
      [FILENAME_MAP_INFOS]: JSON.stringify({ id: 1 }),
    };
    const fileReadFn = createReadFileFn(fileMap);
    const convHandlers = createIdentityHandlers();
    const mockedValidators = createMockedValidateFunctions(true);

    const result = await readAllGameDataAsArrayFallback(
      terms,
      fileReadFn,
      lapXX(mockedValidators),
      convHandlers,
    );

    expect(result.mapInfo.succcess).toBe(false);
    expect(result.mapInfo.fileName).toBe(FILENAME_MAP_INFOS);
    expect(result.mapInfo.error).toBe(terms.notArray);
    expect(result.mapFiles.info.success).toBe(false);
    if (!result.mapFiles.info.success) {
      expect(result.mapFiles.info.filename).toBe(FILENAME_MAP_INFOS);
      expect(result.mapFiles.info.message).toBe(terms.notArray);
    }
    expect(convHandlers.readMap).not.toHaveBeenCalled();
  });

  test("readAllRowGameData: 生データをそのまま返す", async () => {
    const fileMap: Record<string, string | Error> = {
      ...createBaseFileMap(),
      ["Map001.json"]: JSON.stringify({ displayName: "Map1" }),
    };
    const fileReadFn = createReadFileFn(fileMap);
    const mockedValidators = createMockedValidateFunctions(true);

    const result = await readAllRowGameData(
      fileReadFn,
      lapXX(mockedValidators),
      terms,
    );

    expect(result.actor.succcess).toBe(true);
    expect(result.actor.fileName).toBe(FILENAME_ACTORS);
    expect(result.actor.data).toEqual([{ id: 1, name: "A" }]);
    expect(result.system.message).toBe("");
    expect(result.system.system).toEqual({ gameTitle: "RPG" });
    expect(result.mapFiles.info.success).toBe(true);
  });
});
