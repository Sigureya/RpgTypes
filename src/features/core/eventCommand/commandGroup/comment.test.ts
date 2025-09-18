import { describe, test, expect } from "vitest";
import type {
  Command_CommentBody,
  Command_CommentHeader,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandCommentBody,
  makeCommandCommentHeader,
  makeCommandCommonEvent,
} from "@RpgTypes/rmmz/eventCommand";
import type { COMMENT_BODY } from "@RpgTypes/rmmz/rpg";
import {
  createCommentGroup,
  extractCommentGroup,
  CHOICE_HELP_TEXT,
  isChoiceHelp,
} from "./comment";
import type { EventCommandGroup_Comment } from "./core";
import { CombinedEventCommandGroup, SimpleEventCommandGroup } from "./core";

describe("extractCommentGroup - Validation Tests", () => {
  const commands = [
    makeCommandCommentHeader("Header text"),
    makeCommandCommentBody("Body text 1"),
    makeCommandCommentBody("Body text 2"),
    makeCommandCommonEvent({ eventId: 6 }),
  ];

  const expected = {
    header: makeCommandCommentHeader("Header text"),
    bodies: [
      makeCommandCommentBody("Body text 1"),
      makeCommandCommentBody("Body text 2"),
    ] satisfies Command_CommentBody[],
  };
  test("header", () => {
    const result = extractCommentGroup(commands, 0);
    expect(result.header).toEqual(expected.header);
  });
  test("bodies", () => {
    const result = extractCommentGroup(commands, 0);
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createCommentGroup - CombinedEventCommandGroup Creation", () => {
  describe("CombinedEventCommandGroup instance validation", () => {
    const commands = [
      makeCommandCommentHeader("aaa"),
      makeCommandCommentBody("bbb"),
      makeCommandCommentBody("ccc"),
    ];

    test("should create an instance of CombinedEventCommandGroup", () => {
      const group: EventCommandGroup_Comment = createCommentGroup(commands, 0);
      expect(group).toBeInstanceOf(CombinedEventCommandGroup);
    });

    test("should return correct body text", () => {
      const group: EventCommandGroup_Comment = createCommentGroup(commands, 0);
      expect(group.getBodyText()).toBe("aaa\nbbb\nccc");
    });
    const expectedCommand: Command_CommentHeader =
      makeCommandCommentHeader("aaa\nbbb\nccc");

    test("should return correct merged body", () => {
      const group: EventCommandGroup_Comment = createCommentGroup(commands, 0);
      const mergedBody = group.mergedBody();
      expect(mergedBody).toEqual(expectedCommand);
    });
    test("should return normalized commands", () => {
      const group: EventCommandGroup_Comment = createCommentGroup(commands, 0);
      const normalizedCommands = group.normalizedCommands();
      expect(normalizedCommands).toEqual([expectedCommand]);
    });
  });
});

describe("createCommentGroup - SimpleEventCommandGroup Creation", () => {
  const commands = [
    makeCommandCommentHeader(CHOICE_HELP_TEXT),
    makeCommandCommentBody("Help text"),
  ];

  test("SimpleEventCommandGroup instance validation", () => {
    const group: EventCommandGroup_Comment = createCommentGroup(commands, 0);
    describe("should create an instance of SimpleEventCommandGroup", () => {
      expect(group).toBeInstanceOf(SimpleEventCommandGroup);
    });

    describe("should return correct body text", () => {
      expect(group.getBodyText()).toBe("Help text");
    });

    describe("should return correct merged body", () => {
      const mergedBody = group.mergedBody();
      expect(mergedBody).toEqual({
        code: 408 satisfies typeof COMMENT_BODY,
        indent: 0,
        parameters: ["Help text"],
      } satisfies Command_CommentBody);
    });
    describe("should return normalized commands", () => {
      const normalizedCommands = group.normalizedCommands();
      const expectedCommands = [
        makeCommandCommentHeader(CHOICE_HELP_TEXT),
        makeCommandCommentBody("Help text"),
      ] satisfies [Command_CommentHeader, Command_CommentBody];
      expect(normalizedCommands).toEqual(expectedCommands);
    });
  });
});

describe("isChoiceHelp - Validation Tests", () => {
  test("should return true for a valid choice help header", () => {
    const header = makeCommandCommentHeader(CHOICE_HELP_TEXT);
    expect(header).toSatisfy(isChoiceHelp);
  });

  test("should return false for a non-choice help header", () => {
    const header = makeCommandCommentHeader("Some other text");
    expect(header).not.toSatisfy(isChoiceHelp);
  });
});
