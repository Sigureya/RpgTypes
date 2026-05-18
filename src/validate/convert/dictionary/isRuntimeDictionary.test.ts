import { test, expect } from "vitest";
import type { RuntimeDictionaryData } from "@RpgTypes/features";
const validate = require("./dictionaryValidate.cjs");

const isRuntimeDictionaryData = (
  data: unknown,
): data is RuntimeDictionaryData<string> => {
  return validate(data);
};

test("validate RuntimeDictionaryData", () => {
  const data: RuntimeDictionaryData<string> = {
    targetNoteKeys: ["key1", "key2"],
    textDictionary: [
      { key: "hello", value: "こんにちは" },
      { key: "world", value: "世界" },
    ],
    actorTexts: [{ key: "actor1", value: "hero_hash" }],
  };
  expect(data).toSatisfy(isRuntimeDictionaryData);
});

test("reject invalid data (missing required field)", () => {
  const data: Omit<RuntimeDictionaryData<string>, "actorTexts"> = {
    targetNoteKeys: ["key1"],
    textDictionary: [],
    // actorTexts is missing
  };
  expect(data).not.toSatisfy(isRuntimeDictionaryData);
});

test("reject invalid data (wrong type)", () => {
  const data: Record<keyof RuntimeDictionaryData<string>, unknown> = {
    targetNoteKeys: [123],
    textDictionary: [],
    actorTexts: [],
  };
  expect(data).not.toSatisfy(isRuntimeDictionaryData);
});
