import type { Rmmz_Map, Rmmz_PlayerCharactor } from "./core";

export interface Rmmz_Map_Constructor {
  new (): Rmmz_Map;
  prototype: Rmmz_Map;
}

export interface Rmmz_Player_Constructor {
  new (): Rmmz_PlayerCharactor;
  prototype: Rmmz_PlayerCharactor;
}
