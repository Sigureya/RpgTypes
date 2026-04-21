import { AudioFilesSet, ImageFilesSet } from '../../../../fileio';
import { SummarizedNote, KeyValuePair, OtherFilesSet } from './types';
export declare const isNoteBoolean: (note: string) => boolean;
export declare const isNoteNumber: (note: string) => boolean;
export declare const stringLikeNoteKeys: (list: ReadonlyArray<SummarizedNote>) => Set<string>;
export declare const summarizeNoteKinds: (items: readonly KeyValuePair[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet, map?: ReadonlyMap<string, KeyValuePair[]>) => SummarizedNote[];
export declare const categorizeNote: (items: readonly KeyValuePair[]) => Map<string, KeyValuePair[]>;
