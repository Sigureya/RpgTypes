import { describe, test, expect } from "vitest";
import { isCommandTextBody } from "./validate";
import { isCommandShowMessageBody } from "./validateTextBody";
import { SHOW_MESSAGE_BODY } from "@RpgTypes/schema";
import {
  makeCommandCommentBody,
  makeCommandCommentHeader,
} from "./commands/message/comment/make";
import {
  makeCommandScriptBody,
  makeCommandScriptHeader,
} from "./commands/script";
import { makeCommandShowMessageBody } from "./commands/message/showMessage/convert";

describe("isCommandTextBody", () => {
  test("message body", () => {
    const command = makeCommandShowMessageBody("aaa");
    expect(isCommandTextBody(command)).toBe(true);
    expect(isCommandShowMessageBody(command)).toBe(true);
    expect(command.code).toBe(SHOW_MESSAGE_BODY);
  });
  test("comment head", () => {
    const command = makeCommandCommentHeader("aaa");
    expect(isCommandTextBody(command)).toBe(true);
  });
  test("comment body", () => {
    const command = makeCommandCommentBody("aaa");
    expect(isCommandTextBody(command)).toBe(true);
  });
  test("script head", () => {
    const command = makeCommandScriptHeader("aaa");
    expect(isCommandTextBody(command)).toBe(true);
  });
  test("script body", () => {
    const command = makeCommandScriptBody("aaa");
    expect(isCommandTextBody(command)).toBe(true);
  });
});
