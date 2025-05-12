import type { ControlChar } from "./types";

/**
 * 指定されたテキストから制御文字を抽出し、ControlChar配列として返します。
 * 制御文字の形式: \(文字)[数字]
 * 文字の大文字小文字を区別しない。
 */
export const getControlChars = (text: string): ControlChar[] => {
  // 正規表現: \(制御文字)[数字]
  const regex = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(text.matchAll(regex)).map<ControlChar>(
    (match: RegExpMatchArray) => ({
      char: match[1],
      id: parseInt(match[2], 10),
    })
  );
};
