import { Game_Actors, Game_Switches } from "@game/object";
import { Game_Party } from "@game/object/Game_Party";

export interface Savedata {
  variables: Game_Switches;
  actors: Game_Actors;
  party: Game_Party;
}
