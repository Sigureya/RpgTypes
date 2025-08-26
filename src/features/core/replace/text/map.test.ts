import { describe, expect, test } from "vitest";
import type { Data_Map, EventCommand2 } from "@RpgTypes/rmmz";
import { makeMapData, makeMapEvent } from "@RpgTypes/rmmz";
import { replaceMapDataTexts } from "./map";
import { replaceNoteTextByMap } from "./utils";

describe("replaceMapDataTexts", () => {
  test("replaces displayName", () => {
    const mapData = makeMapData<EventCommand2>({
      displayName: "Old Name",
      events: [],
    });
    const map = new Map([["Old Name", "New Name"]]);
    const result = replaceMapDataTexts(mapData, map);
    expect(result.displayName).toBe("New Name");
  });
  test("replaces note", () => {
    const mapData = makeMapData<EventCommand2>({
      displayName: "Map",
      note: "<test:foo> and <test:baz> and <test:nochange>",
      events: [],
    });
    const map = new Map([
      ["foo", "bar"],
      ["baz", "qux"],
    ]);
    const result = replaceMapDataTexts(mapData, map);
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
  input: Data_Map<EventCommand2>;
  expected: Data_Map<EventCommand2>;
}

const testCases: TestCase[] = [
  {
    caseName: "",
    input: makeMapData({
      displayName: "Hello",
      note: "<test:foo> and <test:baz> and <test:nochange>",
      events: [makeMapEvent()],
    }),
    expected: makeMapData({
      displayName: "Hi",
      note: "<test:bar>\n<test:qux>\n<test:nochange>\n and  and",
      events: [],
    }),
  },
];
