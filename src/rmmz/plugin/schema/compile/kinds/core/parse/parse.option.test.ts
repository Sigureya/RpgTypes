import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";
import type { ParsedPlugin } from "./types";

describe("parsePlugin", () => {
  test("select with options and values, default is one of values, option text is same as value", () => {
    const tokens: string[] = [
      "/*:",

      "@param list",
      "@type select",
      "@default L",
      "@option tubasa",
      "@value L",
      "@option komachi",
      "@value Z",
      "@option east-i",
      "*/",
    ];
    const expected: Pick<ParsedPlugin, "params"> = {
      params: [
        {
          name: "list",
          attr: {
            kind: "select",
            default: "L",
          },
          options: [
            { option: "tubasa", value: "L" },
            { option: "komachi", value: "Z" },
            { option: "east-i", value: "east-i" },
          ],
        },
      ],
    };
    const result: ParsedPlugin = parsePlugin(tokens.join("\n"));
    expect(result.params).toEqual(expected.params);
  });

  test("select with options and values, default is one of values, option text is different from value", () => {
    const tokens: string[] = [
      "/*:",
      "@param list",
      "@type select",
      "@default 300",
      "@option nozomi",
      "@value 300",
      "@option hikari",
      "@text tokaido",
      "@value 100",
      "@option kodama",
      "@value 0",
      "*/",
    ];
    const expected: Pick<ParsedPlugin, "params"> = {
      params: [
        {
          name: "list",
          attr: {
            text: "tokaido",
            kind: "select",
            default: "300",
          },
          options: [
            { option: "nozomi", value: "300" },
            { option: "hikari", value: "100" },
            { option: "kodama", value: "0" },
          ],
        },
      ],
    };
    const result: ParsedPlugin = parsePlugin(tokens.join("\n"));
    expect(result.params).toMatchObject(expected.params);
  });
  test("combo with options, default is one of option texts, option text is same as value", () => {
    const tokens: string[] = [
      "/*:",
      "@param list",
      "@type combo",
      "@option hayabusa",
      "@option komachi",
      "@option kagayaki",
      "@default ",
      "*/",
    ];
    const expected: Pick<ParsedPlugin, "params"> = {
      params: [
        {
          name: "list",
          attr: {
            kind: "combo",
            default: "",
          },
          options: [
            { option: "hayabusa", value: "hayabusa" },
            { option: "komachi", value: "komachi" },
            { option: "kagayaki", value: "kagayaki" },
          ],
        },
      ],
    };
    const result: ParsedPlugin = parsePlugin(tokens.join("\n"));
    expect(result.params).toEqual(expected.params);
  });
});
