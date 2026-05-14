import { AssetFilesBundle, RawGameData } from '../fileio';
import { NormalizedEventCommand } from '../rmmz';
import { MapDataReplaceHandlers } from './core/replace/types';
import { EventContainerExtractor } from './extractText';
import { ReplaceRawDataContext, GameDataReplaceOutput } from './types/replace';
export declare const replaceGameDataWithAuxiliaryData: <T>(data: RawGameData, assetBundle: AssetFilesBundle, extractor: EventContainerExtractor, handlers: MapDataReplaceHandlers, hashFn: (text: string) => T) => GameDataReplaceOutput<T>;
export declare const replaceRawDataBundle: (data: RawGameData, handlers: MapDataReplaceHandlers) => RawGameData<NormalizedEventCommand>;
export declare const replaceRawDataWithContext: ({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor) => RawGameData<NormalizedEventCommand>;
export declare const replaceRawDataWithAutoNoteFilter: (data: RawGameData, assetBundle: AssetFilesBundle, extractor: EventContainerExtractor, handlers: MapDataReplaceHandlers) => RawGameData<NormalizedEventCommand>;
