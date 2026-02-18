import { describe, test, expect } from "vitest";
import type {
  Command_ScrollTextBody,
  Command_ScrollTextHeader,
  EventCommand,
} from "@RpgTypes/rmmz";
import { SHOW_SCROLLING_TEXT_BODY } from "@RpgTypes/rmmz";
import {
  makeCommandScrollingTextHeader,
  makeCommandScrollingTextBody,
} from "@RpgTypes/rmmz/eventCommand/commands/message/scrollText/scrollText";
import { SimpleEventCommandGroup, type EventCommandGroupBase } from "./core";
import { createScrollTextGroup, extractScrollTextGroup } from "./scrollText";

const mockCommands: EventCommand[] = [
  makeCommandScrollingTextHeader({
    speed: 2,
  }),
  makeCommandScrollingTextBody("Line 1"),
  makeCommandScrollingTextBody("Line 2"),
  makeCommandScrollingTextBody("Line 3"),
];

describe("extractScrollTextGroup - Validation Tests", () => {
  const expected: EventCommandGroupBase<
    Command_ScrollTextHeader,
    Command_ScrollTextBody
  > = {
    header: makeCommandScrollingTextHeader({
      speed: 2,
    }),
    bodies: [
      makeCommandScrollingTextBody("Line 1"),
      makeCommandScrollingTextBody("Line 2"),
      makeCommandScrollingTextBody("Line 3"),
    ] satisfies Command_ScrollTextBody[],
  };

  test("should extract a valid scrolling text group", () => {
    expect(extractScrollTextGroup(mockCommands, 0)).toEqual(expected);
  });

  test("should extract the correct header", () => {
    const result = extractScrollTextGroup(mockCommands, 0);
    expect(result.header).toEqual(expected.header);
  });

  test("should extract the correct bodies", () => {
    const result = extractScrollTextGroup(mockCommands, 0);
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createScrollTextGroup - SimpleEventCommandGroup Creation", () => {
  const result = createScrollTextGroup(mockCommands, 0);
  const expectedBodyText = "Line 1\nLine 2\nLine 3" as const;

  describe("SimpleEventCommandGroup instance validation", () => {
    test("should create an instance of SimpleEventCommandGroup", () => {
      expect(result).toBeInstanceOf(SimpleEventCommandGroup);
    });

    test("should return correct body text", () => {
      expect(result.getBodyText()).toBe(expectedBodyText);
    });

    test("should return correct merged body", () => {
      const mergedBody: Command_ScrollTextBody = result.mergedBody();
      const expected: Command_ScrollTextBody = {
        code: SHOW_SCROLLING_TEXT_BODY,
        indent: 0,
        parameters: [expectedBodyText],
      };
      expect(mergedBody).toEqual(expected);
    });

    test("should return normalized commands", () => {
      const newCommands: EventCommand[] = result.normalizedCommands();
      const expectedCommands: EventCommand[] = [
        makeCommandScrollingTextHeader({
          speed: 2,
        }),
        {
          code: SHOW_SCROLLING_TEXT_BODY,
          indent: 0,
          parameters: [expectedBodyText],
        },
      ];
      expect(newCommands).toEqual(expectedCommands);
    });
  });
});
