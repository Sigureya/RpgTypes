import { describe, test, expect } from "vitest";
import { compileFormatRule, applyPlaceholdersToText } from "./rule";
import type { FormatRule } from "./types";

// Test data interfaces
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

// Mock rule for ItemEffect
const mockRule: FormatRule<ItemEffect> = {
  placeHolder: {
    numbers: ["value1", "dataId", "code"],
  },
  itemMapper: {
    placeHolder: "name",
    dataIdKey: "dataId",
    kindKey: "code",
  },
  itemMappers: [],
};

describe("complieFormatRule", () => {
  describe("Normal cases", () => {
    test("compiles rule with string placeholders", () => {
      const compiled = compileFormatRule(mockRule);
      expect(compiled.properties.numbers).toEqual([
        { dataKey: "value1", placeHolder: "{value1}" },
        { dataKey: "dataId", placeHolder: "{dataId}" },
        { dataKey: "code", placeHolder: "{code}" },
      ] satisfies typeof compiled.properties.numbers);
    });

    test("compiles rule with number placeholders", () => {
      const ruleWithNumbers: FormatRule<ItemEffect> = {
        itemMapper: {
          placeHolder: "name",
          dataIdKey: "dataId",
          kindKey: "code",
        },
        itemMappers: [],
        placeHolder: {
          numbers: ["value1", "dataId"],
        },
      };
      const compiled = compileFormatRule(ruleWithNumbers);
      expect(compiled.properties.numbers).toEqual([
        { dataKey: "value1", placeHolder: "{value1}" },
        { dataKey: "dataId", placeHolder: "{dataId}" },
      ] satisfies typeof compiled.properties.numbers);
    });
  });

  describe("Compiles rule for Skill type with valid property keys", () => {
    const rule: FormatRule<Skill> = {
      itemMapper: {
        placeHolder: "name",
        dataIdKey: "id",
        kindKey: "id",
      },
      itemMappers: [],
      placeHolder: {
        numbers: ["id"],
        strings: ["name"],
      },
    };
    const compiledRule = compileFormatRule(rule);
    test("compiles rule for Skill type with valid property keys", () => {
      expect(compiledRule.properties.numbers).toEqual([
        { dataKey: "id", placeHolder: "{id}" },
        // { dataKey: "name", placeHolder: "{name}" },
      ] satisfies typeof compiledRule.properties.numbers);
    });
  });
});

describe("replacePlaceholders", () => {
  const compiledRule = compileFormatRule(mockRule);
  const effect: ItemEffect = {
    value1: 42,
    value2: 1234,
    dataId: 1001,
    code: 78,
  };

  test("should replace placeholders with corresponding values", () => {
    const baseText = "Value1: {value1}, DataId: {dataId}, Code: {code}";
    const result: string = applyPlaceholdersToText(
      baseText,
      effect,
      compiledRule
    );
    expect(result).toBe("Value1: 42, DataId: 1001, Code: 78");
  });

  test("should return base text if no placeholders match", () => {
    const baseText = "No placeholders here.";
    const result = applyPlaceholdersToText(baseText, effect, compiledRule);
    expect(result).toBe(baseText);
  });
});
