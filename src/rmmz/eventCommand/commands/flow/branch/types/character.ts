import type { Direction8 } from "@RpgTypes/rmmz/utils";
import type { BranchCodeTable } from "./branch";

export type BranchParam_Character = [
  branchCode: BranchCodeTable["CHARACTER"],
  characterId: number,
  direction: Direction8,
];
