import { describe, test, expect } from "vitest";
import { replaceNoteTextByMap } from ".";

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
