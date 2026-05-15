import { RawGameData } from '../fileio';
import { NormalizedEventCommand } from '../rmmz';
import { replaceRawDataBundle } from './core/replaceBundle';
import { EventContainerExtractor } from './extractText';
import { GameDataReplaceOutput, ReplaceRawDataContext } from './types/replace';
export { replaceRawDataBundle };
export declare const replaceDataDirect: ({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor) => RawGameData<NormalizedEventCommand>;
export declare const replaceDataWithHash: <T extends string>({ assetBundle, data, dictionary, textKeys }: ReplaceRawDataContext, extractor: EventContainerExtractor, hashFn: (text: string) => T) => GameDataReplaceOutput<T>;
