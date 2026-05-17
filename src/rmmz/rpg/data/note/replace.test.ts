import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import { buildNoteFromNormalized } from "./normarize";
import { replaceNoteWithHandlers } from "./replace";
import type { NormalizedNote, NoteReplaceHandlers } from "./types";

interface TestCase {
  name: string;
  expected: string;
  replaceTargets: string[];
  note: NormalizedNote;
}

const createEmptyHandlers = (): MockedObject<NoteReplaceHandlers> => ({
  isReplaceTargetNote: vi.fn().mockReturnValue(false),
  replaceText: vi.fn(),
});

const replaceText = (text: string) => {
  return `new-${text}`;
};

const runTestCase = (testCase: TestCase) => {
  const input = buildNoteFromNormalized(testCase.note);
  describe(testCase.name, () => {
    test("a", () => {
      const result: string = replaceNoteWithHandlers(input, {
        isReplaceTargetNote: () => false,
        replaceText: () => undefined,
      });
      expect(result).toBe(input);
    });
    test("b", () => {
      const handlers = createEmptyHandlers();
      replaceNoteWithHandlers(input, handlers);
      expect(handlers.replaceText).not.toBeCalled();
      expect(handlers.isReplaceTargetNote).toBeCalledTimes(
        testCase.note.items.length,
      );
      testCase.note.items.forEach((item, index) => {
        expect(handlers.isReplaceTargetNote.mock.calls[index]).toEqual([item]);
      });
    });
    test("c", () => {
      const handlers: MockedObject<NoteReplaceHandlers> = {
        isReplaceTargetNote: vi.fn((item): boolean =>
          testCase.replaceTargets.includes(item.key),
        ),
        replaceText: vi.fn(replaceText),
      };
      const result: string = replaceNoteWithHandlers(input, handlers);
      expect(result).toBe(testCase.expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "No replacement when isReplaceTargetNote returns false",
    expected: "<K:new-value>",
    replaceTargets: ["K"],
    note: {
      note: "",
      items: [{ key: "K", value: "value" }],
    },
  },
];

testCases.forEach(runTestCase);

describe("replaceV2", () => {
  test("XML likeノートを破壊しない", () => {
    const handlers = createEmptyHandlers();
    const note = ["<Data:123></Data>", "<Text:abc>"].join("\n");
    const result = replaceNoteWithHandlers(note, handlers);
    expect(result).toBe(note);
    expect(handlers.replaceText).not.toBeCalled();
  });
  test("XML likeノートを破壊しない2", () => {
    const handlers = createEmptyHandlers();
    const note = [
      "",
      "<Data:123></Data>",
      "<Data:456></Data>",
      "<Text:abc>",
    ].join("\n");
    const result = replaceNoteWithHandlers(note, handlers);
    expect(result).toBe(note);
    expect(handlers.replaceText).not.toBeCalled();
  });
});
