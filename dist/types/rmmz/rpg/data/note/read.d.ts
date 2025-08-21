import { NoteReadResult } from './types';
export declare const makeRegex: () => RegExp;
export declare const readNoteObject: <Result, T extends {
    note: string;
}>(data: T, fn: (key: string, value: string, data: T) => Result) => Result[];
export declare const readNote: (note: string) => NoteReadResult[];
/**
 * note文字列を解析し、キーと値のペアを取得します。
 * タグが閉じられていない場合、その要素は無視されます。
 */
export declare const readNoteEx: <Result>(note: string, fn: (key: string, value: string) => Result) => Result[];
