import { NoteReadResult } from '../../../../../rmmz';
import { ExtractedMapTexts, TextPluginCommandParameter } from './types';
export declare const extractAllMapNotes: (map: readonly ExtractedMapTexts[]) => NoteReadResult[];
export declare const extractAllMapNotesEx: <T>(map: ReadonlyArray<T>, fn: (map: T) => ExtractedMapTexts) => NoteReadResult[];
export declare const filterNoteFromMapTexts: <Command extends TextPluginCommandParameter>(map: ExtractedMapTexts<Command>, fn: (noteItem: NoteReadResult) => boolean) => ExtractedMapTexts<Command>;
