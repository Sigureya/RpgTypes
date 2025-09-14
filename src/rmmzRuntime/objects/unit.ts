import type { Rmmz_Unit } from "./core/unit/unit";

export declare class Game_Unit<Battler> implements Rmmz_Unit<Battler> {
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
