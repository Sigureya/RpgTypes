import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  AssetFilesBundle,
  RawGameData,
  ReadArrayResult,
} from "@RpgTypes/fileio";
import {
  makeActorData,
  makeArmorData,
  makeClassData,
  makeWeaponData,
  makeItemData,
  makeEnemyData,
  makeSkillData,
  makeStateData,
  makeTroopData,
  makeCommonEventData,
  makeTestSystemData,
} from "@RpgTypes/rmmz";
import type { Data_CommonEvent, Data_Map, Data_Troop } from "@RpgTypes/rmmz";
import type { MapDataReplaceHandlers } from "./core/replace";
import type {
  EventContainerExtractor,
  ExtractedBattleEventText,
  ExtractedMapTexts,
} from "./extractText";
import {
  replaceRawDataBundle,
  replaceRawDataWithAutoNoteFilter,
} from "./replace";

const IMAGE_NAME = "ImageName";
const VALIABLE_TEXT = "Variables";
const SWITCHES_TEXT = "Switches";

const MSG_FILEREAD_SUCCESS = "File read successfully";

const NON_REPLACEABLE_TEXT = "Non replaceable text";

const makeNoteText = (text: string, value: string): string => {
  return [`<Text:${text}>`, `<Number:${value}>`].join("\n");
};

const makeReadResult = <T>(data: T): ReadArrayResult<T> => ({
  data: [data],
  error: MSG_FILEREAD_SUCCESS,
  fileName: "mockFile",
  success: true,
});

const makeEmptyReadResult = <T>(): ReadArrayResult<T> => ({
  data: [],
  error: "",
  fileName: "mockFile",
  success: true,
});

interface PPP {
  text: string;
  image: string;
  note: string;
}

const makeMockDataBundle = ({ text, image, note }: PPP): RawGameData => {
  return {
    actors: makeReadResult(
      makeActorData({
        id: 1,
        name: text,
        nickname: text,
        profile: text,
        battlerName: image,
        characterName: image,
        faceName: image,
        note: note,
      }),
    ),
    classes: makeReadResult(
      makeClassData({
        id: 1,
        name: text,
        note: note,
      }),
    ),
    armors: makeReadResult(
      makeArmorData({
        id: 1,
        name: text,
        description: text,
        note: note,
      }),
    ),
    weapons: makeReadResult(
      makeWeaponData({
        id: 1,
        name: text,
        description: text,
        note: note,
      }),
    ),
    items: makeReadResult(
      makeItemData({
        id: 1,
        name: text,
        description: text,
        note: note,
      }),
    ),
    enemies: makeReadResult(
      makeEnemyData({
        id: 1,
        name: text,
        battlerName: image,
        note: note,
      }),
    ),
    skills: makeReadResult(
      makeSkillData({
        id: 1,
        name: text,
        description: text,
        message1: text,
        message2: text,
        note: note,
      }),
    ),
    states: makeReadResult(
      makeStateData({
        id: 1,
        name: text,
        message1: text,
        message2: text,
        message3: text,
        message4: text,
        note: note,
      }),
    ),
    troops: makeReadResult(
      makeTroopData({
        id: 1,
        name: NON_REPLACEABLE_TEXT,
      }),
    ),
    commonEvents: makeReadResult(
      makeCommonEventData({
        id: 1,
        name: NON_REPLACEABLE_TEXT,
      }),
    ),
    mapInfos: makeEmptyReadResult(),
    animations: makeEmptyReadResult(),
    tilesets: makeEmptyReadResult(),
    system: {
      system: makeTestSystemData({
        text,
        image,
        audio: "AudioName",
        switches: SWITCHES_TEXT,
        variables: VALIABLE_TEXT,
      }),
      message: MSG_FILEREAD_SUCCESS,
    },
    mapFiles: {
      info: { success: true },
      validMaps: [],
      invalidMaps: [],
    },
  };
};

interface HHH {
  newText: string;
}

const createHandlers = ({
  newText,
}: HHH): MockedObject<MapDataReplaceHandlers> => ({
  replaceText: vi.fn((text) => (text !== "" ? newText : text)),
  isReplaceTargetNote: vi.fn().mockReturnValue(true),
  pluginCommand: vi.fn((command) => command),
  scriptCommand: vi.fn((command) => command),
});

const createExtractor = (): MockedObject<EventContainerExtractor> => ({
  extractCommonEventText: vi.fn((common: Data_CommonEvent) => ({
    eventId: common.id,
    name: common.name,
    commands: [],
  })),
  extractBattleText: vi.fn((troop: Data_Troop): ExtractedBattleEventText[] => [
    {
      eventId: troop.id,
      pageIndex: 0,
      commands: [],
    },
    {
      eventId: troop.id,
      pageIndex: 1,
      commands: [],
    },
  ]),
  extractMapTexts: vi.fn(
    (map: Data_Map): ExtractedMapTexts => ({
      displayedName: map.displayName,
      note: map.note,
      noteItems: [],
      events: [],
    }),
  ),
});

