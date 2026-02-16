import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_PluginCommandMZ,
  Data_Map,
  EventCommand,
  MapEvent,
  NormalizedEventCommand,
  NoteReadResult,
  NoteReplaceHandlers,
} from "@RpgTypes/rmmz";
import {
  makeCommandSetupChoice,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeMapData,
  makeMapEvent,
  makeMapEventPage,
} from "@RpgTypes/rmmz";
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
  xxx: boolean = true,
): MockedObject<ReplaceEventTextHandlers & NoteReplaceHandlers> => ({
  pluginCommand: vi.fn((c: Command_PluginCommandMZ) => c),
  scriptCommand: vi.fn((c) => c),
  replaceText: vi.fn((text: string) => map.get(text)),
  isReplaceTargetNote: vi.fn().mockReturnValue(xxx),
});

const makeMapEventsFromCommands = (
  commands: EventCommand[],
): (null | MapEvent<EventCommand>)[] => {
  const page = makeMapEventPage({ list: commands });
  return [null, makeMapEvent({ pages: [page] })];
};

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
  describe("replaces note", () => {
    const mapData = makeMapData<NormalizedEventCommand>({
      displayName: "Map",
      note: "<test:foo> and <test:baz> and <test:nochange>",
      events: [],
    });
    test("replaces note using replaceText when isReplaceTargetNote returns true", () => {
      const map = new Map([
        ["foo", "bar"],
        ["baz", "qux"],
      ]);
      const handlers = createReplaceHandlers(map, true);
      const result = replaceMapData(mapData, handlers);
      const expectedNote = replaceNoteTextByMap({ note: mapData.note }, map);
      expect(result.note).toBe(expectedNote);
    });
    test("calls isReplaceTargetNote and replaceText for each note item", () => {
      const map = new Map([
        ["foo", "bar"],
        ["baz", "qux"],
      ]);
      const handlers = createReplaceHandlers(map, true);
      replaceMapData(mapData, handlers);
      replaceNoteTextByMap({ note: mapData.note }, map);
      expect(handlers.pluginCommand).not.toHaveBeenCalled();
      expect(handlers.scriptCommand).not.toHaveBeenCalled();
      expect(handlers.isReplaceTargetNote).toHaveBeenCalledTimes(3);
      expect(handlers.replaceText).toHaveBeenCalledTimes(4);
      expect(handlers.replaceText).toHaveBeenCalledWith(mapData.displayName);
      expect(handlers.replaceText).toHaveBeenCalledWith("foo");
      expect(handlers.replaceText).toHaveBeenCalledWith("baz");
      expect(handlers.replaceText).toHaveBeenCalledWith("nochange");
    });
    test("does not replace note when isReplaceTargetNote returns false", () => {
      const map = new Map([
        ["foo", "bar"],
        ["baz", "qux"],
      ]);
      const handlers = createReplaceHandlers(map, false);
      const result = replaceMapData(mapData, handlers);
      expect(result.note).includes("<test:foo>");
      expect(result.note).includes("<test:baz>");
      expect(result.note).includes("<test:nochange>");
    });
  });
});
interface TestCase {
  caseName: string;
  input: Data_Map<EventCommand>;
  expected: Data_Map<EventCommand>;
  noteItems: NoteReadResult[];
  expectedReplaceTextArgs: string[];
}

