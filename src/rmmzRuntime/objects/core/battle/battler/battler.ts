import type { ParamID } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "./base";

export interface Rmmz_Battler_Poitns {
  gainHp(value: number, allowDeath?: boolean): void;
  gainMp(value: number): void;
  gainTp(value: number): void;
  loseHp(value: number): void;
  loseMp(value: number): void;
  loseTp(value: number): void;
}

export interface Rmmz_Battler extends Rmmz_BattlerBase, Rmmz_Battler_Poitns {
  performCollapse(): void;
  clearResult(): void;
  recoverAll(): void;
  param<P extends number = ParamID>(paramId: P): number;
  turnCount(): number;
}
