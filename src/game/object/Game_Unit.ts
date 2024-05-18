import { Game_Battler } from "./Game_Battler";
import { IUnit } from "./types/interface/Iunit";

export declare class Game_Unit implements IUnit<Game_Battler> {
  deadMembers(): Game_Battler[];
  movableMembers(): Game_Battler[];
  aliveMembers(): Game_Battler[];
  smoothDeadTarget(): Game_Battler | undefined;
  members(): Game_Battler[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Battler | null;
  randomDeadTarget(): Game_Battler | null;
  smoothTarget(): Game_Battler | undefined;
}
