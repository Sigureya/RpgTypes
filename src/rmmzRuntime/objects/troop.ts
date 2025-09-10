import type { Rmmz_Enemy } from "./core/battler/enemy";
import type { Rmmz_Troop } from "./core/troop";

export declare class Game_Troop implements Partial<Rmmz_Troop> {
  members(): Rmmz_Enemy[];
  setup(troopId: number): void;
}
