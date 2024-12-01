import type { Game_Actor } from "./Game_Actor";

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.
//-----------------------------------------------------------------------------
// Game_Actors
//
// The wrapper class for an actor array.

export declare class Game_Actors {
  _data: Game_Actor[];
  constructor();
  initialize(): void;
  actor(actorId: number): Game_Actor | null;
}
