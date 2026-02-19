import { EventCommandLike } from '../../../../libs/eventCommand';
import { EventCommand, Command_CommentHeader, Command_CommentBody } from '../../../../rmmz';
import { EventCommandGroup_Comment } from './core';
export declare const extractCommentGroup: (list: ReadonlyArray<EventCommand>, index: number) => {
    header: Command_CommentHeader;
    bodies: Command_CommentBody[];
};
export declare const createCommentGroup: (list: ReadonlyArray<EventCommand>, index: number) => EventCommandGroup_Comment;
/**
 * @description 『MPP_ChoiceEx.js』に対応するための特殊文字列
 */
export declare const CHOICE_HELP_TEXT: "\u9078\u629E\u80A2\u30D8\u30EB\u30D7";
export interface CommandEX_ChoiceHelp extends EventCommandLike<108> {
    parameters: [typeof CHOICE_HELP_TEXT];
}
export declare const isChoiceHelp: (command: Command_CommentHeader) => command is Command_CommentHeader & CommandEX_ChoiceHelp;
