import { describe, expect, test } from "vitest";
import { replaceNoteTextByMap, replaceTextByMap } from "./utils";

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

describe("replaceNoteTextByMap", () => {
  test("replaces note text using map", () => {
    const map = new Map([
      ["foo", "bar"],
      ["baz", "qux"],
    ]);
    const data = { note: "<test:foo> and <test:baz> and <test:nochange>" };
    const result = replaceNoteTextByMap(data, map, "\n");
    expect(result).toBe("<test:bar>\n<test:qux>\n<test:nochange>\n and  and");
  });
});
