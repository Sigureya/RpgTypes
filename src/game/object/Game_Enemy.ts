import { Game_Battler } from "./Game_Battler";
import { Game_Troop } from "./Game_Troop";
import { Game_Party } from "./Gamn_Party";

export declare class Game_Enemy extends Game_Battler {
  friendsUnit(): Game_Troop;
  opponentsUnit(): Game_Party;
}
