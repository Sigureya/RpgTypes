import type { Data_Troop } from "@RpgTypes/rmmz/events";
import type { BattleEventPage } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_UnitEnemy {
  troop(): Data_Troop | undefined | null;
  setUp(troopId: number): void;
  makeUniqueNames(): void;
  letterTable(): string[];
  enemyNames(): string[];
  updatePluralFlags(): void;
}

export interface Rmmz_TroopTurn {
  increaseTurn(): void;
  turnCount(): number;
}

export interface Rmmz_BattleEventRunner {
  meetsConditions(page: BattleEventPage): boolean;
  setupBattleEvent(): void;
  isEventRunning(): boolean;
  updateInterpreter(): void;
}
