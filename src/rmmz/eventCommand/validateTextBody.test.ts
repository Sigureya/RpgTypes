import { describe, test, expect } from "vitest";
import {
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
  COMMENT_BODY,
  COMMENT_HEAD,
  SCRIPT_EVAL_BODY,
  SCRIPT_EVAL,
} from "@RpgTypes/libs/eventCommand";
import {
  makeCommandShowMessageBody,
  makeCommandCommentHeader,
  makeCommandCommentBody,
  makeCommandScriptHeader,
  makeCommandScriptBody,
} from "./commands";
import { makeCommandScrollingTextBody } from "./commands/message/scrollText/scrollText";
import { isCommandTextBody } from "./validate";
import {
  isCommandShowMessageBody,
  isCommandShowScrollingTextBody,
  isCommandCommentBody,
  isCommandCommentHeader,
  isCommandScriptBody,
  isCommandScriptHeader,
} from "./validateTextBody";

const testInvalidPattern = (fn: (data: unknown) => boolean) => {
  test("Invalid command", () => {
    expect(fn(null)).toBe(false);
    expect(fn(undefined)).toBe(false);
    expect(fn({})).toBe(false);
    expect(fn({ code: "INVALID_CODE" })).toBe(false);
  });
};

describe("isCommandTextBody", () => {
  describe("message body", () => {
    const command = makeCommandShowMessageBody("aaa");
    test("", () => {
      expect(isCommandTextBody(command)).toBe(true);
      expect(isCommandShowMessageBody(command)).toBe(true);
      expect(command.code).toBe(SHOW_MESSAGE_BODY);
    });
    testInvalidPattern(isCommandShowMessageBody);
  });
  describe("scrolling text body", () => {
    const command = makeCommandScrollingTextBody("aaa");
    test("", () => {
      expect(isCommandTextBody(command)).toBe(true);
      expect(isCommandShowScrollingTextBody(command)).toBe(true);
      expect(command.code).toBe(SHOW_SCROLLING_TEXT_BODY);
    });
    testInvalidPattern(isCommandShowScrollingTextBody);
  });
  describe("comment body", () => {
    const command = makeCommandCommentBody("aaa");
    test("", () => {
      expect(isCommandTextBody(command)).toBe(true);
      expect(isCommandCommentBody(command)).toBe(true);
      expect(command.code).toBe(COMMENT_BODY);
    });
  });
  describe("comment header", () => {
    const command = makeCommandCommentHeader("aaa");
    test("", () => {
      expect(isCommandTextBody(command)).toBe(true);
      expect(isCommandCommentHeader(command)).toBe(true);
      expect(command.code).toBe(COMMENT_HEAD);
    });
  });
  describe("script body", () => {
    const command = makeCommandScriptBody("aaa");
    test("", () => {
      expect(isCommandTextBody(command)).toBe(true);
      expect(isCommandScriptBody(command)).toBe(true);
      expect(command.code).toBe(SCRIPT_EVAL_BODY);
    });
  });
  describe("script header", () => {
    const command = makeCommandScriptHeader("aaa");
    test("", () => {
      expect(isCommandTextBody(command)).toBe(true);
      expect(isCommandScriptHeader(command)).toBe(true);
      expect(command.code).toBe(SCRIPT_EVAL);
    });
  });
});
