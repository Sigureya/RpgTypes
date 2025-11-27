import { CHANGE_NAME, CHANGE_NICKNAME, CHANGE_PROFILE, COMMENT_HEAD, SCRIPT_EVAL, SHOW_CHOICES, SHOW_MESSAGE_BODY, SHOW_SCROLLING_TEXT_BODY } from '../../../../../../rmmz';
import { CommandParameter } from '../../../../../../rmmz/eventCommand/pickCommandParam';
import { PluginCommandMzParameter } from './pluginCommand';
import { TextCommandParameter } from './union';
type BaseCode = typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME | typeof SHOW_SCROLLING_TEXT_BODY | typeof SHOW_CHOICES | typeof SCRIPT_EVAL | typeof COMMENT_HEAD;
export interface GenericCommandParameter extends CommandParameter<string, BaseCode> {
    paramIndex: number;
    value: string;
    code: BaseCode;
    speaker?: string;
}
export interface MessageCommandParameter extends CommandParameter<string, typeof SHOW_MESSAGE_BODY> {
    speaker: string;
    paramIndex: number;
    value: string;
    code: typeof SHOW_MESSAGE_BODY;
}
export interface ExtractedEventText<P extends PluginCommandMzParameter = PluginCommandMzParameter> {
    eventId: number;
    pageIndex: number;
    commands: (TextCommandParameter | P)[];
}
export {};
