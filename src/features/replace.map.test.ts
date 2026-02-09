import { describe, expect, test } from "vitest";
import type {
  Data_Map,
  EventCommand,
  NormalizedEventCommand,
  NoteReplaceHandlers,
} from "@RpgTypes/rmmz";
import { makeMapData, makeMapEvent } from "@RpgTypes/rmmz";
import { replaceNoteTextByMap } from "./core/replace/text";
import type { ReplaceEventTextHandlers } from "./replace";
import { replaceMapData } from "./replace";

const dictionary = new Map<string, string>([
  ["Hello", "Hi"],
  ["World", "Earth"],
  ["foo", "bar"],
  ["baz", "qux"],
]);

const createReplaceHandlers = (
  map: ReadonlyMap<string, string>,
): ReplaceEventTextHandlers & NoteReplaceHandlers => ({
  pluginCommand: (c) => c,
  scriptCommand: (c) => c,
  replaceText: (text: string) => map.get(text),
  isReplaceTargetNote: () => true,
});

describe("replaceMapDataTexts", () => {
  test("replaces displayName", () => {
    const mapData = makeMapData<NormalizedEventCommand>({
      displayName: "Old Name",
      events: [],
    });
    const map = new Map([["Old Name", "New Name"]]);
    const result = replaceMapData(mapData, createReplaceHandlers(map));
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
    const result = replaceMapData(mapData, createReplaceHandlers(map));
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
    const result = replaceMapData(
      testCase.input,
      createReplaceHandlers(dictionary),
    );
    expect(result).toEqual(testCase.expected);
  });
};

describe("replaceActorText", () => {
  testCases.forEach((testCase) => runTestCase(testCase));
});
