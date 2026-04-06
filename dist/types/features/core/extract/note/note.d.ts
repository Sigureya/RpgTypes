import { AudioFilesSet, ImageFilesSet, OtherFilesSet, SummarizedNote, XX } from './types';
export declare const isNoteBoolean: (note: string) => boolean;
export declare const isNoteNumber: (note: string) => boolean;
export declare const stringLikeNoteKeys: (list: ReadonlyArray<SummarizedNote>) => Set<string>;
export declare const summarizeNoteKinds: (items: readonly XX[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => SummarizedNote[];
export declare const categorizeNote: (items: readonly XX[]) => Map<string, XX[]>;
