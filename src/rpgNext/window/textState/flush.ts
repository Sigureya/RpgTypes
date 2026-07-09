import type { Rmmz_TextState, Rmmz_Bitmap } from "@RpgTypes/rmmzRuntime";
import { createTextBuffer } from "./ctrl";

export const flashTextState = (
  textState: Rmmz_TextState,
  bitmap: Rmmz_Bitmap,
): Rmmz_TextState => {
  return textState.rtl
    ? rtlTrue(textState, bitmap)
    : rtlFalse(textState, bitmap);
};

const rtlFalse = (
  textState: Rmmz_TextState,
  bitmap: Rmmz_Bitmap,
): Rmmz_TextState => {
  const width = bitmap.measureTextWidth(textState.buffer);
  if (textState.drawing) {
    bitmap.drawText(
      textState.buffer,
      textState.x,
      textState.y,
      width,
      textState.height,
    );
  }
  const outputWidth = Math.abs(textState.x - textState.startX);
  return {
    text: textState.text,
    buffer: createTextBuffer(textState.rtl),
    x: textState.x + width,
    y: textState.y,
    outputHeight: textState.y - textState.startY + textState.height,
    index: textState.index,
    drawing: textState.drawing,
    rtl: textState.rtl,
    startX: textState.startX,
    startY: textState.startY,
    height: textState.height,
    width: textState.width,
    outputWidth: Math.max(outputWidth, textState.outputWidth),
  };
};

const rtlTrue = (
  textState: Rmmz_TextState,
  bitmap: Rmmz_Bitmap,
): Rmmz_TextState => {
  const width = bitmap.measureTextWidth(textState.buffer);
  const x = textState.x - width;
  if (textState.drawing) {
    bitmap.drawText(textState.buffer, x, textState.y, width, textState.height);
  }
  const outputWidth = Math.abs(textState.x - textState.startX);

  return {
    buffer: createTextBuffer(textState.rtl),
    x: textState.x - width,
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
