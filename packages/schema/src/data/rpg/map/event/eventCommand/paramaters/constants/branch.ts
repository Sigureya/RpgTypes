import type { ValueOf } from "./valueOf";

export type BranchCodeTable = {
  SWITCH: 0;
  VARIABLE: 1;
  SELF_SWITCH: 2;
  TIMER: 3;
  ACTOR: 4;
  ENEMY: 5;
  CHARACTER: 6;
  GOLD: 7;
  ITEM: 8;
  WEAPON: 9;
  ARMOR: 10;
  BUTTON: 11;
  SCRIPT: 12;
  VEHICLE: 13;
};
export type BranchCode = ValueOf<BranchCodeTable>;
