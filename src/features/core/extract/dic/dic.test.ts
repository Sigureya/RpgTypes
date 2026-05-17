import { describe, expect, test } from "vitest";
import { FILENAME_AUX_DICTIONARY } from "@RpgTypes/fileio";
import {
  findActorText,
  buildRuntimeDictionary,
  fileEntriesFromDictionary,
} from "./dic";
import type { RuntimeDictionaryData, RuntimeDictionary } from "./types";

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
