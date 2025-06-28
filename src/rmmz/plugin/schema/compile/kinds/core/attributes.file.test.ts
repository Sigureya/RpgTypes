import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { TokenOf } from "./parse/types/tokenOf";
import type { FileParam, FileArrayParam } from "./primitiveParams";

describe("compileAttributes - file", () => {
  test("type only", () => {
    const tokens: TokenOf<FileParam>[] = [{ keyword: "type", value: "file" }];
    const expected: FileParam = {
      kind: "file",
      default: "",
      dir: "",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
  test("最小セット", () => {
    const tokens: TokenOf<FileParam>[] = [
      { keyword: "type", value: "file" },
      { keyword: "default", value: "file.txt" },
      { keyword: "dir", value: "img" },
    ];
    const expected: FileParam = {
      kind: "file",
      default: "file.txt",
      dir: "img",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });

  test("フルセット", () => {
    const tokens: TokenOf<FileParam>[] = [
      { keyword: "type", value: "file" },
      { keyword: "default", value: "file.txt" },
      { keyword: "text", value: "a file" },
      { keyword: "desc", value: "this is a file" },
      { keyword: "dir", value: "img" },
      { keyword: "parent", value: "parentId" },
    ];
    const expected: FileParam = {
      kind: "file",
      default: "file.txt",
      text: "a file",
      desc: "this is a file",
      dir: "img",
      parent: "parentId",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
});

describe("compileAttributes - file[]", () => {
  test("最小セット", () => {
    const tokens: TokenOf<FileArrayParam>[] = [
      { keyword: "type", value: "file[]" },
      { keyword: "default", value: `["file1.txt", "file2.txt"]` },
      { keyword: "dir", value: "img" },
    ];
    const expected: FileArrayParam = {
      kind: "file[]",
      default: ["file1.txt", "file2.txt"],
      dir: "img",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });

  test("空の配列", () => {
    const tokens: TokenOf<FileArrayParam>[] = [
      { keyword: "type", value: "file[]" },
      { keyword: "default", value: `[]` },
      { keyword: "dir", value: "audio" },
    ];
    const expected: FileArrayParam = {
      kind: "file[]",
      default: [],
      dir: "audio",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
});
