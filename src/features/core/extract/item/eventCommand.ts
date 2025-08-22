import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz";
import { CHANGE_ARMORS, CHANGE_ITEMS, CHANGE_WEAPONS } from "@RpgTypes/rmmz";
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

const xxxx = (
  command: Command_ChangeWeapons | Command_ChangeArmors | Command_ChangeItems,
  terms: ItemCommandTerms
) => {
  //    if(command.parameters[0] ===OPErati)
};

const changeWeapon = (
  command: Command_ChangeWeapons,
  terms: ItemCommandTerms
) => {
  return {
    itemKind: "weapon",
    dataId: command.parameters[1],
    code: command.code,
    paramIndex: 0,
    commandKind: "changeWeapons",
    operation: operation(value, "weapon", terms),
  } as ItemCommandParameter;
};
