import type { Data_AnyGoodsUnion } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "./base";

export interface Rmmz_Enemy extends Rmmz_BattlerBase {
  makeDropItems(): Data_AnyGoodsUnion[];
}
