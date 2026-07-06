import type {
  Rmmz_System,
  Rmmz_TextState,
  Rmmz_Window_Base,
} from "@RpgTypes/rmmzRuntime";
import type { Rmts_FontSizeInfo } from "./types";

export const obtainEscapeParam = (textState: Rmmz_TextState): number | "" => {
  const regExp = /^\[\d+\]/;
  const arr = regExp.exec(textState.text.slice(textState.index));
  if (arr) {
    textState.index += arr[0].length;
    return parseInt(arr[0].slice(1));
  } else {
    return "";
  }
};

export const obtainEscapeCode = (textState: Rmmz_TextState): string => {
  const regExp = /^[$.|^!><{}\\]|^[A-Z]+/i;
  const arr = regExp.exec(textState.text.slice(textState.index));
  if (arr) {
    textState.index += arr[0].length;
    return arr[0].toUpperCase();
  } else {
    return "";
  }
};

export const calcTextHeightFromRuntimeObjects = (
  textState: Rmmz_TextState,
  sysmte: Rmmz_System,
  window: Rmmz_Window_Base,
): number => {
  const lineSpacing = window.lineHeight() - sysmte.mainFontSize();
  const info: Rmts_FontSizeInfo = {
    default: sysmte.mainFontSize(),
    max: 96,
    min: 24,
    step: 12,
  };
  return calcTextHeight(textState, info, lineSpacing);
};

export const calcTextHeight = (
  textState: Rmmz_TextState,
  info: Rmts_FontSizeInfo,
  lineSpacing: number,
): number => {
  const lines = textState.text.slice(textState.index).split("\n");
  return calcMaxFontSizeInLine(lines[0], info) + lineSpacing;
};

const calcMaxFontSizeInLine = (
  lineText: string,
  fontSizeInfo: Rmts_FontSizeInfo,
): number => {
  return lineText
    .matchAll(/\x1b({|}|FS)(?:\[(\d{1,6)])?/gi)
    .reduce((currentFontSize, match: RegExpExecArray): number => {
      const code = match[1].toUpperCase();
      switch (code) {
        case "{":
          return currentFontSize <= fontSizeInfo.max
            ? currentFontSize + fontSizeInfo.step
            : currentFontSize;
        case "}":
          return currentFontSize >= fontSizeInfo.min
            ? currentFontSize - fontSizeInfo.step
            : currentFontSize;
        case "FS":
          return Number(match[2]);
      }
      return currentFontSize;
    }, fontSizeInfo.default);
};
