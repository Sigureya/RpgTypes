import { test, expect, describe } from "vitest";
import type { NoteReadResult } from "@RpgTypes/rmmz";
import { fff, isBooleanNote, isNumberNote } from "./note";
import type { AudioFilesSet, ImageFilesSet, TypeXX } from "./types";

interface TestCase {
  name: string;
  items: NoteReadResult[];
  expected: TypeXX[];
}
const BGM_NUMBER = "1001";
const BGS_NUMBER = "1002";
const ME_NUMBER = "1003";
const SE_NUMBER = "1004";

const audioFiles: AudioFilesSet = {
  bgm: new Set([BGM_NUMBER]),
  bgs: new Set([BGS_NUMBER]),
  me: new Set([ME_NUMBER]),
  se: new Set([SE_NUMBER]),
};

const emptyImageFiles: ImageFilesSet = {
  character: new Set(),
  faceset: new Set(),
  battler: new Set(),
  svBattler: new Set(),
  enemy: new Set(),
  picuture: new Set(),
  tileset: new Set(),
};

describe("isBooleanNote", () => {
  test("true", () => {
    expect(isBooleanNote("true")).toBe(true);
  });
  test("false", () => {
    expect(isBooleanNote("false")).toBe(true);
  });
  test("not boolean", () => {
    expect(isBooleanNote("123")).toBe(false);
  });
});

describe("isNumberNote", () => {
  test("number", () => {
    expect(isNumberNote("123.45")).toBe(true);
  });
  test("integer", () => {
    expect(isNumberNote("123")).toBe(true);
  });
  test("not number", () => {
    expect(isNumberNote("abc")).toBe(false);
  });
  test("", () => {
    expect(isNumberNote(BGM_NUMBER)).toBe(true);
  });
});

const runTestCases = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("", () => {
      const result = fff(testCase.items, audioFiles, emptyImageFiles);
      expect(result).toEqual(testCase.expected);
    });
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
    name: "",
    items: [{ key: "M", value: BGM_NUMBER }],
    expected: [{ key: "M", kinds: ["number", "bgm"], values: [BGM_NUMBER] }],
  },
  {
    name: "",
    items: [{ key: "S", value: BGS_NUMBER }],
    expected: [{ key: "S", kinds: ["number", "bgs"], values: [BGS_NUMBER] }],
  },
  {
    name: "",
    items: [{ key: "ME", value: ME_NUMBER }],
    expected: [{ key: "ME", kinds: ["number", "me"], values: [ME_NUMBER] }],
  },
  {
    name: "",
    items: [{ key: "SE", value: SE_NUMBER }],
    expected: [{ key: "SE", kinds: ["number", "se"], values: [SE_NUMBER] }],
  },
];

describe("fff", () => {
  testCases.forEach(runTestCases);
});
