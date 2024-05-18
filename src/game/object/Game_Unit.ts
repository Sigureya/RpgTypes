import { Game_Battler } from "./Game_Battler";
import { IUnit } from "./types/interface";

export declare class Game_Unit implements IUnit<Game_Battler> {
  members(): Game_Battler[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Battler | null;
  randomDeadTarget(): Game_Battler | null;
  smoothTarget(): Game_Battler | undefined;
}
