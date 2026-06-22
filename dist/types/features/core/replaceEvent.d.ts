import { Data_CommonEventUnknown, Data_TroopUnknonw, EventCommand, NormalizedEventCommand, Data_MapUnknown } from '../../rmmz';
import { RpgDataReplaceHandlers, ReplaceEventTextHandlers } from './replace';
export declare const replaceEventCommandTexts: (commandList: ReadonlyArray<EventCommand>, handlers: ReplaceEventTextHandlers) => NormalizedEventCommand[];
export declare const replaceTroopData: (troop: Data_TroopUnknonw<EventCommand>, handlers: ReplaceEventTextHandlers) => Data_TroopUnknonw<NormalizedEventCommand>;
export declare const replaceCommonEventData: (commonEvent: Data_CommonEventUnknown<EventCommand>, handlers: ReplaceEventTextHandlers) => Data_CommonEventUnknown<NormalizedEventCommand>;
export declare const replaceCommonEventTexts: (commonEvent: Data_CommonEventUnknown<EventCommand>, fn: (key: string) => string | undefined) => Data_CommonEventUnknown<NormalizedEventCommand>;
export declare const replaceMapTexts: (mapData: Data_MapUnknown<EventCommand>, fn: (key: string) => string | undefined) => Data_MapUnknown<NormalizedEventCommand>;
export declare const replaceMapData: (mapData: Data_MapUnknown<EventCommand>, handlers: RpgDataReplaceHandlers) => Data_MapUnknown<NormalizedEventCommand>;
