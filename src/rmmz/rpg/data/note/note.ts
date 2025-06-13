import type { NoteReadResult } from "./types";

export const createNoteEntity = (key: string, value: string): string => {
  return `<${key}:${value}>`;
};

export const makeRegex = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g;

export const readNoteObject = <Result, T extends { note: string }>(
  data: T,
  fn: (key: string, value: string, data: T) => Result
): Result[] => readNoteEx(data.note, (key, value) => fn(key, value, data));

export const readNote = (note: string): NoteReadResult[] => {
  return readNoteEx(note, (key, value) => [key, value]);
};
/**
 * note文字列を解析し、キーと値のペアを取得します。
 * タグが閉じられていない場合、その要素は無視されます。
 */
const readNoteEx = <Result>(
  note: string,
  fn: (key: string, value: string) => Result
): Result[] => {
  const regex = makeRegex();
  return Array.from(note.matchAll(regex), (match) => fn(match[1], match[2]));
};

/**
 *
 * @param note
 * @param transformFunction この関数の戻り値でvalueを置き換える
 * @returns
 */
export const replaceNote = (
  note: string,
  transformFunction: (key: string, value: string) => string
): string => {
  if (note.length >= 3000) {
    throw new Error("Note text is too long. Please shorten it.");
  }

  return note.replaceAll(
    makeRegex(),
    (_subString, key: string, value: string) => {
      const newText = transformFunction(key, value);
      if (newText.length >= 1000) {
        throw new Error("Note text is too long. Please shorten it.");
      }
      return createNoteEntity(key, newText);
    }
  );
};

export const getNoteValue = (
  note: string,
  targetKey: string
): string | undefined => {
  const regex = makeRegex();
  const match = Array.from(note.matchAll(regex)).find(
    (m) => m[1] === targetKey
  );
  return match ? match[2] : undefined;
};

export const setNoteValue = (
  note: string,
  targetKey: string,
  newValue: string
): string => {
  const regex = makeRegex();

  return note.replace(regex, (match, key: string) => {
    if (key === targetKey) {
      return createNoteEntity(key, newValue); // 対象キーの場合のみ値を差し替え
    }
    return match; // 対象外はそのまま
  });
};
