import type { Rmmz_TextState, Rmmz_Bitmap } from "@RpgTypes/rmmzRuntime";
import { createTextBuffer } from "./ctrl";

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
