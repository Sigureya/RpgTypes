import { Data_CommonEvent, Data_Troop } from '../../rmmz';
import { ExtractedBattleEventText, ExtractedCommonEventText } from './extract/types';
export declare const extractCommonEventTexts: (commons: ReadonlyArray<Data_CommonEvent>) => ExtractedCommonEventText[];
export declare const extractBattleEventTexts: (list: ReadonlyArray<Data_Troop>) => ExtractedBattleEventText[][];
