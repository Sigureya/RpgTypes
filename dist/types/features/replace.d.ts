import { RawGameData } from '../fileio';
import { NormalizedEventCommand } from '../rmmz';
import { ReplaceRawDataContext, GameDataReplaceOutput } from './core/types/replace';
import { EventContainerExtractor } from './extractText';
export { replaceRawDataBundle, replaceRawDataWithAutoNoteFilter, } from './core/replaceBundle';
export declare const replaceDataDirect: ({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor) => RawGameData<NormalizedEventCommand>;
export declare const replaceDataWithHash: <T extends string>({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor, hashFn: (text: string) => T) => GameDataReplaceOutput<T>;
