import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Rmmz_Bitmap, Rmmz_TextState } from "@RpgTypes/rmmzRuntime";
import { flashTextState, nextTextState } from "@RpgTypes/rpgNext/window";
import {
  BUFFER_INITIAL_TEXT_RTL_FALSE,
  BUFFER_INITIAL_TEXT_RTL_TURE,
} from "@RpgTypes/rpgNext/window/textState/ctrl";
import { Window_Base } from "./rmmz_windows";

interface MockWindowBase {
  contents: MockedObject<Rmmz_Bitmap>;
  textWidth(text: string): number;
  createTextBuffer(rtl: boolean): string;
}

const measureTextWidth = (text: string): number => {
  return text.length * 10;
};

const createMockBitmap = (): MockedObject<Rmmz_Bitmap> => {
  return {
    measureTextWidth: vi.fn(measureTextWidth),
    drawText: vi.fn(),
  };
};

const createMockWindowBase = (): MockedObject<MockWindowBase> => {
  const bitmap = createMockBitmap();
  return {
    contents: bitmap,
    textWidth: vi.fn((text: string) =>
      Window_Base.prototype.textWidth.call({ contents: bitmap }, text),
    ),
    createTextBuffer: vi.fn((rtl: boolean) =>
      rtl ? BUFFER_INITIAL_TEXT_RTL_TURE : BUFFER_INITIAL_TEXT_RTL_FALSE,
    ),
  };
};

interface TestCase {
  input: Rmmz_TextState;
  expected: Rmmz_TextState;
  textWidth?: number;
}

const runTestCase = (testCase: TestCase) => {
  describe("flashTextState", () => {
    describe("Window_Base", () => {
      test("call", () => {
        const mockWindowBase = createMockWindowBase();
        const state: Rmmz_TextState = {
          ...testCase.input,
        };
        Window_Base.prototype.flushTextState.call(mockWindowBase, state);
        expect(mockWindowBase.createTextBuffer).toHaveBeenCalledWith(
          testCase.input.rtl,
        );
        expect(mockWindowBase.contents.measureTextWidth).toHaveBeenCalledWith(
          testCase.input.buffer,
        );
        expect(mockWindowBase.contents.drawText).toHaveBeenCalledWith(
          testCase.input.buffer,
          testCase.input.x,
          testCase.input.y,
          expect.any(Number),
          testCase.input.height,
        );
      });
      test("result", () => {
        const mockWindowBase = createMockWindowBase();
        const state: Rmmz_TextState = {
          ...testCase.input,
        };
        Window_Base.prototype.flushTextState.call(mockWindowBase, state);
        expect(state).toEqual(testCase.expected);
      });
    });
    describe("function", () => {
      test("call", () => {
        const mockBitmap = createMockBitmap();

        const state: Rmmz_TextState = {
          ...testCase.input,
        };
        flashTextState(state, mockBitmap);
        expect(mockBitmap.measureTextWidth).toHaveBeenCalledWith(
          testCase.input.buffer,
        );
        expect(mockBitmap.drawText).toHaveBeenCalledWith(
          testCase.input.buffer,
          testCase.input.x,
          testCase.input.y,
          expect.any(Number),
          testCase.input.height,
        );
      });
      test("result", () => {
        const mockBitmap = createMockBitmap();
        const state: Rmmz_TextState = {
          ...testCase.input,
        };
        const result = flashTextState(state, mockBitmap);
        expect(result).toEqual(testCase.expected);
        expect(state).toEqual(testCase.input);
      });
      test("newTextState", () => {
        const width = measureTextWidth(testCase.input.buffer);
        const result = nextTextState(testCase.input, width);
        expect(result).toEqual(testCase.expected);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    input: {
      buffer: "Hello",
      rtl: false,
      text: "Hello",
      index: 0,
      x: 0,
      y: 0,
      width: 100,
      height: 20,
      startX: 0,
      startY: 0,
      drawing: true,
      outputHeight: 0,
      outputWidth: 0,
    },
    expected: {
      buffer: BUFFER_INITIAL_TEXT_RTL_FALSE,
      rtl: false,
      text: "Hello",
      index: 0,
      x: 50,
      y: 0,
      width: 100,
      height: 20,
      startX: 0,
      startY: 0,
      drawing: true,
      outputHeight: 20,
      outputWidth: 50,
    },
  },
];

testCases.forEach((testCase) => {
  runTestCase(testCase);
});
