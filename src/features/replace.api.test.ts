import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  AssetFilesBundle,
  FileEntry,
  RawGameData2,
  TestRawDataSource,
} from "@RpgTypes/fileio";
import { FILENAME_ACTORS, FILENAME_AUX_DICTIONARY } from "@RpgTypes/fileio";
import { makeRawTestDataBundle } from "@RpgTypes/fileio";
import type { TestDataSourceWithNote } from "@RpgTypes/libs";
import { makeMapData, makeSystemTexts } from "@RpgTypes/rmmz";
import type {
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
  EventCommand,
} from "@RpgTypes/rmmz";
import type { GameDataReplaceOutput, RuntimeDictionary } from "./core/extract";
import type {
  EventContainerExtractor,
  ExtractedBattleEventText,
  ExtractedMapTexts,
} from "./extractText";
import {
  replaceDataDirect,
  replaceDataDirectToFileEntries,
  replaceDataWithHash,
  replaceDataWithHashToFileEntries,
  replaceRuntimeMapData,
} from "./replace";
import type { ReplaceRawDataContext } from "./types";

const IMAGE_NAME = "ImageName";
const VARIABLE_TEXT = "Variables";
const SWITCHES_TEXT = "Switches";
const MSG_FILEREAD_SUCCESS = "File read successfully";
const NON_REPLACEABLE_TEXT = "Non replaceable text";
const SYSTEM_TEXT = "SystemText";
const makeNoteText = (text: string, value: string): string => {
  return [`<Target:${text}>`, `<Number:${value}>`].join("\n");
};

const makeMockDataBundle = (src: TestDataSourceWithNote): RawGameData2 => {
  const source: TestRawDataSource = {
    text: src.text,
    image: src.image,
    systemText: SYSTEM_TEXT,
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

const firstActorNote = (data: RawGameData2): string => {
  return data.actors.data[0]?.note ?? "";
};

const findEntry = (entries: FileEntry[], filename: string): FileEntry => {
  const entry = entries.find((item) => item.filename === filename);
  if (!entry) {
    throw new Error(`file entry not found: ${filename}`);
  }
  return entry;
};

describe("replaceRuntimeMapData", () => {
  test("displayName と対象 note のみ辞書で置換する", () => {
    const map = makeMapData<EventCommand>({
      displayName: "MapName",
      note: ["<Target:Text>", "<Other:Text>"].join("\n"),
    });
    const dic: RuntimeDictionary<string> = {
      targetNoteKeys: new Set(["Target"]),
      textDictionary: new Map([
        ["MapName", "NewMap"],
        ["Text", "NewText"],
      ]),
      actorTextDictionary: new Map(),
    };

    const result = replaceRuntimeMapData(map, dic);

    expect(result.displayName).toBe("NewMap");
    expect(result.note).toContain("<Target:NewText>");
    expect(result.note).toContain("<Other:Text>");
  });

  test("targetNoteKeys に含まれない note は置換しない", () => {
    const map = makeMapData<EventCommand>({
      displayName: "MapName",
      note: "<Target:Text>",
    });
    const dic: RuntimeDictionary<string> = {
      targetNoteKeys: new Set(["Unknown"]),
      textDictionary: new Map([
        ["MapName", "NewMap"],
        ["Text", "NewText"],
      ]),
      actorTextDictionary: new Map(),
    };

    const result = replaceRuntimeMapData(map, dic);

    expect(result.displayName).toBe("NewMap");
    expect(result.note).toContain("<Target:Text>");
  });
});

describe("toFileEntries", () => {
  test("replaceDataDirectToFileEntries は main data の FileEntry を返す", () => {
    const baseData = makeMockDataBundle({
      text: "AAA",
      image: IMAGE_NAME,
      note: makeNoteText("AAA", "456"),
      audio: "AudioName",
    });

    const entries = replaceDataDirectToFileEntries(
      {
        data: baseData,
        assetBundle: createAssetBundle(),
        dictionary: new Map([["AAA", "BBB"]]),
        textKeys: new Set(["Target"]),
        system: makeSystemTexts({}),
      },
      createExtractor(),
    );

    const actorsEntry = findEntry(entries, FILENAME_ACTORS);
    //    const systemEntry = findEntry(entries, FILENAME_SYSTEM);

    expect(JSON.stringify(actorsEntry.data)).toContain("BBB");
    //  expect(systemEntry.filename).toBe(FILENAME_SYSTEM);
  });

  test("replaceDataWithHashToFileEntries は aux 辞書ファイルを含む", () => {
    const baseData = makeMockDataBundle({
      text: "AAA",
      image: IMAGE_NAME,
      note: makeNoteText("AAA", "456"),
      audio: "AudioName",
    });
    const hashFn = (text: string) => `hash_${text}`;

    const entries = replaceDataWithHashToFileEntries(
      {
        data: baseData,
        assetBundle: createAssetBundle(),
        dictionary: new Map([["AAA", "BBB"]]),
        textKeys: new Set(["Target"]),
        system: makeSystemTexts({}),
      },
      createExtractor(),
      hashFn,
    );

    const actorsEntry = findEntry(entries, FILENAME_ACTORS);
    const dictionaryEntry = findEntry(entries, FILENAME_AUX_DICTIONARY);
    const aux = dictionaryEntry.data as GameDataReplaceOutput<string>["aux"];

    expect(JSON.stringify(actorsEntry.data)).toContain("hash_AAA");
    expect(aux.textDictionary).toContainEqual({
      key: "hash_AAA",
      value: "BBB",
    });
  });
});

describe("edge cases", () => {
  const buildContext = (
    dictionary: ReadonlyMap<string, string>,
    textKeys: ReadonlySet<string>,
  ): ReplaceRawDataContext => ({
    data: makeMockDataBundle({
      text: "AAA",
      image: IMAGE_NAME,
      note: makeNoteText("AAA", "456"),
      audio: "AudioName",
    }),
    system: makeSystemTexts({}),
    assetBundle: createAssetBundle(),
    dictionary,
    textKeys,
  });

  test("replaceDataDirect は空辞書なら変更しない", () => {
    const context = buildContext(new Map(), new Set(["Target"]));

    const result = replaceDataDirect(context, createExtractor());

    expect(result).toEqual(context.data);
  });

  test("replaceDataDirect は note key 不一致なら note 値を維持する", () => {
    const context = buildContext(
      new Map([["AAA", "BBB"]]),
      new Set(["Unknown"]),
    );

    const result = replaceDataDirect(context, createExtractor());

    expect(firstActorNote(result)).toContain("<Target:AAA>");
  });

  test("replaceDataWithHash は note key 不一致なら note 値を維持する", () => {
    const context = buildContext(
      new Map([["AAA", "BBB"]]),
      new Set(["Unknown"]),
    );

    const result = replaceDataWithHash(
      context,
      createExtractor(),
      (text) => `hash_${text}`,
    );

    expect(firstActorNote(result.main)).toContain("<Target:AAA>");
  });
});
