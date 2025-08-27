import { Data_CommonEvent, Data_Troop, EventCommand } from '../../../../rmmz';
export declare const replaceTroopTexts: (troop: Data_Troop<EventCommand>, dic: ReadonlyMap<string, string>) => Data_Troop<EventCommand>;
export declare const replaceCommonEventTexts: (commonEvent: Data_CommonEvent<EventCommand>, dic: ReadonlyMap<string, string>) => Data_CommonEvent<EventCommand>;
