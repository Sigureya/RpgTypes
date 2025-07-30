import { Data_CommonEvent, Data_Troop } from '../../rmmz';
import { TextCommandParameter } from './extract/text/eventCommand';
export interface ExtractedCommonEventText {
    eventId: number;
    commands: TextCommandParameter[];
}
export declare const extractCommonEventTexts: (commons: Data_CommonEvent[]) => ExtractedCommonEventText[];
export interface ExtractedBattleEventText {
    eventId: number;
    commands: TextCommandParameter[];
    pageIndex: number;
}
export declare const expectBattleEventTexts: (list: ReadonlyArray<Data_Troop>) => ExtractedBattleEventText[][];
