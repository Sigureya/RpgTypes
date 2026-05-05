import { FileReadBundle } from '../../../fileio';
import { RmmzTextPropertys } from './sss';
import { TextCommandParameter, EventContainerExtractor } from './text';
import { SystemKinds } from './text/system/types';
import { ExtractedTextFinalWithNotes } from './types';
export declare const buildExtractResultWithNotes: <UUID>(kinds: SystemKinds, bundle: FileReadBundle, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinalWithNotes<UUID>;
