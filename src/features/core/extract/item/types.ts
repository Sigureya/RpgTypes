import type {
  CHANGE_ARMORS,
  CHANGE_ITEMS,
  CHANGE_WEAPONS,
  CONDITIONAL_BRANCH,
} from "@RpgTypes/rmmz";

type Code =
  | typeof CHANGE_ITEMS
  | typeof CHANGE_WEAPONS
  | typeof CHANGE_ARMORS
  | typeof CONDITIONAL_BRANCH;

export type ItemKind = "item" | "weapon" | "armor";

export interface ItemCommandParameter {
  itemKind: ItemKind;
  dataId: number;
  code: Code;
  paramIndex: number;
  commandKind: string;
  operation: string;
}

export interface ItemCommandTerms {
  gainItem(itemKind: ItemKind): string;
  loseItem(itemKind: ItemKind): string;
}