const testCases: TestCase[] = [
  {
    caseName: "does not replace when there are no matching keys",
    input: makeMapData({ displayName: "" }),
    expected: makeMapData({ displayName: "" }),
    noteItems: [],
    expectedReplaceTextArgs: [""],
  },
  {
    caseName: "does not replace when there are only whitespace",
    input: makeMapData({ displayName: "  " }),
    expected: makeMapData({ displayName: "" }),
    noteItems: [],
    expectedReplaceTextArgs: ["  "],
  },
  // {
  //   caseName: "replaces displayName and note",
  //   input: makeMapData({
  //     displayName: "Hello",
  //     note: ["<test:foo> ", "<test:baz>", "<test:nochange>"].join("\n"),
  //   }),
  //   expected: makeMapData({
  //     displayName: "Hi",
  //     note: ["<test:bar>", "<test:qux>", "<test:nochange>"].join("\n"),
  //   }),
  //   noteItems: [
  //     { key: "test", value: "foo" },
  //     { key: "test", value: "baz" },
  //     { key: "test", value: "nochange" },
  //   ],
  //   expectedReplaceTextArgs: ["Hello"],
  // },
  {
    caseName: "does not replace when there are no matching keys",
    input: makeMapData({
      displayName: "MapName",
      events: [
        makeMapEvent({ note: "<Mock:foo>", name: "foo" }),
        makeMapEvent({ note: "<Mock:bar>", name: "Event2" }),
        makeMapEvent({ note: "<Mock:baz>", name: "Event3" }),
      ],
    }),
    expected: makeMapData({
      displayName: "MapName",
      events: [
        makeMapEvent({ note: "<Mock:bar>", name: "foo" }),
        makeMapEvent({ note: "<Mock:bar>", name: "Event2" }),
        makeMapEvent({ note: "<Mock:qux>", name: "Event3" }),
      ],
    }),
    noteItems: [
      { key: "Mock", value: "foo" },
      { key: "Mock", value: "bar" },
      { key: "Mock", value: "baz" },
    ],
    expectedReplaceTextArgs: ["MapName"],
  },
  {
    caseName: "replaces event command texts",
    noteItems: [],
    expectedReplaceTextArgs: [
      "MapName",
      "Hello",
      "speaker",
      "yes",
      "no",
      "foo",
    ],
    input: makeMapData({
      displayName: "MapName",
      events: makeMapEventsFromCommands([
        makeCommandShowMessage({
          facename: "face",
          speakerName: "speaker",
        }),
        makeCommandShowMessageBody("Hello"),
        makeCommandSetupChoice({ choices: ["yes", "no", "foo"] }),
      ]),
    }),
    expected: makeMapData({
      displayName: "MapName",
      events: makeMapEventsFromCommands([
        makeCommandShowMessage({
          facename: "face",
          speakerName: "speaker",
        }),
        makeCommandShowMessageBody("Hi"),
        makeCommandSetupChoice({ choices: ["yes", "no", "bar"] }),
      ]),
    }),
  },
];

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test(testCase.caseName, () => {
      const result = replaceMapData(
        testCase.input,
        createReplaceHandlers(dictionary),
      );
      expect(result).toEqual(testCase.expected);
    });
    test("calls isReplaceTargetNote for each note item", () => {
      const handlers = createReplaceHandlers(dictionary, true);
      replaceMapData(testCase.input, handlers);
      expect(handlers.replaceText).toHaveBeenCalledTimes(
        testCase.expectedReplaceTextArgs.length + testCase.noteItems.length,
      );
      expect(handlers.isReplaceTargetNote).toHaveBeenCalledTimes(
        testCase.noteItems.length,
      );
      testCase.noteItems.forEach((item: NoteReadResult) => {
        expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(item);
        expect(handlers.replaceText).toHaveBeenCalledWith(item.value);
      });
    });
    test("does not replace note when isReplaceTargetNote returns false", () => {
      const handlers = createReplaceHandlers(dictionary, false);
      replaceMapData(testCase.input, handlers);
      expect(handlers.replaceText).toHaveBeenCalledTimes(
        testCase.expectedReplaceTextArgs.length,
      );
      expect(handlers.isReplaceTargetNote).toHaveBeenCalledTimes(
        testCase.noteItems.length,
      );
      testCase.noteItems.forEach((item: NoteReadResult) => {
        expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(item);
      });
    });
  });
};

describe("replaceActorText", () => {
  testCases.forEach((testCase) => runTestCase(testCase));
});
