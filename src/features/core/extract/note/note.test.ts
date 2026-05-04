import { test, expect, describe } from "vitest";
import type { AudioFilesSet, ImageFilesSet } from "@RpgTypes/fileio";
import type { NoteReadResultsWithSource } from "@RpgTypes/rmmz";
import { isNoteNumber, stringLikeNoteKeys, summarizeNoteKinds } from "./note";
import type { OtherFilesSet, SummarizedNote2 } from "./types";

interface TestCase2 {
  name: string;
  sources: NoteReadResultsWithSource[];
  expected: SummarizedNote2[];
  set: ReadonlySet<string>;
}

const BGM_NUMBER = "1001";
const BGS_NUMBER = "1002";
const ME_NUMBER = "1003";
const SE_NUMBER = "1004";

const AUDIIO_FILE = "audio-file";
const BGM_FILE = "bgm-file";
const BGS_FILE = "bgs-file";
const ME_FILE = "me-file";
const SE_FILE = "se-file";

const FACE_NUMBER = "2001";
const CHARACTER_NUMBER = "2002";
const BATTLE_NUMBER = "2003";
const SV_BATTLE_NUMBER = "2004";
const ENEMY_NUMBER = "2005";
const PICTURE_NUMBER = "2006";
const TILESET_NUMBER = "2007";

const IMAGE_FILE = "image-file";
const FACE_FILE = "face-file";
const CHARACTER_FILE = "character-file";
const BATTLE_FILE = "battler-file";
const SV_BATTLE_FILE = "svBattler-file";
const ENEMY_FILE = "enemy-file";
const PICTURE_FILE = "picture-file";
const TILESET_FILE = "tileset-file";

const MOVIE_FILE = "movie-file";

const DATA_NAME = "Test Data";
describe("isNoteNumber", () => {
  test("bgm filename as number", () => {
    expect(BGM_NUMBER).toSatisfy(isNoteNumber);
  });
});

const runTestCases2 = (
  testCase: TestCase2,
  imageFileSet: ImageFilesSet,
  audioFiles: AudioFilesSet,
  other: OtherFilesSet,
) => {
  describe(testCase.name, () => {
    test("summarizeNoteKinds2", () => {
      const result = summarizeNoteKinds(testCase.sources, {
        audioFiles,
        imageFiles: imageFileSet,
        otherFiles: other,
      });
      expect(result).toEqual(testCase.expected);
    });
    test("stringLikeNoteKeys", () => {
      const result: Set<string> = stringLikeNoteKeys(testCase.expected);
      expect(result).toEqual(testCase.set);
    });
  });
};

