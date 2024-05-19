import { Game_Unit } from "./Game_Unit";
import { Game_Actor } from "./Game_Actor";
import { Data_Goods } from "../../schema";

export declare class Game_Party extends Game_Unit<Game_Actor> {
  canInput(): boolean;
  gainItem(goods: Data_Goods, amount: number): void;
  gainItem(goods: Data_Goods, amount: number, includeEquip: boolean): void;
}
//interface Party {}
