import type { Provider_RpgData } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor, Rmmz_Enemy } from "./core";

export interface Provider_GameActor<TActor> {
  actor(actorId: number): TActor | undefined | null;
}

export interface Provider_GameEnemy<TEnemy> {
  gameEnemy(enemyId: number): TEnemy | undefined | null;
}

export interface Provider_GameMapCharacter {
  mapCharacter(characterId: number): { direction(): number } | undefined | null;
}

export interface Provider_GameObjects
  extends
    Provider_RpgData,
    Provider_GameActor<Rmmz_Actor>,
    Provider_GameEnemy<Rmmz_Enemy>,
    Provider_GameMapCharacter {}
