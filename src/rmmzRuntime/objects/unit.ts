import type { Data_Item, Data_Weapon, Data_Armor } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Actor,
  Rmmz_Enemy,
  Rmmz_Troop,
  Rmmz_Unit,
  Rmmz_UnitPlayer,
} from "./core";

declare global {
  class Game_Unit<Battler> implements Rmmz_Unit<Battler> {
    tpbBaseSpeed(): number;
    tpbReferenceTime(): number;
    updateTpb(): void;
    substituteBattler(): Battler | null;
    select(activeMember: Battler): void;
    randomTarget(): Battler | null;
    randomDeadTarget(): Battler | null;
    smoothTarget(): Battler | undefined;
    deadMembers(): Battler[];
    movableMembers(): Battler[];
    aliveMembers(): Battler[];
    smoothDeadTarget(): Battler | undefined;
    members(): Battler[];
    inBattle(): boolean;
    agility(): boolean;
    tgrSum(): number;
    isAllDead(): boolean;
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
