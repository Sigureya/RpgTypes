import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { Window_Base } from "./rmmz_windows";

interface MockWindowBase {
  makeFontBigger(): void;
  makeFontSmaller(): void;
  contents: ContentsProxy;
}

class ContentsProxy {
  public log: number[] = [];
  private _fontSize: number;
  constructor(fontSize: number) {
    this._fontSize = fontSize;
  }
  get fontSize(): number {
    return this._fontSize;
  }
  set fontSize(value: number) {
    this.log.push(value);
    this._fontSize = value;
  }
}

const createMockWindowBase = (
  fontSize: number,
): MockedObject<MockWindowBase> => {
  const contents = new ContentsProxy(fontSize);
  return {
    contents: contents,
    makeFontBigger: vi.fn(() => {
      Window_Base.prototype.makeFontBigger.call({ contents });
    }),
    makeFontSmaller: vi.fn(() => {
      Window_Base.prototype.makeFontSmaller.call({ contents });
    }),
  };
};

interface TestCase {
  input: {
    text: string;
    fontSize: number;
  };
  expected: number;
  callBigger: number;
  callSmaller: number;
  setFontSize: number[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.input.text, () => {
    describe("Window_Base", () => {
      test("result", () => {
        const mockWindowBase = createMockWindowBase(testCase.input.fontSize);
        const reuslt = Window_Base.prototype.maxFontSizeInLine.call(
          mockWindowBase,
          testCase.input.text,
        );
        expect(reuslt).toBe(testCase.expected);
      });
      test("bigger or smaller", () => {
        const mockWindowBase = createMockWindowBase(testCase.input.fontSize);
        Window_Base.prototype.maxFontSizeInLine.call(
          mockWindowBase,
          testCase.input.text,
        );
        expect(mockWindowBase.makeFontBigger).toHaveBeenCalledTimes(
          testCase.callBigger,
        );
        expect(mockWindowBase.makeFontSmaller).toHaveBeenCalledTimes(
          testCase.callSmaller,
        );
      });
      test("set font size", () => {
        const mockWindowBase = createMockWindowBase(testCase.input.fontSize);
        Window_Base.prototype.maxFontSizeInLine.call(
          mockWindowBase,
          testCase.input.text,
        );
        const set = new Set(mockWindowBase.contents.log);
        testCase.setFontSize.forEach((value) => {
          const msg = `fontSize(${value}) should be set`;
          expect(set, msg).toContain(value);
        });
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    input: { text: "normal", fontSize: 20 },
    callBigger: 0,
    callSmaller: 0,
    expected: 20,
    setFontSize: [],
  },
  {
    input: { text: "\x1b{", fontSize: 20 },
    callBigger: 1,
    callSmaller: 0,
    expected: 32,
    setFontSize: [],
  },
  {
    input: { text: "\x1b{", fontSize: 95 },
    callBigger: 1,
    callSmaller: 0,
    expected: 95 + 12,
    setFontSize: [],
  },
  {
    input: { text: "\x1b{", fontSize: 96 },
    callBigger: 1,
    callSmaller: 0,
    expected: 96 + 12,
    setFontSize: [],
  },
  {
    input: { text: "\x1b{", fontSize: 97 },
    callBigger: 1,
    callSmaller: 0,
    expected: 97,
    setFontSize: [],
  },
  {
    input: { text: "\x1b{\x1b{", fontSize: 97 },
    callBigger: 2,
    callSmaller: 0,
    expected: 97,
    setFontSize: [],
  },
  // フォントの初期サイズを下限にする処理があるのでこうなる
  {
    input: { text: "\x1b}", fontSize: 25 },
    callBigger: 0,
    callSmaller: 1,
    expected: 25,
    setFontSize: [],
  },
  {
    input: { text: "\x1b}", fontSize: 26 },
    callBigger: 0,
    callSmaller: 1,
    expected: 26,
    setFontSize: [],
  },
  {
    input: { text: "\x1b}", fontSize: 30 },
    callBigger: 0,
    callSmaller: 1,
    expected: 30,
    setFontSize: [],
  },
  {
    input: { text: "\x1b}", fontSize: 50 },
    callBigger: 0,
    callSmaller: 1,
    expected: 50,
    setFontSize: [],
  },
  {
    input: { text: "\x1bFS[1234]", fontSize: 10 },
    callBigger: 0,
    callSmaller: 0,
    expected: 1234,
    setFontSize: [1234],
  },
];

testCases.forEach((testCase) => {
  runTestCase(testCase);
});
