import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";
export type ParamArray_Script = [comment: string];
export interface ParamObject_Comment {
  comment: string;
}

export interface Command2_CommentHeader
  extends EventCommandLike2<355, ParamArray_Script> {
  parameters: [string];
}

export interface Command2_CommentBody
  extends EventCommandLike2<655, ParamArray_Script> {
  parameters: [string];
}
