import type {
  COMMENT_BODY,
  COMMENT_HEAD,
  EventCommandLike,
} from "@RpgTypes/libs/eventCommand";

export type ParamArray_Comment = [comment: string];
export interface ParamObject_Comment {
  comment: string;
}

export interface Command_CommentHeader extends EventCommandLike<
  typeof COMMENT_HEAD,
  ParamArray_Comment
> {
  parameters: [string];
}

export interface Command_CommentBody extends EventCommandLike<
  typeof COMMENT_BODY,
  ParamArray_Comment
> {
  parameters: [string];
}
