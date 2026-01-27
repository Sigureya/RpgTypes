import type { Data_Armor, Data_Item, Data_Weapon } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_UnitPlayer {
  steps(): number;
  gold(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  //   hasItem(item: Rmmz_Item, includeEquip: boolean): boolean;
  numItems(
    item: Data_Item | Data_Weapon | Data_Armor,
    includeEquip: boolean,
  ): number;
  //   gainItem(item: Rmmz_Item, amount: number, includeEquip: boolean): void;
  //   loseItem(item: Rmmz_Item, amount: number, includeEquip: boolean): void;
}
