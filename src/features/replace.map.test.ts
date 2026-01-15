import { describe, expect, test } from "vitest";
import type {
  Data_Map,
  EventCommand,
  NormalizedEventCommand,
} from "@RpgTypes/rmmz";
import { makeMapData, makeMapEvent } from "@RpgTypes/rmmz";
import { replaceNoteTextByMap } from "./core/replace/text";
import type { ReplaceTextHandlers } from "./replace";
import { replaceMapDataTexts } from "./replace";

const dictionary = new Map<string, string>([
  ["Hello", "Hi"],
  ["World", "Earth"],
  ["foo", "bar"],
  ["baz", "qux"],
]);

const createReplaceHandlers = (
  map: ReadonlyMap<string, string>
): ReplaceTextHandlers => ({
  pluginCommand: (c) => c,
  scriptCommand: (c) => c,
  text: (key: string) => map.get(key),
});

describe("replaceMapDataTexts", () => {
  test("replaces displayName", () => {
    const mapData = makeMapData<NormalizedEventCommand>({
      displayName: "Old Name",
      events: [],
    });
    const map = new Map([["Old Name", "New Name"]]);
    const result = replaceMapDataTexts(mapData, createReplaceHandlers(map));
    expect(result.displayName).toBe("New Name");
  });
  test("replaces note", () => {
    const mapData = makeMapData<NormalizedEventCommand>({
      displayName: "Map",
      note: "<test:foo> and <test:baz> and <test:nochange>",
      events: [],
    });
    const map = new Map([
      ["foo", "bar"],
      ["baz", "qux"],
    ]);
    const result = replaceMapDataTexts(mapData, createReplaceHandlers(map));
    const expectedNote = replaceNoteTextByMap({ note: mapData.note }, map);
    expect(result.note).toBe(expectedNote);
  });
});

interface TestCase {
  caseName: string;
  input: Data_Map<NormalizedEventCommand>;
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
    const result = replaceMapDataTexts(
      testCase.input,
      createReplaceHandlers(dictionary)
    );
    expect(result).toEqual(testCase.expected);
  });
};

describe("replaceActorText", () => {
  testCases.forEach((testCase) => runTestCase(testCase));
});
