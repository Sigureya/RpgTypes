import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_PROFILE, COMMENT_HEAD, SCRIPT_EVAL, SHOW_CHOICES, SHOW_MESSAGE_BODY, SHOW_SCROLLING_TEXT_BODY } from '../../../../../rmmz';
import { CommandParameter } from '../../../../../rmmz/eventCommand/pickCommandParam';
type Code = typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME | typeof SHOW_SCROLLING_TEXT_BODY | typeof SHOW_CHOICES | typeof SCRIPT_EVAL | typeof SHOW_MESSAGE_BODY | typeof COMMENT_HEAD;
export interface TextCommandParameter extends CommandParameter<string, Code> {
    speaker?: string;
    paramIndex: number;
    value: string;
    code: Code;
}
export interface ExtractedEventText {
    eventId: number;
    pageIndex: number;
    commands: TextCommandParameter[];
}
export {};
