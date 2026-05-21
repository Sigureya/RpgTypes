import { describe, expect, test, vi } from "vitest";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import { createRuntimeDictionaryData } from "./createDictionary";

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

    const result = createRuntimeDictionaryData(
      [],
      [],
      [],
      [],
      dictionary,
      hashFn,
    );

    expect(result.textDictionary).toEqual(expected);
    expect(hashFn).toHaveBeenCalledTimes(2);
    expect(hashFn).toHaveBeenNthCalledWith(1, "hello");
    expect(hashFn).toHaveBeenNthCalledWith(2, "world");
  });

  test("空入力でも安全に空配列を返す", () => {
    const hashFn = vi.fn((text: string) => text.length);

    const result = createRuntimeDictionaryData([], [], [], [], new Map(), hashFn);

    expect(result.textDictionary).toEqual([]);
    expect(hashFn).not.toHaveBeenCalled();
  });
});
