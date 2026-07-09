import type { Rmmz_TextState, Rmmz_Window_Base } from "@RpgTypes/rmmzRuntime";
import { convertEscapeCharacters } from "./escape";

/* eslint-disable @functional/no-return-void */
export interface TextStream {
  processColorChange(colorIndex: number): void;
  processDrawIcon(iconIndex: number): void;
  setTextPositionX(x: number): void;
  setTextPositionY(y: number): void;
  processSetFontSize(fontSize: number): void;
  makeFontBigger(): void;
  makeFontSmaller(): void;
}

const readMainxxx = (
  text: string,
  fn2: (text: string) => void,
  fn: (code: string, value: number, state: Rmmz_TextState) => void,
) => {};

interface XXX {
  isCtrlCharacter: (character: string) => boolean;
  writeBuffer: (character: string) => void;
  flush(): void;
}

const processCharacter = (text: string, index: number, handles: XXX) => {
  const c = text[index];
  if (handles.isCtrlCharacter(c)) {
  }
};

const processControlCharacter2 = (textState: Rmmz_TextState) => {};

const containsArabic = function (str: string): boolean {
  const regExp = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return regExp.test(str);
};

export const createTextState = (
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  variableFn: (valiableId: number) => string | number,
  textFn: (ctrl: string, value: number) => string | undefined,
): Partial<Rmmz_TextState> => {
  const rtl = containsArabic(text);
  return {
    buffer: rtl ? "\u202B" : "",
    rtl: rtl,
    text: convertEscapeCharacters(text, variableFn, textFn),
    index: 0,
    x: x,
    y: y,
    width: width,
    height: height,
    startX: x,
    startY: y,
    drawing: true,
    outputHeight: 0,
    outputWidth: 0,
  };
};

const gggx = () => {};

export const processControlCharacter = (
  text: string,
  fn: (ctrl: string) => void,
): number => {
  const regExp = /^[$.|^!><{}\\]|^[A-Z]+/i;
  const matchArray = regExp.exec(text);
  if (!matchArray) {
    return 0;
  }
  fn(matchArray[0].toUpperCase());
  return matchArray[0].length;
};

const handleControlCharacter = (
  code: string,
  windowBase: Rmmz_Window_Base,
  textState: Rmmz_TextState,
) => {
  switch (code) {
    case "{":
      windowBase.makeFontBigger();
      break;
    case "}":
      windowBase.makeFontSmaller();
      break;
  }
};
