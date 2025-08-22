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

export interface ItemCommandParameter {
  kind: "item" | "weapon" | "armor";
  dataId: number;
  code: Code;
  paramIndex: number;
}
