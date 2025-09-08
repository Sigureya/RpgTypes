import type { Rmmz_Enemy } from "@RpgTypes/rmmzRuntime/objects/battler/enemy";
import type { Data_Enemy } from "@sigureya/rpgtypes";
export declare class Game_Enemy implements Rmmz_Enemy {
  constructor(enemyId: number, x: number, y: number);
  addNewState(stateId: number): void;
  enemyId(): number;
  enemy(): Data_Enemy;
  isAlive(): boolean;
  isDead(): boolean;
  isHidden(): boolean;
}
