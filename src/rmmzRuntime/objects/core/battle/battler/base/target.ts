import type { Data_State } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_Battler_Targetable {
  states(): Data_State[];
  get tgr(): number;
  isAlive(): boolean;
  isDead(): boolean;
}
