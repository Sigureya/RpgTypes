import { describe, expect, test } from "vitest";
import type { KeyValuePair } from "@RpgTypes/libs";
import { normalizeDictionaryItems } from "./normalize";
import type { DictionaryNormalizationResult } from "./types";

interface TestCase {
  name: string;
  input: KeyValuePair[];
  expected: DictionaryNormalizationResult;
}

const runTestCase = (testCase: TestCase) => {
  test(testCase.name, () => {
    const result = normalizeDictionaryItems(testCase.input);
    expect(result).toEqual(testCase.expected);
  });
};

const testCases: TestCase[] = [
  {
    name: "入力が空",
    input: [],
    expected: {
      errorItems: [],
      items: [],
    },
  },
  {
    name: "入力が空文字列",
    input: [
      { key: "", value: "" },
      { key: " ", value: " " },
      { key: "K", value: "" },
      { key: "", value: "V" },
    ],
    expected: {
      errorItems: [],
      items: [],
    },
  },
  {
    name: "正常な入力",
    input: [{ key: "あああ", value: "aaa" }],
    expected: {
      errorItems: [],
      items: [{ key: "あああ", value: "aaa" }],
    },
  },
  {
    name: "valueの末尾に空白がある場合の対応",
    input: [{ key: "あああ", value: "aaa " }],
    expected: {
      errorItems: [],
      items: [{ key: "あああ", value: "aaa" }],
    },
  },
  {
    name: "keyとvalue両方の末尾に空白がある場合の対応",
    input: [{ key: "あああ ", value: "aaa " }],
    expected: {
      errorItems: [],
      items: [{ key: "あああ", value: "aaa" }],
    },
  },
  {
    name: "末尾に空白がある場合",
    input: [
      { key: "あああ ", value: "aaa" },
      { key: "いいい", value: "iii" },
    ],
    expected: {
      errorItems: [],
      items: [
        { key: "あああ", value: "aaa" },
        { key: "いいい", value: "iii" },
      ],
    },
  },
  {
    name: "末尾に空白がある場合（エラー）",
    input: [
      { key: "あああ ", value: "aaa" },
      { key: "あああ", value: "AAA" },
    ],
    expected: {
      errorItems: [{ key: "あああ ", value: "aaa" }],
      items: [{ key: "あああ", value: "AAA" }],
    },
  },
  {
    name: "keyは別だが偶然valueが一致した場合",
    input: [
      { key: "あああ ", value: "aaa" },
      { key: "アアア", value: "aaa" },
    ],
    expected: {
      errorItems: [],
      items: [
        { key: "あああ", value: "aaa" },
        { key: "アアア", value: "aaa" },
      ],
    },
  },
];

describe("normalizeDictionaryItems", () => {
  testCases.forEach(runTestCase);
});
