import { Game_BattlerBase } from "./battlerBase";
import type { Rmmz_Actor } from "./core/battler/actor";
import type { Rmmz_Enemy } from "./core/battler/enemy";

export declare class Game_Battler extends Game_BattlerBase {
  isEnemy(): this is Rmmz_Enemy;
  isActor(): this is Rmmz_Actor;
}
