import { describe, expect, test, vi } from "vitest";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import { createRuntimeDictionaryData } from "./createDictionary";
import type { SummarizedNote, SummarizedNoteValue } from "./note";

const noteValue = (value: string, id: number): SummarizedNoteValue => ({
  value,
  id,
  soruce: "test-source",
  name: "test-name",
});

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

    const result = createRuntimeDictionaryData([], dictionary, hashFn);

    expect(result.dictionary).toEqual(expected);
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

    const result = createRuntimeDictionaryData(notes, new Map(), (s) => s);

    expect(result.targetNoteKeys).toEqual(["Text", "Description"]);
  });

  test("空入力でも安全に空配列を返す", () => {
    const hashFn = vi.fn((text: string) => text.length);

    const result = createRuntimeDictionaryData([], new Map(), hashFn);

    expect(result.dictionary).toEqual([]);
    expect(result.targetNoteKeys).toEqual([]);
    expect(hashFn).not.toHaveBeenCalled();
  });
});
