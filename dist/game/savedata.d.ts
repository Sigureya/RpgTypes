import type { Game_Party, Game_Actors, Game_Switches, Game_Timer, Game_Variables, Game_Player, Game_System, Game_Map, Game_Screen, Game_SelfSwitches } from "./object";
export interface Savedata {
    system: Game_System;
    scrren: Game_Screen;
    timer: Game_Timer;
    switches: Game_Switches;
    variables: Game_Variables;
    selfSwitches: Game_SelfSwitches;
    actors: Game_Actors;
    party: Game_Party;
    map: Game_Map;
    player: Game_Player;
}
