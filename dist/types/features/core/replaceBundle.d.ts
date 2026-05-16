import { AssetFilesBundle, RawGameData } from '../../fileio';
import { NormalizedEventCommand } from '../../rmmz';
import { EventContainerExtractor, RawGameDataNoteNormalization } from './extract';
import { MapDataReplaceHandlers } from './replace/types';
export declare const replaceRawDataBundle: (data: RawGameData, handlers: MapDataReplaceHandlers) => RawGameData<NormalizedEventCommand>;
export declare const replaceRawDataWithAutoNoteFilter: (data: RawGameData, assetBundle: AssetFilesBundle, extractor: EventContainerExtractor, handlers: MapDataReplaceHandlers) => {
    data: RawGameData<NormalizedEventCommand>;
    note: RawGameDataNoteNormalization;
};
