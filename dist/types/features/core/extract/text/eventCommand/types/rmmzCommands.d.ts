import { SHOW_MESSAGE_BODY } from '../../../../../../libs/eventCommand';
import { TextCommandCodeUnion } from '../../../../../../libs/eventCommand/codeUnion';
import { CommandParameter } from '../../../../../../rmmz';
import { TextPluginCommandParameter } from './pluginCommand';
import { TextCommandParameter } from './union';
export interface GenericCommandParameter extends CommandParameter<string, TextCommandCodeUnion> {
    paramIndex: number;
    value: string;
    code: TextCommandCodeUnion;
    speaker?: string;
}
export interface MessageCommandParameter extends CommandParameter<string, typeof SHOW_MESSAGE_BODY> {
    speaker: string;
    paramIndex: number;
    value: string;
    code: typeof SHOW_MESSAGE_BODY;
}
export interface ExtractedEventText<P extends TextPluginCommandParameter = TextPluginCommandParameter> {
    eventId: number;
    pageIndex: number;
    commands: (TextCommandParameter | P)[];
}
