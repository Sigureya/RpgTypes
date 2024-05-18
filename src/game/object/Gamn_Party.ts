import { Game_Unit } from "./Game_Unit";
import { Game_Actor } from "./Game_Actor";
import { IUnit } from "./types/Iunit";

export declare class Game_Party extends Game_Unit implements IUnit<Game_Actor> {
  members(): Game_Actor[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Actor | null;
  randomDeadTarget(): Game_Actor | null;
  smoothTarget(): Game_Actor | undefined;
}
interface Party {}
