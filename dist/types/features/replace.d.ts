import { RawGameData } from '../fileio';
import { NormalizedEventCommand } from '../rmmz';
import { EventContainerExtractor } from './extractText';
import { GameDataReplaceOutput, ReplaceRawDataContext } from './types/replace';
export { replaceRawDataBundle, replaceRawDataWithAutoNoteFilter, } from './core/replaceBundle';
export declare const replaceDataDirect: ({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor) => RawGameData<NormalizedEventCommand>;
export declare const replaceDataWithHash: <T extends string>({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor, hashFn: (text: string) => T) => GameDataReplaceOutput<T>;
