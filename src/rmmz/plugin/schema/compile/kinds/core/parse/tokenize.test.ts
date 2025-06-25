import { describe, test, expect } from "vitest";
import { tokenize } from "./toknize";
import type { Token } from "./types/token";

describe("tokenize", () => {
  test("empty", () => {
    const result: Token[] = tokenize("");
    expect(result).toEqual([]);
  });
  test("non token", () => {
    const src: string = "quick brown fox jumps over the lazy dog";
    const result: Token[] = tokenize(src);
    expect(result).toEqual([]);
  });

  test("tokenize", () => {
    const src: string[] = [
      "@param bool",
      "@type boolean",
      "@text autoBattle",
      "@default false",
      "@on enabled",
      "@off disabled",

      "@param num",
      "@type number",
      "@default 0",
    ];
    const expected: Token[] = [
      { keyword: "param", value: "bool" },
      { keyword: "type", value: "boolean" },
      { keyword: "text", value: "autoBattle" },
      { keyword: "default", value: "false" },
      { keyword: "on", value: "enabled" },
      { keyword: "off", value: "disabled" },

      { keyword: "param", value: "num" },
      { keyword: "type", value: "number" },
      { keyword: "default", value: "0" },
    ];
    const result: Token[] = tokenize(src.join("\n"));
    expect(result).toEqual(expected);
  });
});
