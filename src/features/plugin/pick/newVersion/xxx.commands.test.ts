import { describe, expect, test } from "vitest";
import type {
  ParamKinds,
  PluginCommandSchemaArray,
  PluginStructSchemaArray,
} from "@RpgTypes/rmmz/plugin";
import { collectStructsByKinds } from "./collectStructs/collectStructs";
import type { PluginParamGroups } from "./filter/types";
import { filterPluginCommand } from "./xxx";

const mockStructs = {
  drawCard: {
    struct: "DrawCard",
    params: [{ name: "amount", attr: { kind: "number", default: 1 } }],
  },
  dealDamage: {
    struct: "DealDamage",
    params: [{ name: "amount", attr: { kind: "number", default: 1 } }],
  },
  dealDamageX: {
    struct: "DealDamageX",
    params: [{ name: "xValue", attr: { kind: "variable", default: 0 } }],
  },
  gainLife: {
    struct: "GainLife",
    params: [{ name: "target", attr: { kind: "struct", struct: "drawCard" } }],
  },
  gainLifeX: {
    struct: "GainLifeX",
    params: [{ name: "xValue", attr: { kind: "variable", default: 0 } }],
  },
  salvageCard: {
    struct: "SalvageCard",
    params: [
      { name: "amount", attr: { kind: "number", default: 1 } },
      {
        name: "targetType",
        attr: { kind: "string[]", default: ["creature", "land"] },
      },
    ],
  },
  discard: {
    struct: "Discard",
    params: [
      { name: "amount", attr: { kind: "number", default: 1 } },
      {
        name: "target",
        attr: {
          kind: "select",
          options: [
            { option: "自分", value: "self" },
            { option: "相手", value: "opponent" },
            { option: "選択", value: "select" },
          ],
          default: "opponent",
        },
      },
    ],
  },
} as const satisfies Record<string, PluginStructSchemaArray>;

const mockCommands = {
  fireAndIce: {
    command: "FireAndIce",
    args: [
      { name: "damage", attr: { kind: "struct", struct: "DealDamage" } },
      { name: "draw", attr: { kind: "struct", struct: "DrawCard" } },
    ],
  },
  liteAndDark: {
    command: "LiteAndDark",
    args: [
      { name: "gainLife", attr: { kind: "struct", struct: "GainLife" } },
      { name: "salvage", attr: { kind: "struct", struct: "SalvageCard" } },
    ],
  },
  warAndPeace: {
    command: "WarAndPeace",
    args: [
      { name: "damageX", attr: { kind: "struct", struct: "DealDamageX" } },
      { name: "gainLifeX", attr: { kind: "struct", struct: "GainLifeX" } },
    ],
  },
} as const satisfies Record<string, PluginCommandSchemaArray>;

interface TestCase {
  input: { kinds: ParamKinds[] };
  expected: PluginParamGroups[];
}

const runTestCase = (
  testCase: TestCase[],
  structs: PluginStructSchemaArray[]
) => {
  const commands: PluginCommandSchemaArray[] = Object.values(mockCommands);
  describe("filterPluginCommand", () => {
    test.each(testCase)("input: $input", ({ input, expected }) => {
      const c = collectStructsByKinds(structs, input.kinds);
      const result: PluginParamGroups[] = filterPluginCommand(commands, {
        singleKinds: c.targetKinds,
        arrayKinds: c.targetArrayKinds,
        structNames: c.matchedStructs,
      });
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    input: { kinds: [] },
    expected: [],
  },
  {
    input: { kinds: ["number"] },
    expected: [
      {
        single: [],
        array: [],
        structArray: [],
        struct: [
          {
            attr: { kind: "struct", struct: "DealDamage" },
            name: "damage",
          },
          {
            attr: { kind: "struct", struct: "DrawCard" },
            name: "draw",
          },
        ],
      },
      {
        array: [],
        single: [],
        structArray: [],
        struct: [
          {
            attr: { kind: "struct", struct: "SalvageCard" },
            name: "salvage",
          },
        ],
      },
    ],
  },
];

runTestCase(testCases, Object.values(mockStructs));
