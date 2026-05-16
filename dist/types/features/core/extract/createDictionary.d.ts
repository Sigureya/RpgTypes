import { SummarizedNote, SummarizedNoteValue } from './note';
import { RuntimeDictionaryData } from './types';
export declare const createRuntimeDictionaryData: <T>(noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[], dictionary: ReadonlyMap<string, string>, hashFn: (text: string) => T) => RuntimeDictionaryData<T>;
