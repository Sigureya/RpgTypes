import type { Data_Item, Data_Weapon, Data_Armor } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Unit,
  Rmmz_UnitTpb,
  Rmmz_Actor,
  Rmmz_UnitPlayer,
  Rmmz_Enemy,
  Rmmz_Troop,
} from "./core";

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

  class Game_Party
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
    size(): number;
    _actors: number[];
  }

  class Game_Troop
    extends Game_Unit<Rmmz_Enemy>
    implements Partial<Rmmz_Troop>
  {
    members(): Rmmz_Enemy[];
    setup(troopId: number): void;
  }
}
