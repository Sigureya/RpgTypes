import { NoteReadResult } from '../../../rmmz';
import { AudioFilesSet, ImageFilesSet, OtherFilesSet, SummarizedNote } from './types';
export declare const isNoteBoolean: (note: string) => boolean;
export declare const isNoteNumber: (note: string) => boolean;
export declare const summarizeNoteKinds: (items: readonly NoteReadResult[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => SummarizedNote[];
export declare const categorizeNote: (items: readonly NoteReadResult[]) => Map<string, NoteReadResult[]>;
