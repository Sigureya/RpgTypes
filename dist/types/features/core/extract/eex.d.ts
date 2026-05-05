import { FileReadBundle } from '../../../fileio';
import { SummarizedNote, SummarizedNoteValue } from './note';
import { SystemKinds, RmmzTextPropertys, ExtractedTextFinal } from './sss/types';
import { TextCommandParameter, EventContainerExtractor } from './text';
export declare const buildExtractResult2: <UUID>(kinds: SystemKinds, bundle: FileReadBundle, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinal<UUID, SummarizedNote<SummarizedNoteValue>>;