const createAssetBundle = (): AssetFilesBundle => ({
  audioFiles: {
    bgm: new Set(),
    bgs: new Set(),
    me: new Set(),
    se: new Set(),
  },
  imageFiles: {
    characters: new Set(),
    faces: new Set(),
    svEnemy: new Set(),
    enemies: new Set(),
    svActors: new Set(),
    picutures: new Set(),
    tilesets: new Set(),
  },
  otherFiles: {
    movies: new Set(),
  },
});

describe("replaceRawDataBundle", () => {
  const noteText = makeNoteText("AAA", "123");
  const baseData = makeMockDataBundle({
    text: "AAA",
    image: IMAGE_NAME,
    note: noteText,
  });
  const expectedData = makeMockDataBundle({
    text: "BBB",
    image: IMAGE_NAME,
    note: makeNoteText("BBB", "BBB"),
  });
  test("result", () => {
    const handlers = createHandlers({
      newText: "BBB",
    });
    const result = replaceRawDataBundle(baseData, handlers);
    // エラーが長くなるので1個ずつ比較
    expect(result.actors).toEqual(expectedData.actors);
    expect(result.armors).toEqual(expectedData.armors);
    expect(result.classes).toEqual(expectedData.classes);
    expect(result.enemies).toEqual(expectedData.enemies);
    expect(result.items).toEqual(expectedData.items);
    expect(result.skills).toEqual(expectedData.skills);
    expect(result.states).toEqual(expectedData.states);
    expect(result.system).toEqual(expectedData.system);
    expect(result.troops).toEqual(baseData.troops);
    expect(result.commonEvents).toEqual(baseData.commonEvents);

    // メンバ漏れが無いか検証するために全体を比較
    expect(result).toEqual(expectedData);
  });
  test("handlers", () => {
    const handlers = createHandlers({
      newText: "BBB",
    });
    replaceRawDataBundle(baseData, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith("AAA");
    expect(handlers.replaceText).not.toHaveBeenCalledWith(noteText);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(IMAGE_NAME);
    expect(handlers.replaceText).not.toHaveBeenCalledWith("AudioName");
    expect(handlers.replaceText).not.toHaveBeenCalledWith(VALIABLE_TEXT);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(SWITCHES_TEXT);
  });
});

describe("gff", () => {
  const noteText = makeNoteText("AAA", "456");
  const baseData = makeMockDataBundle({
    text: "AAA",
    image: IMAGE_NAME,
    note: noteText,
  });
  test("result", () => {
    const handlers = createHandlers({
      newText: "BBB",
    });
    const newNote = makeNoteText("BBB", "456");
    const expectedData = makeMockDataBundle({
      text: "BBB",
      image: IMAGE_NAME,
      note: newNote,
    });
    const extractor = createExtractor();
    const result = replaceRawDataWithAutoNoteFilter(
      baseData,
      createAssetBundle(),
      extractor,
      handlers,
    );
    expect(result.actors).toEqual(expectedData.actors);
    expect(result.armors).toEqual(expectedData.armors);
    expect(result.classes).toEqual(expectedData.classes);
    expect(result.enemies).toEqual(expectedData.enemies);
    expect(result.items).toEqual(expectedData.items);
    expect(result.skills).toEqual(expectedData.skills);
    expect(result.states).toEqual(expectedData.states);
    expect(result.system).toEqual(expectedData.system);
  });
  test("handlers", () => {
    const handlers = createHandlers({
      newText: "BBB",
    });
    const extractor = createExtractor();
    replaceRawDataWithAutoNoteFilter(
      baseData,
      createAssetBundle(),
      extractor,
      handlers,
    );
    baseData.commonEvents.data.forEach((common) => {
      expect(extractor.extractCommonEventText).toHaveBeenCalledWith(common);
    });
    expect(extractor.extractCommonEventText).toHaveBeenCalledTimes(
      baseData.commonEvents.data.length,
    );
    baseData.troops.data.forEach((troop) => {
      expect(extractor.extractBattleText).toHaveBeenCalledWith(troop);
    });
    expect(extractor.extractBattleText).toHaveBeenCalledTimes(
      baseData.troops.data.length,
    );
    baseData.mapFiles.validMaps.forEach((mapFile) => {
      expect(extractor.extractMapTexts).toHaveBeenCalledWith(mapFile.map);
    });
    expect(extractor.extractMapTexts).toHaveBeenCalledTimes(
      baseData.mapFiles.validMaps.length,
    );
  });
});
