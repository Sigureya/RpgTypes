import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Rmmz_Bitmap, Rmmz_TextState } from "@RpgTypes/rmmzRuntime";

import {
  BUFFER_INITIAL_TEXT_RTL_FALSE,
  BUFFER_INITIAL_TEXT_RTL_TURE,
} from "./constants";
import {
  createTextBuffer,
  createTextState,
  flashTextState,
  nextTextState,
} from "./flush";

const createBitmap = (): MockedObject<Rmmz_Bitmap> => ({
  measureTextWidth: vi.fn((text: string) => text.length * 10),
  drawText: vi.fn(),
});

describe("createTextBuffer", () => {
  test("returns empty buffer for LTR text", () => {
    expect(createTextBuffer(false)).toBe(BUFFER_INITIAL_TEXT_RTL_FALSE);
  });

  test("returns RTL marker for Arabic text", () => {
    expect(createTextBuffer(true)).toBe(BUFFER_INITIAL_TEXT_RTL_TURE);
  });
});

describe("createTextState", () => {
  test("initializes a normal text state", () => {
    const state = createTextState(
      "Hello",
      10,
      20,
      200,
      18,
      "¥",
      (value) => value * 2,
      (ctrl, value) => {
        if (ctrl === "V") {
          return String(value * 2);
        }
        return undefined;
      },
    );
    const expected: Rmmz_TextState = {
      buffer: BUFFER_INITIAL_TEXT_RTL_FALSE,
      rtl: false,
      text: "Hello",
      x: 10,
      y: 20,
      width: 200,
      height: 18,
      startX: 10,
      startY: 20,
      drawing: true,
      outputWidth: 0,
      outputHeight: 0,
      index: expect.any(Number),
    };

    expect(state).toMatchObject(expected);
  });

  test("detects RTL text and keeps the buffer marker", () => {
    const state = createTextState(
      "مرحبا",
      40,
      30,
      120,
      16,
      "¥",
      (value) => value,
      () => undefined,
    );

    expect(state.rtl).toBe(true);
    expect(state.buffer).toBe(BUFFER_INITIAL_TEXT_RTL_TURE);
  });
});

describe("flashTextState", () => {
  test("draws the current buffer and advances the state to the next column", () => {
    const bitmap = createBitmap();
    const state: Rmmz_TextState = {
      buffer: "Hello",
      rtl: false,
      text: "Hello",
      index: 0,
      x: 10,
      y: 20,
      width: 200,
      height: 18,
      startX: 10,
      startY: 20,
      drawing: true,
      outputHeight: 0,
      outputWidth: 0,
    };
    const expected: Rmmz_TextState = {
      buffer: BUFFER_INITIAL_TEXT_RTL_FALSE,
      rtl: false,
      text: "Hello",
      index: 0,
      x: 60,
      y: 20,
      width: 200,
      height: 18,
      startX: 10,
      startY: 20,
      drawing: true,
      outputHeight: 18,
      outputWidth: 50,
    };

    const result = flashTextState(state, bitmap);
    expect(bitmap.measureTextWidth).toHaveBeenCalledWith("Hello");
    expect(bitmap.drawText).toHaveBeenCalledWith("Hello", 10, 20, 50, 18);
    expect(result).toEqual(expected);
    expect(state).not.toBe(result); // Ensure a new state object is returned
  });

  test("does not draw when the state is not drawing", () => {
    const bitmap = createBitmap();
    const state: Rmmz_TextState = {
      buffer: "abc",
      rtl: true,
      text: "abc",
      index: 0,
      x: 100,
      y: 40,
      width: 60,
      height: 20,
      startX: 100,
      startY: 40,
      drawing: false,
      outputHeight: 0,
      outputWidth: 0,
    };

    const result = flashTextState(state, bitmap);

    expect(bitmap.drawText).not.toHaveBeenCalled();
    expect(result.x).toBe(70);
    expect(result.outputWidth).toBe(30);
  });
});

describe("nextTextState", () => {
  test("moves the cursor right for LTR text", () => {
    const state: Rmmz_TextState = {
      buffer: "Test",
      rtl: false,
      text: "Test",
      index: 0,
      x: 15,
      y: 8,
      width: 80,
      height: 16,
      startX: 15,
      startY: 8,
      drawing: true,
      outputHeight: 0,
      outputWidth: 0,
    };

    const result = nextTextState(state, 20);

    expect(result.x).toBe(35);
    expect(result.outputWidth).toBe(20);
    expect(result.outputHeight).toBe(16);
  });

  test("moves the cursor left for RTL text", () => {
    const state: Rmmz_TextState = {
      buffer: "Test",
      rtl: true,
      text: "Test",
      index: 1,
      x: 100,
      y: 25,
      width: 80,
      height: 20,
      startX: 100,
      startY: 25,
      drawing: true,
      outputHeight: 0,
      outputWidth: 0,
    };

    const result = nextTextState(state, 35);

    expect(result.x).toBe(65);
    expect(result.outputWidth).toBe(35);
    expect(result.outputHeight).toBe(20);
  });
});
