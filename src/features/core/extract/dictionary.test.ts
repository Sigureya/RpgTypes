import { describe, expect, test, vi } from "vitest";
import { FILENAME_AUX_DICTIONARY } from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import { extractTextFromSystem, makeSystemData } from "@RpgTypes/rmmz";
import { createRuntimeDictionaryData, textKeysSN } from "./createDictionary";
import {
  findActorText,
  buildRuntimeDictionary,
  fileEntriesFromDictionary,
} from "./dictionary/dic";
import type {
  RuntimeDictionaryDataWithSystem,
  RuntimeDictionary,
} from "./dictionary/types";
import type { SummarizedNote, SummarizedNoteValue } from "./note";

const EMPTY_SYSTEM_TEXTS = extractTextFromSystem(makeSystemData({}));

const noteValue = (value: string, id: number): SummarizedNoteValue => ({
  value,
  id,
  soruce: "test-source",
  name: "test-name",
});

const generateDictionaryData = (
  map: ReadonlyMap<string, string>,
  hashFn: (text: string) => unknown,
) => {
  return createRuntimeDictionaryData([], [], [], [], map, hashFn);
};

describe("createRuntimeDictionaryData", () => {
  test("hashFn transforms keys and creates dictionary", () => {
    const dictionary = new Map<string, string>([
      ["hello", "こんにちは"],
      ["world", "世界"],
    ]);
    const hashFn = vi.fn((text: string) => `h:${text}`);

    const expected: KeyValuePairEx<string, string>[] = [
      { key: "h:hello", value: "こんにちは" },
      { key: "h:world", value: "世界" },
    ];

    const result = generateDictionaryData(dictionary, hashFn);

    expect(result.textDictionary).toEqual(expected);
    expect(hashFn).toHaveBeenCalledTimes(2);
    expect(hashFn).toHaveBeenNthCalledWith(1, "hello");
    expect(hashFn).toHaveBeenNthCalledWith(2, "world");
  });

  test("targetNoteKeys returns unique string keys", () => {
    const notes: SummarizedNote<SummarizedNoteValue>[] = [
      { key: "Count", kinds: ["number"], values: [noteValue("10", 1)] },
      { key: "Flag", kinds: ["boolean"], values: [noteValue("true", 2)] },
      { key: "Text", kinds: [], values: [noteValue("Hello", 3)] },
      {
        key: "Description",
        kinds: [],
        values: [noteValue("A test description.", 4)],
      },
      { key: "Text", kinds: [], values: [noteValue("World", 5)] },
    ];

    const result = textKeysSN(notes);
    expect(result).toEqual(["Text", "Description"]);
  });

  test("handles empty input safely", () => {
    const hashFn = vi.fn((text: string) => text.length);

    const result = generateDictionaryData(new Map(), hashFn);

    expect(result.textDictionary).toEqual([]);
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
    systemTexts: EMPTY_SYSTEM_TEXTS,
  };

  test("returns existing text as is", () => {
    const result = findActorText("Hello", dic);
    expect(result).toBe("Hello");
  });

  test("maps actorText to corresponding string", () => {
    const result = findActorText("こんにちは", dic);
    expect(result).toBe("Hello");
  });

  test("returns undefined for non-existent text", () => {
    const result = findActorText("text", dic);
    expect(result).toBeUndefined();
  });
});

describe("buildRuntimeDictionary", () => {
  test("converts array dictionary to Set/Map", () => {
    const input: RuntimeDictionaryDataWithSystem<string> = {
      targetNoteKeys: ["Target", "Target", "Description"],
      textDictionary: [{ key: "hash_A", value: "AAA" }],
      actorTexts: [{ key: "AAA", value: "hash_A" }],
      systemTexts: EMPTY_SYSTEM_TEXTS,
    };

    const result = buildRuntimeDictionary(input);

    expect(result.targetNoteKeys).toEqual(new Set(["Target", "Description"]));
    expect(result.textDictionary.get("hash_A")).toBe("AAA");
    expect(result.actorTextDictionary.get("AAA")).toBe("hash_A");
  });
});

describe("fileEntriesFromDictionary", () => {
  test("returns one FileEntry for Dictionary.json", () => {
    const dic: RuntimeDictionaryDataWithSystem<string> = {
      targetNoteKeys: ["Target"],
      textDictionary: [{ key: "hash_AAA", value: "BBB" }],
      actorTexts: [{ key: "AAA", value: "hash_AAA" }],
      systemTexts: EMPTY_SYSTEM_TEXTS,
    };

    const result = fileEntriesFromDictionary(dic);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      filename: FILENAME_AUX_DICTIONARY,
      data: dic,
    });
  });
});
