import type { Data_AnyGoodsUnion } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor } from "./battler";
import type { Rmmz_Unit } from "./unit";
import type { Rmmz_UnitPlayer } from "./unit/player";

export interface Rmmz_Party extends Rmmz_Unit<Rmmz_Actor>, Rmmz_UnitPlayer {
  canInput(): boolean;
  gainItem(goods: Data_AnyGoodsUnion, amount: number): void;
  gainItem(
    goods: Data_AnyGoodsUnion,
    amount: number,
    includeEquip: boolean,
  ): void;
}
