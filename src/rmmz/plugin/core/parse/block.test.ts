import { describe, test, expect, it } from "vitest";
import type { Block } from "./block";
import { splitBlock } from "./block";

describe("splitBlock", () => {
  describe("", () => {
    const lines: string[] = [
      "/*:",
      "@plugindesc mock",
      "*/",

      "/*~struct~Vector2:ja",
      "@param x",
      "@type number",
      "@default 0",
      "@param y",
      "@type number",
      "@default 0",
      "*/",
    ];

    const expected: Block = {
      bodies: [
        {
          lines: ["@plugindesc mock"],
        },
      ],
      structs: [
        {
          struct: "Vector2",
          locale: "ja",
          lines: [
            "@param x",
            "@type number",
            "@default 0",
            "@param y",
            "@type number",
            "@default 0",
          ],
        },
      ],
    };

    const block: string = lines.join("\n");
    const result: Block = splitBlock(block);
    test("should split block into bodies", () => {
      expect(result.bodies).toEqual(expected.bodies);
    });
    test("should split block into structs", () => {
      expect(result.structs).toEqual(expected.structs);
    });
  });
  describe("noname struct", () => {
    it("is not allowed", () => {
      const lines: string[] = [
        "/*:",
        "@plugindesc mock",
        "*/",

        "/*~struct~:ja",
        "@param x",
        "@type number",
        "@default 0",
        "@param y",
        "@type number",
        "@default 0",
        "*/",
      ];
      const block: string = lines.join("\n");
      const result: Block = splitBlock(block);
      expect(result.structs).toEqual([]);
      expect(result.bodies).toEqual([
        {
          lines: ["@plugindesc mock"],
        },
      ]);
    });
  });
});
