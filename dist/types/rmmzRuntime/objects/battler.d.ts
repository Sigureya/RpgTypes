import { Game_BattlerBase } from './battlerBase';
import { Rmmz_Enemy, Rmmz_Actor } from './core';
export declare class Game_Battler extends Game_BattlerBase {
    isEnemy(): this is Rmmz_Enemy;
    isActor(): this is Rmmz_Actor;
}
