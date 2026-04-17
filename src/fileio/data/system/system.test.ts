import { describe, expect, test, vi } from "vitest";
import type { Data_System, Data_SystemMV } from "@RpgTypes/rmmz";
import {
  makeSystemData,
  makeSystemDataFromMV,
  makeSystemDataMV,
} from "@RpgTypes/rmmz";
import { readSystemData, FILENAME_SYSTEM } from "./system";
import type {
  SystemDataReadHandler,
  ReadSystemResult,
  SystemDataErrorMessages,
} from "./types";

const terms: SystemDataErrorMessages = {
  jsonParseError: "json parse error",
  invalidStructure: "invalid structure",
  fileNotFound: "file not found",
  mvAsMz: "mv as mz",
  validateFunctionError: "validate function error",
};

const mzData: Data_System = makeSystemData({
  texts: { gameTitle: "Test Game" },
});
const mvData: Data_SystemMV = makeSystemDataMV(mzData);

const makeHandlers = (
  overrides: Partial<SystemDataReadHandler> = {},
): SystemDataReadHandler => ({
  validateSystemMz: (item): item is Data_System => false,
  validateSystemMv: (item): item is Data_SystemMV => false,
  ...overrides,
});

describe("readSystemData", () => {
  test("ファイル読み込み失敗時は fileNotFound を返す", async () => {
    const fileReadFn = vi.fn(async () => {
      throw new Error("no file");
    });
    const handlers = makeHandlers();

    const expected: ReadSystemResult = {
      system: null,
      message: terms.fileNotFound,
    };
    const result = await readSystemData(terms, fileReadFn, handlers);

    expect(fileReadFn).toHaveBeenCalledWith(FILENAME_SYSTEM);
    expect(fileReadFn).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("JSON パース失敗時は jsonParseError を返す", async () => {
    const fileReadFn = vi.fn(async () => "{ bad json }");
    const handlers = makeHandlers();

    const expected: ReadSystemResult = {
      system: null,
      message: terms.jsonParseError,
    };
    const result: ReadSystemResult = await readSystemData(
      terms,
      fileReadFn,
      handlers,
    );
    expect(result).toEqual(expected);
    expect(fileReadFn).toHaveBeenCalledWith(FILENAME_SYSTEM);
  });

  test("MZ バリデーション成功時は system を返し message は空文字", async () => {
    const fileReadFn = vi.fn(async () => JSON.stringify(mzData));
    const handlers = makeHandlers({
      validateSystemMz: (item): item is Data_System => true,
    });

    const expected: ReadSystemResult = { system: mzData, message: "" };
    const result = await readSystemData(terms, fileReadFn, handlers);

    expect(result).toEqual(expected);
  });

  test("MV バリデーション成功時は変換済み system と mvAsMz を返す", async () => {
    const fileReadFn = vi.fn(async () => JSON.stringify(mvData));
    const validateMz = vi.fn((_: unknown): _ is Data_System => false);
    const validateMv = vi.fn((_: unknown): _ is Data_SystemMV => true);
    const handlers = makeHandlers({
      validateSystemMv: (v): v is Data_SystemMV => validateMv(v),
      validateSystemMz: (v): v is Data_System => validateMz(v),
    });

    const expected: ReadSystemResult = {
      system: makeSystemDataFromMV(mvData),
      message: terms.mvAsMz,
    };
    const result = await readSystemData(terms, fileReadFn, handlers);

    expect(validateMz).toHaveBeenCalledTimes(1);
    expect(validateMv).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("MZ・MV ともにバリデーション失敗時は invalidStructure を返す", async () => {
    const fileReadFn = vi.fn(async () => JSON.stringify({ unknown: true }));
    const handlers = makeHandlers();

    const expected: ReadSystemResult = {
      system: null,
      message: terms.invalidStructure,
    };
    const result = await readSystemData(terms, fileReadFn, handlers);

    expect(result).toEqual(expected);
  });

  test("バリデーション関数が例外を投げた場合は validateFunctionError を返す", async () => {
    const fileReadFn = vi.fn(async () => JSON.stringify(mzData));
    const handlers = makeHandlers({
      validateSystemMz: (v): v is Data_System => {
        throw new Error("unexpected");
      },
    });

    const expected: ReadSystemResult = {
      system: null,
      message: terms.validateFunctionError,
    };
    const result = await readSystemData(terms, fileReadFn, handlers);

    expect(result).toEqual(expected);
  });
});
