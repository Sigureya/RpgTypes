import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_PluginCommandMZ,
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
): MockedObject<ReplaceEventTextHandlers & NoteReplaceHandlers> => ({
  pluginCommand: vi.fn((c: Command_PluginCommandMZ) => c),
  scriptCommand: vi.fn((c) => c),
  replaceText: vi.fn((text: string) => map.get(text)),
  isReplaceTargetNote: vi.fn().mockReturnValue(true),
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
    const handlers = createReplaceHandlers(map);
    const result = replaceMapData(mapData, handlers);
    const expectedNote = replaceNoteTextByMap({ note: mapData.note }, map);
    expect(result.note).toBe(expectedNote);
    expect(handlers.pluginCommand).not.toHaveBeenCalled();
    expect(handlers.scriptCommand).not.toHaveBeenCalled();
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledTimes(3);
    expect(handlers.replaceText).toHaveBeenCalledTimes(3);
    expect(handlers.replaceText).toHaveBeenNthCalledWith(1, "bar");
    expect(handlers.replaceText).toHaveBeenNthCalledWith(2, "qux");
    expect(handlers.replaceText).toHaveBeenNthCalledWith(3, "nochange");
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
