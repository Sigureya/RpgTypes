import { test, expect, describe } from "vitest";
import type { NoteReadResult } from "@RpgTypes/rmmz";
import { summarizeNoteKinds, isNoteBoolean, isNoteNumber } from "./note";
import type {
  AudioFilesSet,
  ImageFilesSet,
  OtherFilesSet,
  SummarizedNote,
} from "./types";

interface TestCase {
  name: string;
  items: NoteReadResult[];
  expected: SummarizedNote[];
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

describe("isNoteBoolean", () => {
  test("true", () => {
    expect("true").toSatisfy(isNoteBoolean);
  });
  test("false", () => {
    expect("false").toSatisfy(isNoteBoolean);
  });
  test("TRUE", () => {
    expect("TRUE").toSatisfy(isNoteBoolean);
  });
  test("FALSE", () => {
    expect("FALSE").toSatisfy(isNoteBoolean);
  });

  test("not boolean", () => {
    expect("123").not.toSatisfy(isNoteBoolean);
  });
});

describe("isNoteNumber", () => {
  test("number", () => {
    expect("123.45").toSatisfy(isNoteNumber);
  });
  test("integer", () => {
    expect("123").toSatisfy(isNoteNumber);
  });
  test("number with spaces", () => {
    expect("  123.45  ").toSatisfy(isNoteNumber);
  });
  test("number with leading and trailing spaces", () => {
    expect("123.45  ").toSatisfy(isNoteNumber);
  });
  test("number with leading spaces", () => {
    expect("  123.45").toSatisfy(isNoteNumber);
  });
  test("number with leading zeros", () => {
    expect("000123.45").toSatisfy(isNoteNumber);
  });
  test("not number", () => {
    expect("true").not.toSatisfy(isNoteNumber);
  });
  test("bgm filename as number", () => {
    expect(BGM_NUMBER).toSatisfy(isNoteNumber);
  });
});

const runTestCases = (
  testCase: TestCase,
  imageFileSet: ImageFilesSet,
  audioFiles: AudioFilesSet,
  other: OtherFilesSet,
) => {
  test(testCase.name, () => {
    const result = summarizeNoteKinds(
      testCase.items,
      audioFiles,
      imageFileSet,
      other,
    );
    expect(result).toEqual(testCase.expected);
  });
};

const testCases: TestCase[] = [
  {
    name: "emptyInput",
    items: [],
    expected: [],
  },
  {
    name: "boolean",
    items: [
      { key: "key1", value: "true" },
      { key: "key1", value: "false" },
    ],
    expected: [{ key: "key1", kinds: ["boolean"], values: ["true", "false"] }],
  },
  {
    name: "number",
    items: [{ key: "key1", value: "123.45" }],
    expected: [{ key: "key1", kinds: ["number"], values: ["123.45"] }],
  },
  {
    name: "multipleKeys",
    items: [
      { key: "A", value: "123" },
      { key: "B", value: "456" },
    ],
    expected: [
      { key: "A", kinds: ["number"], values: ["123"] },
      { key: "B", kinds: ["number"], values: ["456"] },
    ],
  },
  {
    name: "bgm filename as number",
    items: [{ key: "M", value: BGM_NUMBER }],
    expected: [{ key: "M", kinds: ["number", "bgm"], values: [BGM_NUMBER] }],
  },
  {
    name: "bgs filename as number",
    items: [{ key: "S", value: BGS_NUMBER }],
    expected: [{ key: "S", kinds: ["number", "bgs"], values: [BGS_NUMBER] }],
  },
  {
    name: "me filename as number",
    items: [{ key: "ME", value: ME_NUMBER }],
    expected: [{ key: "ME", kinds: ["number", "me"], values: [ME_NUMBER] }],
  },
  {
    name: "se filename as number",
    items: [{ key: "SE", value: SE_NUMBER }],
    expected: [{ key: "SE", kinds: ["number", "se"], values: [SE_NUMBER] }],
  },
  {
    name: "multiple audio files as number",
    items: [
      { key: "Audio", value: BGM_NUMBER },
      { key: "Audio", value: BGS_NUMBER },
    ],
    expected: [
      { key: "Audio", kinds: ["number"], values: [BGM_NUMBER, BGS_NUMBER] },
    ],
  },
  {
    name: "multiple audio files as filename",
    items: [
      { key: "BGM", value: BGM_FILE },
      { key: "BGS", value: BGS_FILE },
      { key: "ME", value: ME_FILE },
      { key: "SE", value: SE_FILE },
    ],
    expected: [
      { key: "BGM", kinds: ["bgm"], values: [BGM_FILE] },
      { key: "BGS", kinds: ["bgs"], values: [BGS_FILE] },
      { key: "ME", kinds: ["me"], values: [ME_FILE] },
      { key: "SE", kinds: ["se"], values: [SE_FILE] },
    ],
  },
  {
    name: "multiple audio files as number 2",
    items: [
      { key: "Audio", value: BGM_NUMBER },
      { key: "Audio", value: BGS_NUMBER },
      { key: "Audio", value: ME_NUMBER },
      { key: "Audio", value: SE_NUMBER },
    ],
    expected: [
      {
        key: "Audio",
        kinds: ["number"],
        values: [BGM_NUMBER, BGS_NUMBER, ME_NUMBER, SE_NUMBER],
      },
    ],
  },
  {
    name: "unknown audio file",
    items: [
      { key: "X", value: BGM_NUMBER },
      { key: "X", value: BGM_FILE },
      { key: "X", value: "123" },
      { key: "X", value: "not found" },
    ],
    expected: [
      {
        key: "X",
        kinds: [],
        values: [BGM_NUMBER, BGM_FILE, "123", "not found"],
      },
    ],
  },
  {
    name: "audio",
    items: [{ key: "Audio", value: AUDIIO_FILE }],
    expected: [
      {
        key: "Audio",
        kinds: ["bgm", "bgs", "me", "se"],
        values: [AUDIIO_FILE],
      },
    ],
  },
  {
    name: "picture",
    items: [{ key: "P", value: PICTURE_FILE }],
    expected: [{ key: "P", kinds: ["picutures"], values: [PICTURE_FILE] }],
  },
  {
    name: "character",
    items: [{ key: "C", value: CHARACTER_FILE }],
    expected: [{ key: "C", kinds: ["characters"], values: [CHARACTER_FILE] }],
  },
  {
    name: "faces",
    items: [{ key: "F", value: FACE_FILE }],
    expected: [{ key: "F", kinds: ["faces"], values: [FACE_FILE] }],
  },
  {
    name: "image",
    items: [{ key: "Image", value: IMAGE_FILE }],
    expected: [
      {
        key: "Image",
        kinds: [
          "picutures",
          "characters",
          "faces",
          "battlers",
          "svBattlers",
          "enmies",
          "tilesets",
        ],
        values: [IMAGE_FILE],
      },
    ],
  },
];

describe("summarizeNoteKinds", () => {
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

  testCases.forEach((testCase) =>
    runTestCases(testCase, imageFiles, audioFiles, {
      movies: new Set(),
    }),
  );
});
