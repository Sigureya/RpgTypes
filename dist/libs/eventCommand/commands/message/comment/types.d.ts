import { EventCommandLike2 } from '../../../frame';
export type ParamArray_Comment = [comment: string];
export interface ParamObject_Comment {
    comment: string;
}
export interface Command_CommentHeader extends EventCommandLike2<108, ParamArray_Comment> {
    parameters: [string];
}
export interface Command2_CommentBody extends EventCommandLike2<408, ParamArray_Comment> {
    parameters: [string];
}
