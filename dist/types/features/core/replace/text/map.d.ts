import { Data_Map, EventCommand } from '../../../../rmmz';
export declare const replaceMapDataTexts: (mapData: Data_Map<EventCommand>, fn: (key: string) => string | undefined) => Data_Map<EventCommand>;
