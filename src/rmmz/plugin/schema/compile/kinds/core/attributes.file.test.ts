import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./paramAttributeBuild2";
import { compileAttributes2 } from "./paramAttributeBuild2";
import type { FileParam, FileArrayParam } from "./primitiveParams";

describe("compileAttributes - file", () => {
  test("minimum set", () => {
    const tokens: ParamSoruceRecord<FileParam> = {
      kind: "file",
      default: "path/to/file.txt",
    };
    const result = compileAttributes2(tokens);
    const expected: FileParam = {
      kind: "file",
      default: "path/to/file.txt",
      dir: "",
    };
    expect(result).toEqual(expected);
  });

  test("full set", () => {
    const tokens: ParamSoruceRecord<FileParam> = {
      kind: "file",
      default: "path/to/file.txt",
      text: "File Path",
      desc: "Description of the file path",
      parent: "Parent File",
      dir: "img",
    };
    const result = compileAttributes2(tokens);
    const expected: FileParam = {
      kind: "file",
      default: "path/to/file.txt",
      text: "File Path",
      desc: "Description of the file path",
      parent: "Parent File",
      dir: "img",
    };
    expect(result).toEqual(expected);
  });
});

describe("compileAttributes - file[]", () => {
  test("minimum set", () => {
    const tokens: ParamSoruceRecord<FileArrayParam> = {
      kind: "file[]",
      default: `["path/to/file1.txt", "path/to/file2.txt"]`,
    };
    const result = compileAttributes2(tokens);
    const expected: FileArrayParam = {
      kind: "file[]",
      default: ["path/to/file1.txt", "path/to/file2.txt"],
      dir: "",
    };
    expect(result).toEqual(expected);
  });

  test("empty array", () => {
    const tokens: ParamSoruceRecord<FileArrayParam> = {
      kind: "file[]",
      default: `[]`,
    };
    const result = compileAttributes2(tokens);
    const expected: FileArrayParam = {
      kind: "file[]",
      default: [],
      dir: "",
    };
    expect(result).toEqual(expected);
  });
});
