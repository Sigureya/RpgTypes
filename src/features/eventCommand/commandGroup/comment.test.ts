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
  test.skip("aa", () => {
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
    const result = extractCommentGroup(commands, 0);
    describe("bb", () => {
      expect(result.header).toEqual(expected.header);
    });
    describe("cc", () => {
      expect(result.bodies).toEqual(expected.bodies);
    });
  });
});

describe.skip("createCommentGroup - CombinedEventCommandGroup Creation", () => {
  test("CombinedEventCommandGroup instance validation", () => {
    const commands = [
      makeCommandCommentHeader("aaa"),
      makeCommandCommentBody("bbb"),
      makeCommandCommentBody("ccc"),
    ];
    const group: EventCommandGroup_Comment = createCommentGroup(commands, 0);

    describe(() => {
      describe("should create an instance of CombinedEventCommandGroup", () => {
        expect(group).toBeInstanceOf(CombinedEventCommandGroup);
      });

      describe("should return correct body text", () => {
        expect(group.getBodyText()).toBe("aaa\nbbb\nccc");
      });
      const expectedCommand: Command_CommentHeader =
        makeCommandCommentHeader("aaa\nbbb\nccc");

      describe("should return correct merged body", () => {
        const mergedBody = group.mergedBody();
        expect(mergedBody).toEqual(expectedCommand);
      });
      describe("", () => {
        const normalizedCommands = group.normalizedCommands();
        expect(normalizedCommands).toEqual([expectedCommand]);
      });
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
