export interface Rmmz_UnitPlayer {
  steps(): number;
  gold(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  //   hasItem(item: Rmmz_Item, includeEquip: boolean): boolean;
  //   numItems(item: Rmmz_Item, includeEquip: boolean): number;
  //   gainItem(item: Rmmz_Item, amount: number, includeEquip: boolean): void;
  //   loseItem(item: Rmmz_Item, amount: number, includeEquip: boolean): void;
}
