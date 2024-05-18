import { Game_Troop } from "@niokasgami/rpg-maker-mz-typescript";
import { Game_Party } from "../party";
import { Game_Battler } from "./battler";

export declare class Game_Actor extends Game_Battler {
  isActor(): true;
  isEnemy(): false;
  friendsUnit(): Game_Party;
  opponentsUnit(): Game_Troop;
}
