import { describe, test, expect } from "vitest";
import { compileOptionItems } from "./selectOption";
import type { OptionItem, Token } from "./types/selectOption";

interface TokenOfOptionItem extends Token {
  keyword: keyof OptionItem;
  value: string;
}

describe("compileOptionItems", () => {
  test("single option without value uses option as value", () => {
    const tokens: TokenOfOptionItem[] = [
      {
        keyword: "option",
        value: "a",
      },
    ];
    const expected: OptionItem[] = [
      {
        option: "a",
        value: "a",
      },
    ];
    const result = compileOptionItems(tokens);
    expect(result).toEqual(expected);
  });
  test("single option with value", () => {
    const tokens: TokenOfOptionItem[] = [
      { keyword: "option", value: "nozomi" },
      { keyword: "value", value: "300" },
    ];
    const expected: OptionItem[] = [
      {
        option: "nozomi",
        value: "300",
      },
    ];
    const result = compileOptionItems(tokens);
    expect(result).toEqual(expected);
  });
  test("multiple options with values", () => {
    const tokens: TokenOfOptionItem[] = [
      { keyword: "option", value: "nozomi" },
      { keyword: "value", value: "300" },
      { keyword: "option", value: "hikari" },
      { keyword: "value", value: "100" },
    ];
    const expected: OptionItem[] = [
      { option: "nozomi", value: "300" },
      { option: "hikari", value: "100" },
    ];
    const result = compileOptionItems(tokens);
    expect(result).toEqual(expected);
  });
  test("multiple options, extra value tokens are ignored", () => {
    const tokens: TokenOfOptionItem[] = [
      { keyword: "option", value: "nozomi" },
      { keyword: "value", value: "500" },
      { keyword: "option", value: "hikari" },
      { keyword: "value", value: "700" },
      { keyword: "value", value: "E4" },
    ];
    const expected: OptionItem[] = [
      { option: "nozomi", value: "500" },
      { option: "hikari", value: "700" },
    ];
    const result = compileOptionItems(tokens);
    expect(result).toEqual(expected);
  });
});
