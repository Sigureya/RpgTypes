import { ExtractedCommandItem, ExtractedTroopTextItem } from './sss/types';
import { TextCommandParameter, ExtractedCommonEventText, ExtractedBattleEventText } from './text';
export declare const ccedFromList: <UUID>(filename: string, cc: ReadonlyArray<ExtractedCommonEventText>, uuidGenFunc: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => ExtractedCommandItem<UUID>[];
export declare const ctx: <UUID>(texts: ExtractedBattleEventText[], filename: string, commandNameFn: (command: TextCommandParameter) => string, uuidGenFunc: (text: string) => UUID) => ExtractedTroopTextItem<UUID>[];
export declare const isValidCommandText: (command: TextCommandParameter) => boolean;
