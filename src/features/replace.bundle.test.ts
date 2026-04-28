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
  makeSystemData,
  makeTroopData,
  makeCommonEventData,
} from "@RpgTypes/rmmz";
import type {
  Data_CommonEvent,
  Data_Map,
  Data_System,
  Data_Troop,
} from "@RpgTypes/rmmz";
import * as ExtractModule from "./core/extract";
import type { MapDataReplaceHandlers } from "./core/replace";
import type {
  EventContainerExtractor,
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
} from "./extractText";
import { replaceRawDataBundle, gff } from "./replace";

const IMAGE_NAME = "ImageName";

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
      system: makeSystemData({
        texts: {
          gameTitle: text,
          currencyUnit: text,
        },
        terms: {
          basic: {},
        },
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
    note: makeNoteText("BBB", "123"),
  });
  test("result", () => {
    const handlers = createHandlers({
      newText: "BBB",
    });
    const result = replaceRawDataBundle(baseData, handlers);
    expect(result).toEqual(expectedData);
  });
  test("handlers", () => {
    const handlers = createHandlers({
      newText: "BBB",
    });
    replaceRawDataBundle(baseData, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith("AAA");
    expect(handlers.replaceText).not.toHaveBeenCalledWith(noteText);
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
    const result = gff(
      baseData,
      createAssetBundle(),
      createExtractor(),
      handlers,
    );
    expect(result).toEqual(expectedData);
  });
});
