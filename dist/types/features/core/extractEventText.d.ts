import { Data_CommonEvent, Data_Troop, EventCommand } from '../../rmmz';
import { ExtractedBattleEventText, ExtractedCommonEventText } from './extract/types';
export declare const extractCommonEventTexts: (commons: ReadonlyArray<Data_CommonEvent<EventCommand>>) => ExtractedCommonEventText[];
export declare const extractBattleEventTexts: (list: ReadonlyArray<Data_Troop<EventCommand>>) => ExtractedBattleEventText[][];
