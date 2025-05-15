import {
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
  COMMENT_BODY,
  COMMENT_HEAD,
  SCRIPT_EVAL_BODY,
  SCRIPT_EVAL,
} from "@RpgTypes/schema";
import type {
  Command2_ShowMessageBody,
  Command2_CommentBody,
  Command2_CommentHeader,
  Command2_ScrollTextBody,
  Command2_ScriptHeader,
  Command2_ScriptBody,
} from "./commands";
import { isCommandTextBody } from "./validate";

export const isCommandShowMessageBody = (
  command: unknown
): command is Command2_ShowMessageBody => {
  return isCommandTextBody(command) && command.code === SHOW_MESSAGE_BODY;
};

export const isCommandShowScrollingTextBody = (
  command: unknown
): command is Command2_ScrollTextBody => {
  return (
    isCommandTextBody(command) && command.code === SHOW_SCROLLING_TEXT_BODY
  );
};

export const isCommandCommentHeader = (
  command: unknown
): command is Command2_CommentHeader => {
  return isCommandTextBody(command) && command.code === COMMENT_HEAD;
};

export const isCommandCommentBody = (
  command: unknown
): command is Command2_CommentBody => {
  return isCommandTextBody(command) && command.code === COMMENT_BODY;
};

export const isCommandScriptHeader = (
  command: unknown
): command is Command2_ScriptHeader => {
  return isCommandTextBody(command) && command.code === SCRIPT_EVAL;
};

export const isCommandScriptBody = (
  command: unknown
): command is Command2_ScriptBody => {
  return isCommandTextBody(command) && command.code === SCRIPT_EVAL_BODY;
};
