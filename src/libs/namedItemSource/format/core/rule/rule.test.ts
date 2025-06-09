import { describe, test, expect } from "vitest";
import { DEFAULT_LABEL, DEFAULT_TEXT } from "./constants";
import type { FallbackForamt, FormatRule, FormatRuleCompiled } from "./core";
import { compileFormatRule, applyPlaceholdersToText } from "./rule";

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
const mockEffectRule: FormatRule<ItemEffect> = {
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

interface TestCase_ComplieFormatRule<T> {
  caseName: string;
  rule: FormatRule<T>;
  expected: Pick<FormatRuleCompiled<T>, "itemMappers" | "properties">;
}
const testComplieFormatRule = <T>({
  caseName,
  expected,
  rule,
}: TestCase_ComplieFormatRule<T>) => {
  describe(caseName, () => {
    const compiled = compileFormatRule(rule);
    test("compiles rule with correct properties", () => {
      expect(compiled.properties).toEqual(
        expected.properties satisfies typeof compiled.properties
      );
    });
    test("compiles rule with correct item mappers", () => {
      expect(compiled.itemMappers).toEqual(
        expected.itemMappers satisfies typeof compiled.itemMappers
      );
    });
  });
};

const runTestComplieFormatRule = <T>(
  caseName: string,
  cases: TestCase_ComplieFormatRule<T>[]
) => {
  describe(caseName, () => {
    cases.forEach((testCase) => {
      testComplieFormatRule(testCase);
    });
  });
};

describe("compileFormatRule", () => {
  runTestComplieFormatRule<ItemEffect>("ItemEffect", [
    {
      caseName: "empty rule compiles to empty properties",
      rule: {},
      expected: { itemMappers: [], properties: { numbers: [], strings: [] } },
    },
    {
      caseName: "compiles rule with string placeholders",
      rule: mockEffectRule,
      expected: {
        itemMappers: [
          { dataIdKey: "dataId", kindKey: "code", placeHolder: "{name}" },
        ],
        properties: {
          numbers: [
            { dataKey: "value1", placeHolder: "{value1}" },
            { dataKey: "dataId", placeHolder: "{dataId}" },
            { dataKey: "code", placeHolder: "{code}" },
          ],
          strings: [],
        },
      },
    },
    {
      caseName: "compiles rule with number placeholders",
      rule: {
        itemMapper: {
          placeHolder: "name",
          dataIdKey: "dataId",
          kindKey: "code",
        },
        placeHolder: {
          numbers: ["value1", "dataId"],
        },
      },
      expected: {
        itemMappers: [
          { dataIdKey: "dataId", kindKey: "code", placeHolder: "{name}" },
        ],
        properties: {
          numbers: [
            { dataKey: "value1", placeHolder: "{value1}" },
            { dataKey: "dataId", placeHolder: "{dataId}" },
          ],
          strings: [],
        },
      },
    },
    {
      caseName: "compiles rule with no placeholders",
      rule: {
        itemMapper: {
          placeHolder: "name",
          dataIdKey: "dataId",
          kindKey: "code",
        },
        placeHolder: {},
      },
      expected: {
        itemMappers: [
          { dataIdKey: "dataId", kindKey: "code", placeHolder: "{name}" },
        ],
        properties: {
          numbers: [],
          strings: [],
        },
      },
    },
  ]);

  runTestComplieFormatRule<Skill>("Skill", [
    {
      caseName: "compiles rule for Skill type with valid property keys",
      rule: {
        placeHolder: {
          numbers: ["id"],
          strings: ["name"],
        },
      },
      expected: {
        itemMappers: [],
        properties: {
          numbers: [{ dataKey: "id", placeHolder: "{id}" }],
          strings: [{ dataKey: "name", placeHolder: "{name}" }],
        },
      },
    },
  ]);
});

describe("replacePlaceholders", () => {
  describe("rule effect", () => {
    const compiledRule = compileFormatRule(mockEffectRule);
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
  describe("rule skill", () => {
    const mockSkillRule: FormatRule<Skill> = {
      placeHolder: {
        numbers: ["id"],
        strings: ["name"],
      },
    };
    const compiledSkillRule = compileFormatRule(mockSkillRule);
    const skill: Skill = {
      id: 101,
      name: "Fireball",
      effects: [],
    };
    test("should replace skill placeholders with corresponding values", () => {
      const baseText = "Skill ID: {id}, Skill Name: {name}";
      const result: string = applyPlaceholdersToText(
        baseText,
        skill,
        compiledSkillRule
      );
      expect(result).toBe("Skill ID: 101, Skill Name: Fireball");
    });
  });

  describe("fallbackFormat", () => {
    const fallbackFormat: FallbackForamt = {
      text: "fallback text A",
      label: "fallback label B",
    };
    test("assigns provided fallbackFormat when specified", () => {
      const rule: FormatRule<ItemEffect> = {
        fallbackFormat: fallbackFormat,
      };
      const compiled = compileFormatRule(rule);
      expect(compiled.fallbackFormat).toEqual(fallbackFormat);
      expect(compiled.fallbackFormat).not.toBe(fallbackFormat);
    });
    test("assigns default fallbackFormat when not specified", () => {
      const rule: FormatRule<ItemEffect> = {};
      const compiled = compileFormatRule(rule);
      expect(compiled.fallbackFormat.label).toBe(DEFAULT_LABEL);
      expect(compiled.fallbackFormat.text).toBe(DEFAULT_TEXT);
    });
    test("generates fallbackFormat with placeholders", () => {
      const rule: FormatRule<ItemEffect> = {
        placeHolder: {
          numbers: ["value1", "dataId"],
        },
      };
      const compiled = compileFormatRule(rule);
      expect(compiled.fallbackFormat.label).toBe(DEFAULT_LABEL);
      expect(compiled.fallbackFormat.text).not.toBe("");
      expect(compiled.fallbackFormat.text).not.toBe(DEFAULT_TEXT);
    });
  });
});
