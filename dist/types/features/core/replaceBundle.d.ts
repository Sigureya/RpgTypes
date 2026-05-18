import { AssetFilesBundle, RawGameData } from '../../fileio';
import { NormalizedEventCommand } from '../../rmmz';
import { EventContainerExtractor, RawGameDataNoteNormalization } from './extract';
import { RpgDataReplaceHandlers } from './replace/types';
export declare const replaceRawDataBundle: (data: RawGameData, handlers: RpgDataReplaceHandlers) => RawGameData<NormalizedEventCommand>;
export declare const replaceRawDataWithAutoNoteFilter: (data: RawGameData, assetBundle: AssetFilesBundle, extractor: EventContainerExtractor, handlers: RpgDataReplaceHandlers) => {
    data: RawGameData<NormalizedEventCommand>;
    note: RawGameDataNoteNormalization;
};
