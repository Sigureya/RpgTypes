import { TextCommandParameter, ExtractedCommonEventText, ExtractedBattleEventText } from './text';
import { ExtractedCommandItem, ExtractedTroopTextItem } from './text/eventCommand/types/extracted';
export declare const convertCommonEvents: <UUID>(filename: string, eventTexts: ReadonlyArray<ExtractedCommonEventText>, uuidGenFunc: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => ExtractedCommandItem<UUID>[];
export declare const convertBattleEvents: <UUID>(texts: ReadonlyArray<ExtractedBattleEventText>, filename: string, commandNameFn: (command: TextCommandParameter) => string, uuidGenFunc: (text: string) => UUID) => ExtractedTroopTextItem<UUID>[];
export declare const isValidCommandText: (command: TextCommandParameter) => boolean;
