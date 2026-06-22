import type { Data_AnyGoodsUnion } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor, Rmmz_Enemy } from "./battler";
import type {
  Rmmz_BattlerContainer,
  Rmmz_UnitPlayer,
  Rmmz_UnitTpb,
} from "./unitBase";
import type {
  Rmmz_UnitEnemy,
  Rmmz_TroopTurn,
  Rmmz_BattleEventRunner,
} from "./unitBase/enemy";

export interface Rmmz_Unit<Battler>
  extends Rmmz_UnitTpb, Rmmz_BattlerContainer<Battler> {}

export interface Rmmz_Party extends Rmmz_Unit<Rmmz_Actor>, Rmmz_UnitPlayer {
  canInput(): boolean;
  gainItem(goods: Data_AnyGoodsUnion, amount: number): void;
  gainItem(
    goods: Data_AnyGoodsUnion,
    amount: number,
    includeEquip: boolean,
  ): void;
}

export interface Rmmz_Troop
  extends
    Rmmz_Unit<Rmmz_Enemy>,
    Rmmz_UnitEnemy,
    Rmmz_TroopTurn,
    Rmmz_BattleEventRunner {
  members(): Rmmz_Enemy[];
  setup(troopId: number): void;
}
