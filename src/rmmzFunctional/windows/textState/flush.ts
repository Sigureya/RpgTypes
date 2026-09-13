import type { Rmmz_TextState, Rmmz_Bitmap } from "@RpgTypes/rmmzRuntime";
import {
  BUFFER_INITIAL_TEXT_RTL_TURE,
  BUFFER_INITIAL_TEXT_RTL_FALSE,
} from "./constants";
import { convertEscapeCharacters } from "./escape";

const containsArabic = function (str: string): boolean {
  const regExp = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return regExp.test(str);
};

export const createTextBuffer = (rtl: boolean) => {
  return rtl ? BUFFER_INITIAL_TEXT_RTL_TURE : BUFFER_INITIAL_TEXT_RTL_FALSE;
};

export const createTextState = (
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  variableFn: (valiableId: number) => string | number,
  textFn: (ctrl: string, value: number) => string | undefined,
): Rmmz_TextState => {
  const rtl = containsArabic(text);
  return {
    buffer: createTextBuffer(rtl),
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

export const flashTextState = (
  textState: Rmmz_TextState,
  bitmap: Rmmz_Bitmap,
): Rmmz_TextState => {
  const width: number = bitmap.measureTextWidth(textState.buffer);
  if (textState.drawing) {
    bitmap.drawText(
      textState.buffer,
      textState.x,
      textState.y,
      width,
      textState.height,
    );
  }
  return nextTextState(textState, width);
};

export const nextTextState = (
  textState: Rmmz_TextState,
  width: number,
): Rmmz_TextState => {
  const newX: number = textState.rtl
    ? textState.x - width
    : textState.x + width;
  const outputWidth: number = Math.abs(newX - textState.startX);

  return {
    buffer: createTextBuffer(textState.rtl),
    x: newX,
    y: textState.y,
    outputHeight: textState.y - textState.startY + textState.height,
    index: textState.index,
    drawing: textState.drawing,
    rtl: textState.rtl,
    startX: textState.startX,
    startY: textState.startY,
    outputWidth: Math.max(outputWidth, textState.outputWidth),
    text: textState.text,
    width: textState.width,
    height: textState.height,
  };
};
