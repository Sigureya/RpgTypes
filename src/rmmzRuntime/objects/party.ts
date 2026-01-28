import type { Data_Item, Data_Weapon, Data_Armor } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor, Rmmz_Unit, Rmmz_UnitPlayer } from "./core";
import { Game_Unit } from "./unit";

export declare class Game_Party
  extends Game_Unit<Rmmz_Actor>
  implements Partial<Rmmz_Unit<Rmmz_Actor> & Rmmz_UnitPlayer>
{
  gold(): number;
  steps(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  numItems(
    item: Data_Item | Data_Weapon | Data_Armor,
    includeEquip: boolean,
  ): number;
  _actors: number[];
}
