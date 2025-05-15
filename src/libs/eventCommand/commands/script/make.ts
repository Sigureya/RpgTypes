import type { Command2_CommentHeader, Command2_CommentBody } from "./types";
import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@RpgTypes/schema";

export const makeCommentScriptHeader = (
  script: string,
  indent: number = 0
): Command2_CommentHeader => {
  return {
    code: SCRIPT_EVAL,
    indent,
    parameters: [script],
  };
};

export const makeCommentScriptBody = (
  script: string,
  indent: number = 0
): Command2_CommentBody => {
  return {
    code: SCRIPT_EVAL_BODY,
    indent,
    parameters: [script],
  };
};
export const makeCommandScriptArray = (
  lines: ReadonlyArray<string>,
  indent: number = 0
) => {
  return lines.map((line, index) =>
    index === 0
      ? makeCommentScriptHeader(line, indent)
      : makeCommentScriptBody(line, indent)
  ) as [Command2_CommentHeader, ...Command2_CommentBody[]];
};
