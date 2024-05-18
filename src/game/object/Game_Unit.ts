import { Game_Battler } from "./Game_Battler";
import { IBattler } from "./types";
import { IUnit } from "./types/interface/unit";

export declare class Game_Unit<Battler extends IBattler = Game_Battler>
  implements IUnit<Battler>
{
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
}
