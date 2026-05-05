import { FileReadBundle } from '../../../fileio';
import { SystemKinds, RmmzTextPropertys, TextCommandParameter, EventContainerExtractor } from './text';
import { ExtractedTextFinalWithNotes } from './types';
export declare const buildExtractResultWithNotes: <UUID>(bundle: FileReadBundle, kinds: SystemKinds, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinalWithNotes<UUID>;
