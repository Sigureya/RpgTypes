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
      test("bigger or smaller", () => {
        const mockWindowBase = createMockWindowBase(testCase.input.fontSize);
        const reuslt = Window_Base.prototype.maxFontSizeInLine.call(
          mockWindowBase,
          testCase.input.text,
        );
        expect(reuslt).toBe(testCase.expected);
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
];

testCases.forEach((testCase) => {
  runTestCase(testCase);
});
