import { test, describe, expect, vi } from "vitest";
import { CHANGE_NAME, CHANGE_PROFILE, SHOW_MESSAGE_BODY } from "@RpgTypes/libs";
import { extractMapEventTexts } from "./map";
import type { ExtractedCommandItem, ExtractedMapEventNode } from "./sss/types";
import type { ExtractedMapEventTexts, TextCommandParameter } from "./text";

const MockFileName = "Map001" as const;

type UUID = "test-uuid";
const TEST_UUID = "test-uuid" as const satisfies UUID;

interface TestCase {
  caseName: string;
  input: ExtractedMapEventTexts;
  expected: {
    commands: ExtractedCommandItem<UUID>[];
    note: ExtractedMapEventNode<UUID>[];
  };
}

const editingName = "eee";

const runTestCase = ({ caseName, expected, input }: TestCase) => {
  describe(caseName, () => {
    const uuidGen = vi.fn(() => TEST_UUID);
    const commandNameFn = (command: TextCommandParameter) =>
      `command:${command.code}`;
    const result = extractMapEventTexts(
      input,
      { map: {}, editingName: editingName, filename: MockFileName },
      uuidGen,
      commandNameFn,
    );

    test("should generate correct UUIDs", () => {
      const numItems = result[0].length + result[1].length;
      expect(uuidGen).toHaveBeenCalledTimes(numItems);
    });

    test("should match expected commands", () => {
      expect(result[1]).toEqual(expected.commands);
    });

    test("should match expected notes", () => {
      expect(result[0]).toEqual(expected.note);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "Single Command and Note",
    input: {
      eventId: 1,
      name: "Test Event",
      pageIndex: 0,
      noteItems: [{ key: "testKey", value: "Test Note" }],
      commands: [
        {
          code: 401,
          value: "Test Command",
          speaker: "Test Speaker",
          paramIndex: 0,
        },
      ],
      note: "Test Note",
    },
    expected: {
      commands: [
        {
          baseText: "Test Command",
          speaker: "Test Speaker",
          filename: MockFileName,
          uuid: TEST_UUID,
          kind: "command:401",
          dataKey: "code:401",
          id: 1,
          otherData: [editingName, "001:Test Event", "page:1"],
        },
      ],
      note: [
        {
          baseText: "Test Note",
          filename: MockFileName,
          uuid: TEST_UUID,
          kind: "note:testKey",
          dataKey: "note",
          id: 1,
          otherData: [editingName, "001:Test Event", "testKey"],
        },
      ],
    },
  },
  {
    caseName: "text is empty",
    expected: { note: [], commands: [] },
    input: {
      eventId: 1,
      name: "Test Event",
      pageIndex: 0,
      noteItems: [],
      commands: [
        { code: CHANGE_NAME, value: "", paramIndex: 1 },
        { code: CHANGE_PROFILE, value: "", paramIndex: 1 },
        {
          code: SHOW_MESSAGE_BODY,
          value: "",
          speaker: "Test Speaker",
          paramIndex: 0,
        },
      ],
      note: "",
    },
  },
];

testCases.forEach(runTestCase);
