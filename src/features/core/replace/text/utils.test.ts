import { describe, expect, test } from "vitest";
import { replaceTextByMap } from "./utils";

describe("replaceTextByMap", () => {
  test("replaces text using map", () => {
    const map = new Map([
      ["Hello", "Hi"],
      ["World", "Earth"],
    ]);
    expect(replaceTextByMap("Hello", map)).toBe("Hi");
    expect(replaceTextByMap("World", map)).toBe("Earth");
    expect(replaceTextByMap("NoChange", map)).toBe("NoChange");
  });

  test("trims end spaces before lookup and after replacement", () => {
    const map = new Map([
      ["Hello", "Hi"],
      ["World", "Earth"],
    ]);
    expect(replaceTextByMap("Hello   ", map)).toBe("Hi");
    expect(replaceTextByMap("World   ", map)).toBe("Earth");
    expect(replaceTextByMap("NoChange   ", map)).toBe("NoChange");
  });
  test("xxx", () => {
    const map = new Map([["cat", "猫"]]);
    expect(replaceTextByMap("cat", map)).toBe("猫");
    expect(replaceTextByMap("dog", map)).toBe("dog");
  });
});
