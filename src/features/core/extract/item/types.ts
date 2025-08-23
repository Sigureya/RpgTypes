import type {
  CHANGE_ARMORS,
  CHANGE_ITEMS,
  CHANGE_WEAPONS,
  CONDITIONAL_BRANCH,
} from "@RpgTypes/rmmz";

export type ItemCommandCode =
  | typeof CHANGE_ITEMS
  | typeof CHANGE_WEAPONS
  | typeof CHANGE_ARMORS
  | typeof CONDITIONAL_BRANCH;

export type ItemKind = "item" | "weapon" | "armor";

export interface ItemCommandParameter {
  itemKind: ItemKind;
  dataId: number;
  code: ItemCommandCode;
  commandNameMZ: string;
  operation: string;
  includesEquip?: boolean;
}

export interface ItemCommandParameterDirect extends ItemCommandParameter {
  direct: true;
  value: number;
}

export interface ItemCommandParameterVariable extends ItemCommandParameter {
  direct: false;
  variableId: number;
}

export interface ItemCommandTerms2 {
  gain: string;
  lose: string;
  unknown: string;
}
