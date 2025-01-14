import type { Game_Unit } from "./Game_Unit";
import type { Game_Actor } from "./Game_Actor";
import type { Data_AnyGoods } from "../../schema";
export declare class Game_Party extends Game_Unit<Game_Actor> {
    canInput(): boolean;
    gainItem(goods: Data_AnyGoods, amount: number): void;
    gainItem(goods: Data_AnyGoods, amount: number, includeEquip: boolean): void;
}
