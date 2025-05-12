import { describe, test, expect } from "vitest";

import { getControlChars } from "./getContolChars";
import type { ControlChar } from "./types";

describe("getControlChars", () => {
  describe("正常系", () => {
    test("基本的な制御文字の抽出", () => {
      const input = "\\PX[1]\\py[20]\\V[300]\\N[400]";
      const result = getControlChars(input);
      const expected: ControlChar[] = [
        { char: "PX", id: 1 },
        { char: "py", id: 20 },
        { char: "V", id: 300 },
        { char: "N", id: 400 },
      ];

      expect(result).toEqual(expected);
    });

    test("ネストされた制御文字の抽出", () => {
      const input = "\\c[\\v[10]]";
      const result = getControlChars(input);
      const expected: ControlChar[] = [{ char: "v", id: 10 }];

      expect(result).toEqual(expected);
    });
  });

  describe("異常系", () => {
    test("数字がない場合は無視される", () => {
      const input = "\\PX[]\\py";
      const result = getControlChars(input);
      expect(result).toEqual([]);
    });

    test("制御文字が閉じられていない場合は無視される", () => {
      const input = "\\PX[1\\py[2";
      const result = getControlChars(input);
      expect(result).toEqual([]);
    });

    test("空文字列を処理", () => {
      const result = getControlChars("");
      expect(result).toEqual([]);
    });
  });
});
