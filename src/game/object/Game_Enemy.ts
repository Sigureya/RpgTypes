import type { Game_Battler } from "./Game_Battler";
import type { Game_Troop } from "./Game_Troop";
import type { Game_Party } from "./Game_Party";

export declare class Game_Enemy extends Game_Battler {
  friendsUnit(): Game_Troop;
  opponentsUnit(): Game_Party;
}
