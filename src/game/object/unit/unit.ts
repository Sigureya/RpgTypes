import { Game_Battler } from "../battler";
import { IUnit } from "./interface";

export declare class Game_Unit implements IUnit<Game_Battler> {
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Battler | null;
  randomDeadTarget(): Game_Battler | null;
  smoothTarget(): Game_Battler | undefined;
  members(): Game_Battler[];
}
