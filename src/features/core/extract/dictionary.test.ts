import { describe, expect, test, vi } from "vitest";
import { FILENAME_AUX_DICTIONARY } from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import { createRuntimeDictionaryData } from "./createDictionary";
import {
  findActorText,
  buildRuntimeDictionary,
  fileEntriesFromDictionary,
} from "./dictionary/dic";
import type {
  RuntimeDictionaryData,
  RuntimeDictionary,
} from "./dictionary/types";
import type { SummarizedNote, SummarizedNoteValue } from "./note";

const noteValue = (value: string, id: number): SummarizedNoteValue => ({
  value,
  id,
  soruce: "test-source",
  name: "test-name",
});

const generateDictionaryData = (
  notes: readonly SummarizedNote<SummarizedNoteValue>[],
  map: ReadonlyMap<string, string>,
  hashFn: (text: string) => unknown,
): RuntimeDictionaryData<unknown> => {
  return createRuntimeDictionaryData([], [], [], [], notes, map, hashFn);
};

describe("createRuntimeDictionaryData", () => {
  test("hashFn でキーを変換して dictionary を作る", () => {
    const dictionary = new Map<string, string>([
      ["hello", "こんにちは"],
      ["world", "世界"],
    ]);
    const hashFn = vi.fn((text: string) => `h:${text}`);

    const expected: KeyValuePairEx<string, string>[] = [
      { key: "h:hello", value: "こんにちは" },
      { key: "h:world", value: "世界" },
    ];

    const result = generateDictionaryData([], dictionary, hashFn);

    expect(result.textDictionary).toEqual(expected);
    expect(hashFn).toHaveBeenCalledTimes(2);
    expect(hashFn).toHaveBeenNthCalledWith(1, "hello");
    expect(hashFn).toHaveBeenNthCalledWith(2, "world");
  });

  test("targetNoteKeys は文字列系のみを重複なく返す", () => {
    const notes: SummarizedNote<SummarizedNoteValue>[] = [
      {
        key: "Count",
        kinds: ["number"],
        values: [noteValue("10", 1)],
      },
      {
        key: "Flag",
        kinds: ["boolean"],
        values: [noteValue("true", 2)],
      },
      {
        key: "Text",
        kinds: [],
        values: [noteValue("Hello", 3)],
      },
      {
        key: "Description",
        kinds: [],
        values: [noteValue("A test description.", 4)],
      },
      {
        key: "Text",
        kinds: [],
        values: [noteValue("World", 5)],
      },
    ];

    const result = generateDictionaryData(notes, new Map(), (s) => s);

    expect(result.targetNoteKeys).toEqual(["Text", "Description"]);
  });

  test("空入力でも安全に空配列を返す", () => {
    const hashFn = vi.fn((text: string) => text.length);

    const result = generateDictionaryData([], new Map(), hashFn);

    expect(result.textDictionary).toEqual([]);
    expect(result.targetNoteKeys).toEqual([]);
    expect(hashFn).not.toHaveBeenCalled();
  });
});

describe("findActorText", () => {
  const dic: RuntimeDictionary<number> = {
    actorTextDictionary: new Map([
      ["Hello", 1],
      ["こんにちは", 1],
    ]),
    textDictionary: new Map([[1, "Hello"]]),
    targetNoteKeys: new Set(),
  };
  test("存在するテキストはそのまま返す", () => {
    const result1 = findActorText("Hello", dic);
    expect(result1).toBe("Hello");
  });
  test("actorTextを基準に対応する文字列を返す", () => {
    const result2 = findActorText("こんにちは", dic);
    expect(result2).toBe("Hello");
  });
  test("存在しない文字にはundefinedを返す", () => {
    const result3 = findActorText("text", dic);
    expect(result3).toBeUndefined();
  });
});

describe("buildRuntimeDictionary", () => {
  test("配列形式の辞書を Set/Map へ変換する", () => {
    const input: RuntimeDictionaryData<string> = {
      targetNoteKeys: ["Target", "Target", "Description"],
      textDictionary: [{ key: "hash_A", value: "AAA" }],
      actorTexts: [{ key: "AAA", value: "hash_A" }],
    };

    const result = buildRuntimeDictionary(input);

    expect(result.targetNoteKeys).toEqual(new Set(["Target", "Description"]));
    expect(result.textDictionary.get("hash_A")).toBe("AAA");
    expect(result.actorTextDictionary.get("AAA")).toBe("hash_A");
  });
});

describe("fileEntriesFromDictionary", () => {
  test("Dictionary.json の FileEntry を1件返す", () => {
    const dic: RuntimeDictionaryData<string> = {
      targetNoteKeys: ["Target"],
      textDictionary: [{ key: "hash_AAA", value: "BBB" }],
      actorTexts: [{ key: "AAA", value: "hash_AAA" }],
    };

    const result = fileEntriesFromDictionary(dic);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      filename: FILENAME_AUX_DICTIONARY,
      data: dic,
    });
  });
});
