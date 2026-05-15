import { FileEntry, RawGameData } from '../fileio';
import { NormalizedEventCommand } from '../rmmz';
import { ReplaceRawDataContext, GameDataReplaceOutput } from './core/types/replace';
import { EventContainerExtractor } from './extractText';
export { replaceRawDataBundle, replaceRawDataWithAutoNoteFilter, } from './core/replaceBundle';
export declare const replaceDataDirectToFileEntries: (context: ReplaceRawDataContext, extractor: EventContainerExtractor) => FileEntry[];
export declare const replaceDataDirect: ({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor) => RawGameData<NormalizedEventCommand>;
export declare const replaceDataWithHashToFileEntries: <T extends string>(context: ReplaceRawDataContext, extractor: EventContainerExtractor, hashFn: (text: string) => T) => FileEntry[];
export declare const replaceDataWithHash: <T extends string>({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor, hashFn: (text: string) => T) => GameDataReplaceOutput<T>;
