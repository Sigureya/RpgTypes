import { ExtractedText, ExtractedTextEntry } from './types';
export declare const filterNotesInExtractedText: <T>(list: readonly ExtractedText<T>[], fn: (note: ExtractedTextEntry) => boolean) => ExtractedText<T>[];
