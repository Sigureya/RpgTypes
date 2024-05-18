import { Game_Enemy } from "./Game_Enemy";
import { Game_Unit } from "./Game_Unit";
import { IUnit } from "./types/Iunit";

export declare class Game_Troop
  extends Game_Unit
  implements IUnit<Game_Enemy> {}
