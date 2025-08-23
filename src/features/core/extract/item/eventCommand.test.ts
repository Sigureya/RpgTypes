import { test, expect, describe } from "vitest";
import { CHANGE_ARMORS, CHANGE_ITEMS, CHANGE_WEAPONS } from "@RpgTypes/rmmz";
import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "@RpgTypes/rmmz/eventCommand/commands/item";
import {
  makeCommandGainArmor,
  makeCommandGainArmorV,
  makeCommandLoseArmor,
  makeCommandLoseArmorV,
  makeCommandLoseItem,
} from "@RpgTypes/rmmz/eventCommand/commands/item";
import { extractItemChangeData } from "./eventCommand";
import type {
  ItemCommandParameterDirect,
  ItemCommandParameterVariable,
  ItemCommandTerms2,
} from "./types";

interface TestCase {
  caseName: string;
  command:
    | Command_ChangeArmors2
    | Command_ChangeItems2
    | Command_ChangeWeapons2;
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
    command: makeCommandGainArmorV({ armorId: 123, variableId: 33 }),
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
      operation: TERMS.gain,
      value: 5,
      direct: true,
      includesEquip: false,
    },
  },
  {
    caseName: "variable operand",
    command: makeCommandLoseArmorV({ armorId: 123, variableId: 56 }),
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
      includesEquip: false,
    },
  },
];

describe("extractItemChangeData", () => {
  testCase.forEach(({ caseName, command, expected }) => {
    test(caseName, () => {
      const result = extractItemChangeData(
        command,
        TERMS,
        (code) => commandNameTable[code]
      );
      expect(result).toEqual(expected);
    });
  });
});
