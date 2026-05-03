import { AssetFilesBundle } from '../../../../fileio';
import { NoteReadResultsWithSource } from '../../../../rmmz';
import { SummarizedNote, SummarizedNote2 } from './types';
export declare const isNoteBoolean: (note: string) => boolean;
export declare const isNoteNumber: (note: string) => boolean;
export declare const stringLikeNoteKeys: (list: ReadonlyArray<SummarizedNote<unknown>>) => Set<string>;
export declare const summarizeNoteKinds: (items: readonly NoteReadResultsWithSource[], { audioFiles, imageFiles, otherFiles: other }: AssetFilesBundle) => SummarizedNote2[];
