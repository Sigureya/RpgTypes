import { FileReadBundle } from '../../../fileio';
import { SystemKinds, RmmzTextPropertys } from './sss/types';
import { TextCommandParameter, EventContainerExtractor } from './text';
import { ExtractedTextFinalWithNotes } from './types';
export declare const buildExtractResultWithNotes: <UUID>(kinds: SystemKinds, bundle: FileReadBundle, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinalWithNotes<UUID>;
