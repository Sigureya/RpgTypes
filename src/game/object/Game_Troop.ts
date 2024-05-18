import { Game_Enemy } from "./Game_Enemy";
import { Game_Unit } from "./Game_Unit";
import { IUnit } from "./types/interface/unit";

export declare class Game_Troop extends Game_Unit {
  members(): Game_Enemy[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Enemy | null;
  randomDeadTarget(): Game_Enemy | null;
  smoothTarget(): Game_Enemy | undefined;
}
