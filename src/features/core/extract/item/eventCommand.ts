import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz";
import { CHANGE_ARMORS, CHANGE_ITEMS, CHANGE_WEAPONS } from "@RpgTypes/rmmz";
import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "@RpgTypes/rmmz/eventCommand/commands/item";
import { operateValueChangeGoods } from "@RpgTypes/rmmz/eventCommand/operateValue";
import type { OperateValueHandlers } from "@RpgTypes/rmmz/eventCommand/runtime/operateValue/types";
import type { ItemCommandParameter, ItemCommandTerms, ItemKind } from "./types";

const operation = (
  value: number,
  kind: ItemKind,
  terms: ItemCommandTerms
): string => (value > 0 ? terms.gainItem(kind) : terms.loseItem(kind));

const TABLE = {
  [CHANGE_ITEMS]: "item",
  [CHANGE_WEAPONS]: "weapon",
  [CHANGE_ARMORS]: "armor",
} as const;

const GAIN_ITEM_V = 0 as const;

interface OperandValue {
  operand: "direct" | "variable";
  value: number;
  direct: boolean;
}

interface ValueChange {
  value: number;
  operation: "gainItem" | "loseItem";
}

export const changeGoods = (
  command:
    | Command_ChangeArmors2
    | Command_ChangeItems2
    | Command_ChangeWeapons2,
  terms: ItemCommandTerms
) => {
  const { gainItem, value, operand } = operateValueChangeGoods(command, {
    directValue: (operand): OperandValue => ({
      operand: "direct",
      value: operand,
      direct: true,
    }),
    variableValue: (operand): OperandValue => ({
      operand: "variable",
      value: operand,
      direct: false,
    }),
    negativeValue: (value: OperandValue) => ({
      value: value.value,
      gainItem: false,
      operand: value.operand,
    }),
    postiveValue: (value: OperandValue) => ({
      value: value.value,
      gainItem: true,
      operand: value.operand,
    }),
  });

  const itemKind = TABLE[command.code];
  const xx = gainItem ? terms.gainItem(itemKind) : terms.loseItem(itemKind);
  return {
    //    commandKind: operation,
    //    operation: operation,
    value: value,
    dataId: command.parameters[1],
    code: command.code,
    itemKind: itemKind,
  };
};
