import type { NoteReadResult } from "./types";

export const makeRegex = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g;

export const readNoteObject = <Result, T extends { note: string }>(
  data: T,
  fn: (key: string, value: string, data: T) => Result
): Result[] => readNoteEx(data.note, (key, value) => fn(key, value, data));

export const readNote = (note: string): NoteReadResult[] => {
  return readNoteEx(note, (key, value) => ({ key, value }));
};
/**
 * note文字列を解析し、キーと値のペアを取得します。
 * タグが閉じられていない場合、その要素は無視されます。
 */
export const readNoteEx = <Result>(
  note: string,
  fn: (key: string, value: string) => Result
): Result[] => {
  const regex = makeRegex();
  return Array.from(note.matchAll(regex), (match) => fn(match[1], match[2]));
};
