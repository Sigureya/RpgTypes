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
import type {
  EventContainerExtractor,
  ExtractedBattleEventText,
  ExtractedMapTexts,
} from "./extractText";
import { replaceDataWithHash } from "./replace";
import type { RuntimeDictionaryData } from "./types";

const IMAGE_NAME = "ImageName";
const VARIABLE_TEXT = "Variables";
const SWITCHES_TEXT = "Switches";
const MSG_FILEREAD_SUCCESS = "File read successfully";
const NON_REPLACEABLE_TEXT = "Non replaceable text";

const makeNoteText = (text: string, value: number): string => {
  return [`<Text:${text}>`, `<Number:${value}>`].join("\n");
};

const makeMockDataBundle = (src: TestDataSourceWithNote): RawGameData => {
  const source: TestRawDataSource = {
    text: src.text,
    image: src.image,
    audio: src.audio,
    note: src.note,
    message: MSG_FILEREAD_SUCCESS,
    nonReplaceableText: NON_REPLACEABLE_TEXT,
    switches: SWITCHES_TEXT,
    variables: VARIABLE_TEXT,
  };
  return makeRawTestDataBundle(source);
};

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

const createHash = (text: string): string => `hash_${text}`;

describe("replaceDataWithHash", () => {
  test("main に hash 化したデータを返し、非対象 note 値は維持する", () => {
    const baseData = makeMockDataBundle({
      text: "AAA",
      image: IMAGE_NAME,
      note: makeNoteText("AAA", 456),
      audio: "AudioName",
    });
    const extractor = createExtractor();
    const result = replaceDataWithHash(
      {
        data: baseData,
        assetBundle: createAssetBundle(),
        dictionary: new Map([["AAA", "BBB"]]),
        textKeys: new Set(["Text", "Number"]),
      },
      extractor,
      createHash,
    );

    const expectedData = makeMockDataBundle({
      text: "hash_AAA",
      image: IMAGE_NAME,
      note: makeNoteText("hash_AAA", 456),
      audio: "AudioName",
    });

    expect(result.main).toEqual(expectedData);
    expect(extractor.extractCommonEventText).toHaveBeenCalledTimes(
      baseData.commonEvents.data.length,
    );
    expect(extractor.extractBattleText).toHaveBeenCalledTimes(
      baseData.troops.data.length,
    );
    expect(extractor.extractMapTexts).toHaveBeenCalledTimes(
      baseData.mapFiles.validMaps.length,
    );
  });

  test("aux に actorTextDictionary と newTextDictionary を返す", () => {
    const expectedDictionary: RuntimeDictionaryData<string> = {
      targetNoteKeys: ["Text"],
      dictionary: [
        { key: "hash_AAA", value: "BBB" },
        { key: "hash_CCC", value: "DDD" },
      ],
    };

    const result = replaceDataWithHash(
      {
        data: makeMockDataBundle({
          text: "AAA",
          image: IMAGE_NAME,
          note: makeNoteText("AAA", 456),
          audio: "AudioName",
        }),
        assetBundle: createAssetBundle(),
        dictionary: new Map([
          ["AAA", "BBB"],
          ["CCC", "DDD"],
        ]),
        textKeys: new Set(["Text"]),
      },
      createExtractor(),
      createHash,
    );

    expect(result.aux.dictionary).toEqual(expectedDictionary);
    expect(result.aux.actorTextDictionary).toContainEqual({
      value: "hash_AAA",
      key: "AAA",
    });
    expect(result.aux.actorTextDictionary).toContainEqual({
      value: "hash_BBB",
      key: "BBB",
    });
  });
});
