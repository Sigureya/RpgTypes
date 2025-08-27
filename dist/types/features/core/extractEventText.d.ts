import { Data_CommonEvent, Data_Troop, EventCommand } from '../../rmmz';
import { TextCommandParameter } from './extract/text/eventCommand';
export interface ExtractedCommonEventText {
    eventId: number;
    commands: TextCommandParameter[];
}
export declare const extractCommonEventTexts: (commons: ReadonlyArray<Data_CommonEvent<EventCommand>>) => ExtractedCommonEventText[];
export interface ExtractedBattleEventText {
    eventId: number;
    commands: TextCommandParameter[];
    pageIndex: number;
}
export declare const extractBattleEventTexts: (list: ReadonlyArray<Data_Troop<EventCommand>>) => ExtractedBattleEventText[][];
