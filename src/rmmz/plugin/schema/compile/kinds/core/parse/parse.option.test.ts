import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parseV2";
import type { ParsedPlugin } from "./types";

describe("parsePlugin", () => {
  test("", () => {
    const tokens: string[] = [
      "@param list",
      "@type select",
      "@default L",
      "@option tubasa",
      "@value L",
      "@option komachi",
      "@value Z",
      "@option east-i",
    ];
    const expected: ParsedPlugin = {
      meta: {},
      helpLines: [],
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
      commands: [],
    };
    const result: ParsedPlugin = parsePlugin(tokens.join("\n"));
    expect(result).toEqual(expected);
  });

  test("", () => {
    const tokens: string[] = [
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
    ];
    const expected: ParsedPlugin = {
      meta: {},
      helpLines: [],
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
      commands: [],
    };
    const result: ParsedPlugin = parsePlugin(tokens.join("\n"));
    expect(result).toEqual(expected);
  });
  test("", () => {
    const tokens: string[] = [
      "@param list",
      "@type combo",
      "@option hayabusa",
      "@option komachi",
      "@option kagayaki",
      "@default ",
    ];
    const expected: ParsedPlugin = {
      meta: {},
      helpLines: [],
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
      commands: [],
    };
    const result: ParsedPlugin = parsePlugin(tokens.join("\n"));
    expect(result).toEqual(expected);
  });
});
