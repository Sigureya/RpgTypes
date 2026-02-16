import { NoteReadResult, NoteReplaceHandlers } from './types';
export declare const createNoteEntity: (key: string, value: string) => string;
/**
 *
 * @param note
 * @param transformFunction この関数の戻り値でvalueを置き換える
 * @returns
 */
export declare const replaceNote: (note: string, transformFunction: (item: NoteReadResult) => string, sep?: string) => string;
export declare const replaceNoteWithHandlers: (note: string, handlers: NoteReplaceHandlers, sep?: string) => string;
export declare const getNoteValue: (note: string, targetKey: string) => string | undefined;
export declare const setNoteValue: (note: string, targetKey: string, newValue: string) => string;