const testCases2: TestCase2[] = [
  {
    name: "emptyInput",
    sources: [],
    expected: [],
    set: new Set(),
  },
  {
    name: "boolean with source",
    sources: [
      {
        source: "actors",
        notes: [
          { key: "key1", value: "true", dataId: 1, name: DATA_NAME },
          { key: "key1", value: "false", dataId: 2, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "key1",
        kinds: ["boolean"],
        values: [
          { value: "true", dataId: 1, soruce: "actors", name: DATA_NAME },
          { value: "false", dataId: 2, soruce: "actors", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "mixed sources",
    sources: [
      {
        source: "actors",
        notes: [{ key: "A", value: "123", dataId: 1, name: DATA_NAME }],
      },
      {
        source: "skills",
        notes: [{ key: "A", value: "456", dataId: 3, name: DATA_NAME }],
      },
    ],
    expected: [
      {
        key: "A",
        kinds: ["number"],
        values: [
          { value: "123", dataId: 1, soruce: "actors", name: DATA_NAME },
          { value: "456", dataId: 3, soruce: "skills", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "audio with source",
    sources: [
      {
        source: "actors",
        notes: [
          { key: "Audio", value: AUDIIO_FILE, dataId: 1, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "Audio",
        kinds: ["bgm", "bgs", "me", "se"],
        values: [
          { value: AUDIIO_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "bgm filename with source",
    sources: [
      {
        source: "actors",
        notes: [{ key: "BGM", value: BGM_FILE, dataId: 1, name: DATA_NAME }],
      },
    ],
    expected: [
      {
        key: "BGM",
        kinds: ["bgm"],
        values: [
          { value: BGM_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "picture with source",
    sources: [
      {
        source: "items",
        notes: [
          { key: "P", value: PICTURE_FILE, dataId: 1, name: DATA_NAME },
          { key: "P", value: PICTURE_NUMBER, dataId: 2, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "P",
        kinds: ["pictures"],
        values: [
          { value: PICTURE_FILE, dataId: 1, soruce: "items", name: DATA_NAME },
          {
            value: PICTURE_NUMBER,
            dataId: 2,
            soruce: "items",
            name: DATA_NAME,
          },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "character with source",
    sources: [
      {
        source: "actors",
        notes: [
          { key: "C", value: CHARACTER_FILE, dataId: 1, name: DATA_NAME },
          { key: "C", value: CHARACTER_NUMBER, dataId: 2, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "C",
        kinds: ["characters"],
        values: [
          {
            value: CHARACTER_FILE,
            dataId: 1,
            soruce: "actors",
            name: DATA_NAME,
          },
          {
            value: CHARACTER_NUMBER,
            dataId: 2,
            soruce: "actors",
            name: DATA_NAME,
          },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "faces with source",
    sources: [
      {
        source: "actors",
        notes: [
          { key: "F", value: FACE_FILE, dataId: 1, name: DATA_NAME },
          { key: "F", value: FACE_NUMBER, dataId: 2, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "F",
        kinds: ["faces"],
        values: [
          { value: FACE_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
          { value: FACE_NUMBER, dataId: 2, soruce: "actors", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "image with source",
    sources: [
      {
        source: "items",
        notes: [
          { key: "Image", value: IMAGE_FILE, dataId: 1, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "Image",
        kinds: [
          "pictures",
          "characters",
          "faces",
          "battlers",
          "svBattlers",
          "enemies",
          "tilesets",
        ],
        values: [
          { value: IMAGE_FILE, dataId: 1, soruce: "items", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "movie with source",
    sources: [
      {
        source: "system",
        notes: [
          { key: "Movie", value: MOVIE_FILE, dataId: 0, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "Movie",
        kinds: ["movies"],
        values: [
          { value: MOVIE_FILE, dataId: 0, soruce: "system", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "bgs filename as number with source",
    sources: [
      {
        source: "actors",
        notes: [{ key: "S", value: BGS_NUMBER, dataId: 1, name: DATA_NAME }],
      },
    ],
    expected: [
      {
        key: "S",
        kinds: ["number", "bgs"],
        values: [
          { value: BGS_NUMBER, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "me filename as number with source",
    sources: [
      {
        source: "items",
        notes: [{ key: "ME", value: ME_NUMBER, dataId: 5, name: DATA_NAME }],
      },
    ],
    expected: [
      {
        key: "ME",
        kinds: ["number", "me"],
        values: [
          { value: ME_NUMBER, dataId: 5, soruce: "items", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "se filename as number with source",
    sources: [
      {
        source: "skills",
        notes: [{ key: "SE", value: SE_NUMBER, dataId: 10, name: DATA_NAME }],
      },
    ],
    expected: [
      {
        key: "SE",
        kinds: ["number", "se"],
        values: [
          { value: SE_NUMBER, dataId: 10, soruce: "skills", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "multiple audio files as filename with source",
    sources: [
      {
        source: "actors",
        notes: [
          { key: "BGM", value: BGM_FILE, dataId: 1, name: DATA_NAME },
          { key: "BGS", value: BGS_FILE, dataId: 1, name: DATA_NAME },
          { key: "ME", value: ME_FILE, dataId: 1, name: DATA_NAME },
          { key: "SE", value: SE_FILE, dataId: 1, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "BGM",
        kinds: ["bgm"],
        values: [
          { value: BGM_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
      {
        key: "BGS",
        kinds: ["bgs"],
        values: [
          { value: BGS_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
      {
        key: "ME",
        kinds: ["me"],
        values: [
          { value: ME_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
      {
        key: "SE",
        kinds: ["se"],
        values: [
          { value: SE_FILE, dataId: 1, soruce: "actors", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "multiple audio files as number with source",
    sources: [
      {
        source: "items",
        notes: [
          { key: "Audio", value: BGM_NUMBER, dataId: 1, name: DATA_NAME },
          { key: "Audio", value: BGS_NUMBER, dataId: 1, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "Audio",
        kinds: ["number"],
        values: [
          { value: BGM_NUMBER, dataId: 1, soruce: "items", name: DATA_NAME },
          { value: BGS_NUMBER, dataId: 1, soruce: "items", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "multiple audio files as number 2 with source",
    sources: [
      {
        source: "skills",
        notes: [
          { key: "Audio", value: BGM_NUMBER, dataId: 1, name: DATA_NAME },
          { key: "Audio", value: BGS_NUMBER, dataId: 1, name: DATA_NAME },
          { key: "Audio", value: ME_NUMBER, dataId: 1, name: DATA_NAME },
          { key: "Audio", value: SE_NUMBER, dataId: 1, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "Audio",
        kinds: ["number"],
        values: [
          { value: BGM_NUMBER, dataId: 1, soruce: "skills", name: DATA_NAME },
          { value: BGS_NUMBER, dataId: 1, soruce: "skills", name: DATA_NAME },
          { value: ME_NUMBER, dataId: 1, soruce: "skills", name: DATA_NAME },
          { value: SE_NUMBER, dataId: 1, soruce: "skills", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(),
  },
  {
    name: "unknown audio file with source",
    sources: [
      {
        source: "weapons",
        notes: [
          { key: "X", value: BGM_NUMBER, dataId: 1, name: DATA_NAME },
          { key: "X", value: BGM_FILE, dataId: 1, name: DATA_NAME },
          { key: "X", value: "123", dataId: 1, name: DATA_NAME },
          { key: "X", value: "not found", dataId: 1, name: DATA_NAME },
        ],
      },
    ],
    expected: [
      {
        key: "X",
        kinds: [],
        values: [
          { value: BGM_NUMBER, dataId: 1, soruce: "weapons", name: DATA_NAME },
          { value: BGM_FILE, dataId: 1, soruce: "weapons", name: DATA_NAME },
          { value: "123", dataId: 1, soruce: "weapons", name: DATA_NAME },
          { value: "not found", dataId: 1, soruce: "weapons", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(["X"]),
  },
  {
    name: "unknown file with source",
    sources: [
      {
        source: "items",
        notes: [{ key: "X", value: "unknown", dataId: 1, name: DATA_NAME }],
      },
    ],
    expected: [
      {
        key: "X",
        kinds: [],
        values: [
          { value: "unknown", dataId: 1, soruce: "items", name: DATA_NAME },
        ],
      },
    ],
    set: new Set(["X"]),
  },
];

describe("summarizeNoteKinds2", () => {
  const audioFiles: AudioFilesSet = {
    bgm: new Set([BGM_NUMBER, BGM_FILE, AUDIIO_FILE]),
    bgs: new Set([BGS_NUMBER, BGS_FILE, AUDIIO_FILE]),
    me: new Set([ME_NUMBER, ME_FILE, AUDIIO_FILE]),
    se: new Set([SE_NUMBER, SE_FILE, AUDIIO_FILE]),
  };

  const imageFiles: ImageFilesSet = {
    characters: new Set([CHARACTER_NUMBER, CHARACTER_FILE, IMAGE_FILE]),
    faces: new Set([FACE_NUMBER, FACE_FILE, IMAGE_FILE]),
    svEnemy: new Set([BATTLE_NUMBER, BATTLE_FILE, IMAGE_FILE]),
    svActors: new Set([SV_BATTLE_NUMBER, SV_BATTLE_FILE, IMAGE_FILE]),
    enemies: new Set([ENEMY_NUMBER, ENEMY_FILE, IMAGE_FILE]),
    picutures: new Set([PICTURE_NUMBER, PICTURE_FILE, IMAGE_FILE]),
    tilesets: new Set([TILESET_NUMBER, TILESET_FILE, IMAGE_FILE]),
  };

  testCases2.forEach((testCase) =>
    runTestCases2(testCase, imageFiles, audioFiles, {
      movies: new Set([MOVIE_FILE]),
    }),
  );
});
