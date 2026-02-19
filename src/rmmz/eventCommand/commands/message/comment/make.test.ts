import { describe, test, expect } from "vitest";
import { COMMENT_HEAD, COMMENT_BODY } from "@RpgTypes/libs/eventCommand";
import {
  makeCommentArray,
  convertCommentArrayToObject,
  makeCommandCommentHeader,
  makeCommandCommentBody,
  makeCommentCommandArray,
} from "./make";
import type {
  Command_CommentBody,
  Command_CommentHeader,
  ParamArray_Comment,
} from "./types";

describe("makeCommentArray", () => {
  test("should create a ParamArray_Comment from a string", () => {
    const comment = "Test comment";
    const result: ParamArray_Comment = makeCommentArray(comment);
    expect(result).toEqual([comment]);
  });
});

describe("convertCommentArrayToObject", () => {
  test("should convert a ParamArray_Comment to a ParamObject_Comment", () => {
    const result = convertCommentArrayToObject(["Test comment"]);
    expect(result).toEqual({ comment: "Test comment" });
  });
});

describe("makeCommandCommentHeader", () => {
  test("should create a Command2_CommentHeader with the correct structure", () => {
    const comment = "Header comment";
    const indent = 2;
    const result: Command_CommentHeader = makeCommandCommentHeader(
      comment,
      indent,
    );

    expect(result).toEqual({
      code: COMMENT_HEAD,
      indent,
      parameters: [comment],
    } satisfies Command_CommentHeader);
  });
});

describe("makeCommandCommentBody", () => {
  test("should create a Command2_CommentBody with the correct structure", () => {
    const comment = "Body comment";
    const indent = 1;
    const result: Command_CommentBody = makeCommandCommentBody(comment, indent);

    expect(result).toEqual({
      code: COMMENT_BODY,
      indent,
      parameters: [comment],
    } satisfies Command_CommentBody);
  });
});

describe("makeCommentCommandArray", () => {
  test("should create a single Command2_CommentHeader when given one comment", () => {
    const comments = ["This is a single comment"];
    const result = makeCommentCommandArray(comments, 2);

    expect(result).toHaveLength(1);
    expect(result[0].code).toBe(COMMENT_HEAD);
    expect(result[0].indent).toBe(2);
    expect(result[0].parameters).toEqual(["This is a single comment"]);
  });

  test("should create a Command2_CommentHeader and Command2_CommentBody for multiple comments", () => {
    const comments = ["Header comment", "Body comment 1", "Body comment 2"];
    const result = makeCommentCommandArray(comments, 1);

    expect(result).toHaveLength(3);

    // Validate the header
    expect(result[0].code).toBe(COMMENT_HEAD);
    expect(result[0].indent).toBe(1);
    expect(result[0].parameters).toEqual(["Header comment"]);

    // Validate the first body
    expect(result[1].code).toBe(COMMENT_BODY);
    expect(result[1].indent).toBe(1);
    expect(result[1].parameters).toEqual(["Body comment 1"]);

    // Validate the second body
    expect(result[2].code).toBe(COMMENT_BODY);
    expect(result[2].indent).toBe(1);
    expect(result[2].parameters).toEqual(["Body comment 2"]);
  });

  test("should return an empty array when given no comments", () => {
    const comments: string[] = [];
    const result = makeCommentCommandArray(comments, 0);

    expect(result).toEqual([]);
  });

  test("should handle comments with varying indentation levels", () => {
    const comments = ["Indented header", "Indented body"];
    const result = makeCommentCommandArray(comments, 3);

    expect(result).toHaveLength(2);

    // Validate the header
    expect(result[0].code).toBe(COMMENT_HEAD);
    expect(result[0].indent).toBe(3);
    expect(result[0].parameters).toEqual(["Indented header"]);

    // Validate the body
    expect(result[1].code).toBe(COMMENT_BODY);
    expect(result[1].indent).toBe(3);
    expect(result[1].parameters).toEqual(["Indented body"]);
  });
});
