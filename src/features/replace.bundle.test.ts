import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  AssetFilesBundle,
  RawGameData,
  TestRawDataSource,
} from "@RpgTypes/fileio";
import { makeRawTestDataBundle } from "@RpgTypes/fileio";
import type { TestDataSourceWithNote } from "@RpgTypes/libs";
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

const makeMockDataBundle = (src: TestDataSourceWithNote): RawGameData => {
  const soruce: TestRawDataSource = {
    text: src.text,
    image: src.image,
    audio: src.audio,
    note: src.note,
    message: MSG_FILEREAD_SUCCESS,
    nonReplaceableText: NON_REPLACEABLE_TEXT,
    switches: SWITCHES_TEXT,
    variables: VALIABLE_TEXT,
  };
  return makeRawTestDataBundle(soruce);
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
    audio: "AudioName",
  });
  const expectedData = makeMockDataBundle({
    text: "BBB",
    image: IMAGE_NAME,
    note: makeNoteText("BBB", "BBB"),
    audio: "AudioName",
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

describe("replaceRawDataWithAutoNoteFilter", () => {
  const noteText = makeNoteText("AAA", "456");
  const baseData = makeMockDataBundle({
    text: "AAA",
    image: IMAGE_NAME,
    note: noteText,
    audio: "AudioName",
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
      audio: "AudioName",
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
    expect(result.troops).toEqual(baseData.troops);
    expect(result.commonEvents).toEqual(baseData.commonEvents);
    expect(result).toEqual(expectedData);
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
    expect(handlers.replaceText).toHaveBeenCalledWith("AAA");
    expect(handlers.replaceText).not.toHaveBeenCalledWith(noteText);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(IMAGE_NAME);
    expect(handlers.replaceText).not.toHaveBeenCalledWith("AudioName");
    expect(handlers.replaceText).not.toHaveBeenCalledWith(VALIABLE_TEXT);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(SWITCHES_TEXT);
    expect(handlers.replaceText).not.toHaveBeenCalledWith("456");
    expect(extractor.extractCommonEventText).toHaveBeenCalledTimes(
      baseData.commonEvents.data.length,
    );
    expect(extractor.extractBattleText).toHaveBeenCalledTimes(
      baseData.troops.data.length,
    );
    expect(extractor.extractMapTexts).toHaveBeenCalledTimes(
      baseData.mapFiles.validMaps.length,
    );
    baseData.commonEvents.data.forEach((common) => {
      expect(extractor.extractCommonEventText).toHaveBeenCalledWith(common);
    });
    baseData.troops.data.forEach((troop) => {
      expect(extractor.extractBattleText).toHaveBeenCalledWith(troop);
    });
    baseData.mapFiles.validMaps.forEach((mapFile) => {
      expect(extractor.extractMapTexts).toHaveBeenCalledWith(mapFile.map);
    });
  });
});
