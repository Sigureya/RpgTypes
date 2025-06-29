import { describe, test, expect } from "vitest";
import type { Token } from "./parse/types/token";
import type { ComboParam, SelectParam } from "./primitiveParams";

describe.skip("compileAttributes - combo", () => {
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
    //    const result = compileAttributes(token);
    //    expect(result).toEqual(expected);
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
    // const result = compileAttributes(token);
    // expect(result).toEqual(expected);
  });
});

describe.skip("compileAttributes - select", () => {
  test("empty options", () => {
    const token: Token[] = [
      { keyword: "type", value: "select" },
      { keyword: "default", value: "option1" },
      { keyword: "text", value: "a select" },
      { keyword: "desc", value: "this is a select" },
      { keyword: "parent", value: "parentId" },
    ];

    const expected: SelectParam = {
      kind: "select",
      default: "option1",
      options: [],
      text: "a select",
      desc: "this is a select",
      parent: "parentId",
    };
    //    const result = compileAttributes(token);
    // expect(result).toEqual(expected);
  });
  test("with options", () => {
    const token: Token[] = [
      { keyword: "type", value: "select" },
      { keyword: "default", value: "option1" },
      { keyword: "text", value: "a select" },
      { keyword: "desc", value: "this is a select" },
      { keyword: "parent", value: "parentId" },
      { keyword: "option", value: "hayate" },
      { keyword: "value", value: "E2" },
      { keyword: "option", value: "komachi" },
      { keyword: "value", value: "E3" },
    ];

    const expected: SelectParam = {
      kind: "select",
      default: "option1",
      options: [
        { option: "hayate", value: "E2" },
        { option: "komachi", value: "E3" },
      ],
      text: "a select",
      desc: "this is a select",
      parent: "parentId",
    };
    //    const result = compileAttributes(token);
    //    expect(result).toEqual(expected);
  });
});
