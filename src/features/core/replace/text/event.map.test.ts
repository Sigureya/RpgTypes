import { describe, expect, test } from "vitest";
import type { Data_Map, EventCommand } from "@RpgTypes/rmmz";
import { makeMapData, makeMapEvent } from "@RpgTypes/rmmz";
import { replaceMapDataTexts } from "./event";
import { replaceNoteTextByMap } from "./note";

describe("replaceMapDataTexts", () => {
  test("replaces displayName", () => {
    const mapData = makeMapData<EventCommand>({
      displayName: "Old Name",
      events: [],
    });
    const map = new Map([["Old Name", "New Name"]]);
    const result = replaceMapDataTexts(mapData, (s) => map.get(s));
    expect(result.displayName).toBe("New Name");
  });
  test("replaces note", () => {
    const mapData = makeMapData<EventCommand>({
      displayName: "Map",
      note: "<test:foo> and <test:baz> and <test:nochange>",
      events: [],
    });
    const map = new Map([
      ["foo", "bar"],
      ["baz", "qux"],
    ]);
    const result = replaceMapDataTexts(mapData, (key) => map.get(key));
    const expectedNote = replaceNoteTextByMap({ note: mapData.note }, map);
    expect(result.note).toBe(expectedNote);
  });
});

const dictionary = new Map<string, string>([
  ["Hello", "Hi"],
  ["World", "Earth"],
  ["foo", "bar"],
  ["baz", "qux"],
]);

interface TestCase {
  caseName: string;
  input: Data_Map<EventCommand>;
  expected: Data_Map<EventCommand>;
}

const testCases: TestCase[] = [
  {
    caseName: "replaces displayName and note",
    input: makeMapData({
      displayName: "Hello",
      note: ["<test:foo> ", "<test:baz>", "<test:nochange>"].join("\n"),
      events: [makeMapEvent()],
    }),
    expected: makeMapData({
      displayName: "Hi",
      note: ["<test:bar>", "<test:qux>", "<test:nochange>"].join("\n"),
      events: [makeMapEvent({})],
    }),
  },
];
const runTestCase = (testCase: TestCase) => {
  test(testCase.caseName, () => {
    const result = replaceMapDataTexts(testCase.input, (key: string) =>
      dictionary.get(key)
    );
    expect(result).toEqual(testCase.expected);
  });
};

describe("replaceActorText", () => {
  testCases.forEach((testCase) => runTestCase(testCase));
});
