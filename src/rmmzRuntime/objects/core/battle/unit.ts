import type { Rmmz_Actor, Rmmz_Battler, Rmmz_Enemy } from "./battler";
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

export interface Rmmz_Unit<Battler = Rmmz_Battler>
  extends Rmmz_UnitTpb, Rmmz_BattlerContainer<Battler> {}

export interface Rmmz_Party
  extends Rmmz_Unit<Rmmz_Actor>, Rmmz_UnitPlayer<Rmmz_Actor> {
  canInput(): boolean;
  _actors: number[];
  size(): number;
  highestLevel(): number;
  addActor(actorId: number): void;
  removeActor(actorId: number): void;
}

export interface Rmmz_Troop<T = Rmmz_Enemy>
  extends Rmmz_Unit<T>, Rmmz_UnitEnemy, Rmmz_TroopTurn, Rmmz_BattleEventRunner {
  members(): T[];
  setup(troopId: number): void;
  _turnCount: number;
}
