import type { Data_AnyGoods } from "@sigureya/rpgtypes";

export interface Battle_Reward {
  gold: number;
  exp: number;
  items: Data_AnyGoods[];
}
