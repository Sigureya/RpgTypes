import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
export type ParamArray_Comment = [comment: string];
export interface ParamObject_Comment {
  comment: string;
}

export interface Command_CommentHeader
  extends EventCommandLike2<108, ParamArray_Comment> {
  parameters: [string];
}

export interface Command_CommentBody
  extends EventCommandLike2<408, ParamArray_Comment> {
  parameters: [string];
}
