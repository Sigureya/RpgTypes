import type { Data_Troop } from "@RpgTypes/rmmz/events";
import type {
  Data_Item,
  Data_Weapon,
  Data_Armor,
  BattleEventPage,
} from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Unit,
  Rmmz_UnitTpb,
  Rmmz_Actor,
  Rmmz_Enemy,
  Rmmz_Troop,
  Rmmz_Party,
} from "./core";

export interface Rmmz_Unit_Constructor<Battler> {
  new (): Rmmz_Unit<Battler>;
}

export interface Rmmz_Party_Constructor {
  new (): Rmmz_Party;
}
export interface Rmmz_Troop_Constructor {
  new (): Rmmz_Troop;
}

declare global {
  class Game_Unit<Battler> implements Rmmz_Unit<Battler>, Rmmz_UnitTpb {
    inBattle(): boolean;
    members(): Battler[];
    aliveMembers(): Battler[];
    deadMembers(): Battler[];
    movableMembers(): Battler[];
    clearActions(): void;
    agility(): number;
    tgrSum(): number;
    randomTarget(): Battler | null;
    randomDeadTarget(): Battler | null;
    smoothTarget(): Battler | undefined;
    clearResults(): void;
    onBattleStart(advantageous: unknown): void;
    onBattleEnd(): void;
    makeActions(): void;
    select(activeMember: Battler): void;
    isAllDead(): boolean;
    substituteBattler(): Battler | null;
    smoothDeadTarget(): Battler | undefined;

    tpbBaseSpeed(): number;
    tpbReferenceTime(): number;
    updateTpb(): void;
  }

  class Game_Party extends Game_Unit<Rmmz_Actor> implements Rmmz_Party {
    gold(): number;
    steps(): number;
    canInput(): boolean;
    gainGold(amount: number): void;
    loseGold(amount: number): void;
    hasItem(
      item: Data_Item | Data_Weapon | Data_Armor,
      includeEquip: boolean,
    ): boolean;
    gainItem(
      item: Data_Item | Data_Weapon | Data_Armor,
      amount: number,
      includeEquip: boolean,
    ): void;
    loseItem(
      item: Data_Item | Data_Weapon | Data_Armor,
      amount: number,
      includeEquip: boolean,
    ): void;

    numItems(
      item: Data_Item | Data_Weapon | Data_Armor,
      includeEquip: boolean,
    ): number;
    size(): number;
    _actors: number[];
  }

  class Game_Troop extends Game_Unit<Rmmz_Enemy> implements Rmmz_Troop {
    troop(): Data_Troop | undefined | null;
    setUp(troopId: number): void;
    makeUniqueNames(): void;
    letterTable(): string[];
    enemyNames(): string[];
    updatePluralFlags(): void;
    increaseTurn(): void;
    turnCount(): number;
    meetsConditions(page: BattleEventPage): boolean;
    setupBattleEvent(): void;
    isEventRunning(): boolean;
    updateInterpreter(): void;
    members(): Rmmz_Enemy[];
    setup(troopId: number): void;
    _turnCount: number;
  }
}
