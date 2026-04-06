import { ExtractedText, ExtractedTextItem } from './types';
export declare const filterNotesInExtractedText: <T>(list: readonly ExtractedText<T>[], fn: (note: ExtractedTextItem) => boolean) => ExtractedText<T>[];
