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
} from "@RpgTypes/rmmz/eventCommand/commands/item/types";
import { operateValueChangeGoods } from "@RpgTypes/rmmz/eventCommand/operateValue";
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

const xxx = (
  command: Command_ChangeArmors2 | Command_ChangeItems2 | Command_ChangeWeapons2
) => {
  return operateValueChangeGoods(command, {
    directValue: (operand) => ({ operand: "direct", value: operand }),
    variableValue: (operand) => ({ operand: "direct", value: operand }),
    negativeValue: (value) => ({
      kind: TABLE[command.code],
      dataId: command.parameters[1],
      value: value.value,
      operation: "loseItem",
    }),
    postiveValue: (value) => ({}),
  });
};
