import type { Game_Troop } from "./Game_Troop";
import type { Game_Party } from "./Game_Party";
import type { Game_Battler } from "./Game_Battler";
export declare class Game_Actor extends Game_Battler {
    isActor(): boolean;
    isEnemy(): boolean;
    friendsUnit(): Game_Party;
    opponentsUnit(): Game_Troop;
}
