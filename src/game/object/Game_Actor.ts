import { Game_Troop } from "./Game_Troop";
import { Game_Party } from "./Gamn_Party";
import { Game_Battler } from "./Game_Battler";

export declare class Game_Actor extends Game_Battler {
  isActor(): true;
  isEnemy(): false;
  friendsUnit(): Game_Party;
  opponentsUnit(): Game_Troop;
}
