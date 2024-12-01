import type { Game_Battler } from "./Game_Battler";
import type { IBattler, IUnit, IUnitTpb } from "./types";

export declare class Game_Unit<Battler extends IBattler = Game_Battler>
  implements IUnit<Battler>, IUnitTpb
{
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
