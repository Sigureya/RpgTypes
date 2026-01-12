import { Data_CommonEvent, Data_Troop } from '../../../../rmmz';
export declare const replaceTroopTexts: (troop: Data_Troop, fn: (key: string) => string | undefined) => Data_Troop;
export declare const replaceCommonEventTexts: (commonEvent: Data_CommonEvent, fn: (key: string) => string | undefined) => Data_CommonEvent;
