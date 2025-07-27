import { CommandParameter } from '../../../../../rmmz/eventCommand/pickCommandParam';
export interface TextCommandParameter extends CommandParameter<string> {
    speaker?: string;
    paramIndex: number;
    value: string;
    code: number;
}
export interface ExtractedEventText {
    eventId: number;
    pageIndex: number;
    commands: TextCommandParameter[];
}
