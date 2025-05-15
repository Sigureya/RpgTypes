import { ParamArray_Comment, ParamObject_Comment, Command2_CommentHeader, Command2_CommentBody } from './types';
export declare const makeCommentArray: (comment: string) => ParamArray_Comment;
export declare const convertCommentArrayToObject: (paramArray: ParamArray_Comment) => ParamObject_Comment;
export declare const makeCommandCommentHeader: (comment: string, indent?: number) => Command2_CommentHeader;
export declare const makeCommandCommentBody: (comment: string, indent?: number) => Command2_CommentBody;
export declare const makeCommentCommandArray: (comments: ReadonlyArray<string>, indent?: number) => [Command2_CommentHeader, ...Command2_CommentBody[]];
