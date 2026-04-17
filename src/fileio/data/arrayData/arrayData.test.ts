import type { MockedFunction } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { readArrayData } from "./arrayData";
import type { ArrayDataErrorMessages, ReadArrayResult } from "./types";

interface TestItem {
  id: number;
}

type MockedValidateFn = MockedFunction<(item: unknown) => boolean>;

const terms: ArrayDataErrorMessages = {
  jsonParseError: "json parse error",
  notArray: "not array",
};

describe("readArrayData", () => {
  test("配列JSONを読み込み、validateを通過した要素だけ返す", async () => {
    const filename = "Actors.json" as const;
    const source = [{ id: 1 }, { id: 2 }, { bad: true }];
    const readFileFn = vi.fn(async () => {
      return JSON.stringify(source);
    });
    const validateFn: MockedValidateFn = vi.fn((item: unknown) => {
      return (
        typeof item === "object" &&
        item !== null &&
        "id" in item &&
        typeof (item as { id: unknown }).id === "number"
      );
    });

    const expected: ReadArrayResult<TestItem> = {
      success: true,
      fileName: filename,
      data: [{ id: 1 }, { id: 2 }],
      error: "",
    };

    const result = await readArrayData(
      terms,
      filename,
      readFileFn,
      (d): d is TestItem => validateFn(d),
    );

    expect(readFileFn).toHaveBeenCalledWith(filename);
    expect(validateFn).toHaveBeenCalledTimes(3);
    expect(result).toEqual(expected);
  });

  test("JSONが配列でない場合は notArray エラーを返す", async () => {
    const filename = "Actors.json" as const;
    const readFileFn = vi.fn(async () => {
      return JSON.stringify({ id: 1 });
    });
    const validateFn: MockedValidateFn = vi.fn((item: unknown) => {
      return typeof item === "object" && item !== null;
    });

    const expected: ReadArrayResult<TestItem> = {
      success: false,
      fileName: filename,
      data: [],
      error: terms.notArray,
    };

    const result = await readArrayData(
      terms,
      filename,
      readFileFn,
      (d): d is TestItem => validateFn(d),
    );

    expect(validateFn).not.toHaveBeenCalled();
    expect(result).toEqual(expected);
  });

  test("JSONパース失敗時は jsonParseError を返す", async () => {
    const filename = "Actors.json" as const;
    const readFileFn = vi.fn(async () => {
      return "{ bad json }";
    });
    const validateFn: MockedValidateFn = vi.fn((item: unknown) => {
      return typeof item === "object" && item !== null;
    });

    const expected: ReadArrayResult<TestItem> = {
      success: false,
      fileName: filename,
      data: [],
      error: terms.jsonParseError,
    };

    const result = await readArrayData(
      terms,
      filename,
      readFileFn,
      (d): d is TestItem => validateFn(d),
    );

    expect(validateFn).not.toHaveBeenCalled();
    expect(result).toEqual(expected);
  });

  test("ファイル読み込み失敗時は jsonParseError を返す", async () => {
    const filename = "Actors.json" as const;
    const readFileFn = vi.fn(async () => {
      throw new Error("file read error");
    });
    const validateFn: MockedValidateFn = vi.fn((item: unknown) => {
      return typeof item === "object" && item !== null;
    });

    const expected: ReadArrayResult<TestItem> = {
      success: false,
      fileName: filename,
      data: [],
      error: terms.jsonParseError,
    };

    const result = await readArrayData(
      terms,
      filename,
      readFileFn,
      (d): d is TestItem => validateFn(d),
    );

    expect(validateFn).not.toHaveBeenCalled();
    expect(result).toEqual(expected);
  });
});
