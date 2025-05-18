import { ParamArray_Comment, ParamObject_Comment, Command_CommentHeader, Command_CommentBody } from './types';
export declare const makeCommentArray: (comment: string) => ParamArray_Comment;
export declare const convertCommentArrayToObject: (paramArray: ParamArray_Comment) => ParamObject_Comment;
export declare const makeCommandCommentHeader: (comment: string, indent?: number) => Command_CommentHeader;
export declare const makeCommandCommentBody: (comment: string, indent?: number) => Command_CommentBody;
export declare const makeCommentCommandArray: (comments: ReadonlyArray<string>, indent?: number) => [Command_CommentHeader, ...Command_CommentBody[]];
