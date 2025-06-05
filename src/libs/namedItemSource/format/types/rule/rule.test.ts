import { describe, test, expect } from "vitest";
import { complieFormatRule, replacePlaceholders } from "./rule";
import type { FormatRule, FormatPropety } from "./types";

interface ItemEffect {
  value1: number;
  value2: number;
  dataId: number;
  code: number;
}
interface Skill {
  id: number;
  name: string;
  effects: ItemEffect[];
}

const mockRule: FormatRule<ItemEffect> = {
  placeHolders: ["value1", "dataId", "code"],
};

describe("complieFormatRule", () => {
  describe("normal case", () => {
    test("compiles rule with string placeholders", () => {
      const compiled = complieFormatRule(mockRule);
      expect(compiled.properties).toEqual([
        { dataKey: "value1", placeHolder: "{value1}" },
        { dataKey: "dataId", placeHolder: "{dataId}" },
        { dataKey: "code", placeHolder: "{code}" },
      ] satisfies typeof compiled.properties);
    });

    test("compiles rule with number placeholders", () => {
      const ruleWithNumbers: FormatRule<ItemEffect> = {
        placeHolders: ["value1", "dataId"],
      };
      const compiled = complieFormatRule(ruleWithNumbers);
      expect(compiled.properties).toEqual([
        { dataKey: "value1", placeHolder: "{value1}" },
        { dataKey: "dataId", placeHolder: "{dataId}" },
      ] satisfies typeof compiled.properties);
    });
  });
  describe("", () => {
    const rule: FormatRule<Skill> = {
      placeHolders: [
        "id",
        "name",
        // "effects"
        // ↑ 型チェックによりコンパイルエラー
      ],
    };
    const compiledRule = complieFormatRule(rule);
    test("", () => {
      expect(compiledRule.properties).toEqual([
        { dataKey: "id", placeHolder: "{id}" },
        { dataKey: "name", placeHolder: "{name}" },
      ] satisfies typeof compiledRule.properties);
    });
  });
});

describe("replacePlaceholders", () => {
  const compiledRule = complieFormatRule(mockRule);
  const effect: ItemEffect = {
    value1: 42,
    value2: 1234,
    dataId: 1001,
    code: 78,
  };
  test("shold replace placeholders with corresponding values", () => {
    const baseText = "Value1: {value1}, DataId: {dataId}, Code: {code}";
    const result: string = replacePlaceholders(
      baseText,
      effect,
      compiledRule.properties
    );
    expect(result).toBe("Value1: 42, DataId: 1001, Code: 78");
  });

  test("returns base text if no placeholders match", () => {
    const baseText = "No placeholders here.";
    const result = replacePlaceholders(
      baseText,
      effect,
      compiledRule.properties
    );
    expect(result).toBe(baseText);
  });
});
