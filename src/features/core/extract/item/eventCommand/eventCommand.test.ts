import { test, expect, describe } from "vitest";
import {
  CHANGE_ARMORS,
  CHANGE_ITEMS,
  CHANGE_WEAPONS,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change";
import {
  makeCommandGainArmor,
  makeCommandGainArmorByVariable,
  makeCommandLoseArmor,
  makeCommandLoseArmorByVariable,
  makeCommandLoseItem,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change";
import { extractItemChangeData, extractItemCommands } from "./eventCommand";
import type {
  ItemCommandParameterDirect,
  ItemCommandParameterVariable,
  ItemCommandTerms2,
} from "./types";

interface TestCase {
  caseName: string;
  command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons;
  expected: ItemCommandParameterDirect | ItemCommandParameterVariable;
}
const TERMS: ItemCommandTerms2 = {
  gain: "Gain",
  lose: "Lose",
  unknown: "???",
};
const commandNameTable = {
  [CHANGE_ARMORS]: "changeArmors",
  [CHANGE_ITEMS]: "changeItems",
  [CHANGE_WEAPONS]: "changeWeapons",
  [111]: "",
};

const testCase: TestCase[] = [
  {
    caseName: "direct operand",
    command: makeCommandGainArmor({ armorId: 123, value: 5 }),
    expected: {
      itemKind: "armor",
      dataId: 123,
      code: CHANGE_ARMORS,
      commandNameMZ: commandNameTable[CHANGE_ARMORS],
      operation: TERMS.gain,
      value: 5,
      direct: true,
      includesEquip: false,
    },
  },
  {
    caseName: "variable operand",
    command: makeCommandGainArmorByVariable({ armorId: 123, variableId: 33 }),
    expected: {
      itemKind: "armor",
      dataId: 123,
      code: CHANGE_ARMORS,
      commandNameMZ: commandNameTable[CHANGE_ARMORS],
      operation: TERMS.gain,
      variableId: 33,
      direct: false,
      includesEquip: false,
    },
  },
  {
    caseName: "lose armor direct operand",
    command: makeCommandLoseArmor({ armorId: 123, value: 5 }),
    expected: {
      itemKind: "armor",
      dataId: 123,
      code: CHANGE_ARMORS,
      commandNameMZ: commandNameTable[CHANGE_ARMORS],
      operation: TERMS.lose,
      value: 5,
      direct: true,
      includesEquip: false,
    },
  },
  {
    caseName: "variable operand",
    command: makeCommandLoseArmorByVariable({ armorId: 123, variableId: 56 }),
    expected: {
      itemKind: "armor",
      dataId: 123,
      code: CHANGE_ARMORS,
      commandNameMZ: commandNameTable[CHANGE_ARMORS],
      operation: TERMS.lose,
      variableId: 56,
      direct: false,
      includesEquip: false,
    },
  },

  {
    caseName: "item lose operation",
    command: makeCommandLoseItem({
      itemId: 22,
      value: 3,
    }),
    expected: {
      itemKind: "item",
      dataId: 22,
      code: CHANGE_ITEMS,
      commandNameMZ: commandNameTable[CHANGE_ITEMS],
      operation: TERMS.lose,
      value: 3,
      direct: true,
    },
  },
];

describe("extractItemChangeData", () => {
  testCase.forEach(({ caseName, command, expected }) => {
    describe(caseName, () => {
      test("extractItemChangeData", () => {
        const result = extractItemChangeData(
          command,
          TERMS,
          (code) => commandNameTable[code],
        );
        expect(result).toEqual(expected);
      });
      test("extractItemCommands", () => {
        const result = extractItemCommands(
          [command],
          TERMS,
          (code) => commandNameTable[code],
        );
        expect(result).toEqual([expected]);
      });
    });
  });
});
