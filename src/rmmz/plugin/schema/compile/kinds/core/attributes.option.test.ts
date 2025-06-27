import { describe, test, expect } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type { ComboParam } from "./primitiveParams";

describe("compileAttributes - combo", () => {
  test("empty options", () => {
    const token: Token[] = [
      { keyword: "type", value: "combo" },
      { keyword: "default", value: "option1" },
      { keyword: "text", value: "a combo" },
      { keyword: "desc", value: "this is a combo" },
      { keyword: "parent", value: "parentId" },
    ];

    const expected: ComboParam = {
      kind: "combo",
      default: "option1",
      options: [],
      text: "a combo",
      desc: "this is a combo",
      parent: "parentId",
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
  test("with options", () => {
    const token: Token[] = [
      { keyword: "type", value: "combo" },
      { keyword: "default", value: "option1" },
      { keyword: "text", value: "a combo" },
      { keyword: "desc", value: "this is a combo" },
      { keyword: "parent", value: "parentId" },
      { keyword: "option", value: "a" },
      { keyword: "option", value: "b" },
    ];

    const expected: ComboParam = {
      kind: "combo",
      default: "option1",
      options: ["a", "b"],
      text: "a combo",
      desc: "this is a combo",
      parent: "parentId",
    };
    const result = compileAttributes(token);
    expect(result).toEqual(expected);
  });
});
