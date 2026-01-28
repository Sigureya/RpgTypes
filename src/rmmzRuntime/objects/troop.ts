import type { Rmmz_Troop, Rmmz_Enemy } from "./core";

export declare class Game_Troop implements Partial<Rmmz_Troop> {
  members(): Rmmz_Enemy[];
  setup(troopId: number): void;
}
