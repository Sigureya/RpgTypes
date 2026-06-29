import { AssetFilesBundle, RawGameData2 } from '../../fileio';
import { EventCommand, NormalizedEventCommand } from '../../rmmz';
import { EventContainerExtractor, RawGameDataNoteNormalization } from './extract';
import { RpgDataReplaceHandlers } from './replace/types';
export declare const replaceRawDataBundle: (data: RawGameData2<EventCommand>, handlers: RpgDataReplaceHandlers) => RawGameData2<NormalizedEventCommand>;
export declare const replaceRawDataWithAutoNoteFilter: (data: RawGameData2<EventCommand>, assetBundle: AssetFilesBundle, extractor: EventContainerExtractor, handlers: RpgDataReplaceHandlers) => {
    data: RawGameData2<NormalizedEventCommand>;
    note: RawGameDataNoteNormalization;
};
