import { MapFileInfo, NoteReadResult, NoteReadResultsWithSource } from '../../../../../rmmz';
import { ExtractedMapTexts, TextPluginCommandParameter } from './types';
export declare const extractAllMapNotesEx: (map: MapFileInfo<ExtractedMapTexts>) => NoteReadResultsWithSource;
export declare const filterNoteFromMapTexts: <Command extends TextPluginCommandParameter>(map: ExtractedMapTexts<Command>, fn: (noteItem: NoteReadResult) => boolean) => ExtractedMapTexts<Command>;
