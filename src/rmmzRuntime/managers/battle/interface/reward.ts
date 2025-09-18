import type { Data_AnyGoodsUnion } from "@RpgTypes/rmmz/rpg";

export interface Battle_Reward {
  gold: number;
  exp: number;
  items: Data_AnyGoodsUnion[];
}
