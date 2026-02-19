import { COMMENT_HEAD, COMMENT_BODY } from "@RpgTypes/libs/eventCommand";
import type {
  ParamArray_Comment,
  ParamObject_Comment,
  Command_CommentHeader,
  Command_CommentBody,
} from "./types";

export const makeCommentArray = (comment: string): ParamArray_Comment => {
  return [comment];
};

export const convertCommentArrayToObject = (
  paramArray: ParamArray_Comment,
): ParamObject_Comment => ({
  comment: paramArray[0],
});

export const makeCommandCommentHeader = (
  comment: string,
  indent: number = 0,
): Command_CommentHeader => ({
  code: COMMENT_HEAD,
  indent,
  parameters: makeCommentArray(comment),
});

export const makeCommandCommentBody = (
  comment: string,
  indent: number = 0,
): Command_CommentBody => ({
  code: COMMENT_BODY,
  indent,
  parameters: makeCommentArray(comment),
});

export const makeCommentCommandArray = (
  comments: ReadonlyArray<string>,
  indent: number = 0,
) => {
  return comments.map((comment, index) =>
    index === 0
      ? makeCommandCommentHeader(comment, indent)
      : makeCommandCommentBody(comment, indent),
  ) as [Command_CommentHeader, ...Command_CommentBody[]];
};
