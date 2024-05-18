import { Game_Unit } from "./Game_Unit";
import { Game_Actor } from "./Game_Actor";

export declare class Game_Party extends Game_Unit {
  members(): Game_Actor[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Actor | null;
  randomDeadTarget(): Game_Actor | null;
  smoothTarget(): Game_Actor | undefined;
}
//interface Party {}
