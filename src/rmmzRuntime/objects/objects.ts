import type {
  Rmmz_Actors,
  Rmmz_Map,
  Rmmz_Party,
  Rmmz_PlayerCharactor,
  Rmmz_Switches,
  Rmmz_System,
  Rmmz_Variables,
} from "./core";

export interface Rmmz_GameObjects {
  actors: Rmmz_Actors;
  party: Rmmz_Party;
  map: Rmmz_Map;
  variables: Rmmz_Variables;
  switches: Rmmz_Switches;
  system: Rmmz_System;
  player: Rmmz_PlayerCharactor;
}
