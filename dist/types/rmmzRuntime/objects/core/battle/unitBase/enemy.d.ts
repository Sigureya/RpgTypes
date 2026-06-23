import { Data_Troop } from '../../../../../rmmz/events';
import { BattleEventPage } from '../../../../../rmmz/rpg';
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
