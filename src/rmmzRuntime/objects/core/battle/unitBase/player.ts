import type {
  Data_AnyGoodsUnion,
  Data_Armor,
  Data_Weapon,
} from "@RpgTypes/rmmz/rpg";

export interface Rmmz_VariableSourceParty<
  Battler extends { actorId(): number },
> {
  numItems(item: Data_AnyGoodsUnion, includeEquip?: boolean): number;
  gold(): number;
  steps(): number;
  members(): Battler[];
  size(): number;
}

export interface Rmmz_UnitPlayer<
  Battler extends { actorId(): number },
> extends Rmmz_VariableSourceParty<Battler> {
  steps(): number;
  gold(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  hasItem(item: Data_AnyGoodsUnion, includeEquip?: boolean): boolean;
  numItems(item: Data_AnyGoodsUnion, includeEquip?: boolean): number;
  gainItem(
    item: Data_AnyGoodsUnion,
    amount: number,
    includeEquip?: boolean,
  ): void;
  loseItem(
    item: Data_AnyGoodsUnion,
    amount: number,
    includeEquip?: boolean,
  ): void;
  equipItems(): Data_AnyGoodsUnion[];
  armors(): Data_Armor[];
  weapons(): Data_Weapon[];
}
