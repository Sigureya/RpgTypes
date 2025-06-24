import { describe, test, expect } from "vitest";
import type { Context2 } from "../parseContext";
import { sliceToken } from "./semantic";
import type { Token } from "./types";
describe("sliceToken", () => {
  test("", () => {
    const expected: Context2[] = [
      {
        head: { keyword: "param", value: "bool" },
        tokens: [
          { keyword: "type", value: "boolean" },
          { keyword: "text", value: "autoBattle" },
          { keyword: "default", value: "false" },
          { keyword: "on", value: "enabled" },
          { keyword: "off", value: "disabled" },
        ],
      },
      {
        head: { keyword: "param", value: "num" },
        tokens: [
          { keyword: "type", value: "number" },
          { keyword: "min", value: "0" },
          { keyword: "max", value: "1000" },
          { keyword: "digit", value: "3" },
          { keyword: "default", value: "123" },
        ],
      },
    ];
    const src: Token[] = [
      expected[0].head,
      ...expected[0].tokens,
      expected[1].head,
      ...expected[1].tokens,
    ];

    const result: Context2[] = sliceToken(src);
    expect(result).toEqual(expected);
  });
});
