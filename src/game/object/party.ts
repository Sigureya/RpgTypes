import { Game_Actor } from "./battler";
import { IUnit } from "./unit/interface";

export declare class Game_Party
  //extends Game_Unit
  implements IUnit<Game_Actor>
{
  members(): Game_Actor[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Game_Actor | null;
  randomDeadTarget(): Game_Actor | null;
  smoothTarget(): Game_Actor | undefined;
}
interface Party {}
