import {
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
  COMMENT_HEAD,
  COMMENT_BODY,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_ShowMessageBody,
  Command_CommentBody,
  Command_CommentHeader,
  Command_ScrollTextBody,
  Command_ScriptHeader,
  Command_ScriptBody,
} from "./commands";
import { isCommandTextBody } from "./validate";

export const isCommandShowMessageBody = (
  command: unknown,
): command is Command_ShowMessageBody => {
  return isCommandTextBody(command) && command.code === SHOW_MESSAGE_BODY;
};

export const isCommandShowScrollingTextBody = (
  command: unknown,
): command is Command_ScrollTextBody => {
  return (
    isCommandTextBody(command) && command.code === SHOW_SCROLLING_TEXT_BODY
  );
};

export const isCommandCommentHeader = (
  command: unknown,
): command is Command_CommentHeader => {
  return isCommandTextBody(command) && command.code === COMMENT_HEAD;
};

export const isCommandCommentBody = (
  command: unknown,
): command is Command_CommentBody => {
  return isCommandTextBody(command) && command.code === COMMENT_BODY;
};

export const isCommandScriptHeader = (
  command: unknown,
): command is Command_ScriptHeader => {
  return isCommandTextBody(command) && command.code === SCRIPT_EVAL;
};

export const isCommandScriptBody = (
  command: unknown,
): command is Command_ScriptBody => {
  return isCommandTextBody(command) && command.code === SCRIPT_EVAL_BODY;
};
