import { NoteReplaceHandlers } from '../../../../rmmz';
export declare const replaceTextByMap: (text: string, map: ReadonlyMap<string, string>) => string;
export declare const replaceTextByFunction: (text: string, replaceFn: (key: string) => string | undefined) => string;
export declare const replaceTextByHandlers: (text: string, handlers: NoteReplaceHandlers) => string;
