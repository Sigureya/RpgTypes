import type {
  Rmmz_Enemy,
  Rmmz_Actor,
  Rmmz_Battler,
  Rmmz_BattlerBase,
} from "./core";

export interface Rmmz_Enemy_Constructor {
  new (enemyId: number, x: number, y: number): Rmmz_Enemy;
}

export interface Rmmz_Actor_Constructor {
  new (actorId: number): Rmmz_Actor;
}

export interface Rmmz_Battler_Constructor {
  new (): Rmmz_Battler;
}

export interface Rmmz_BattlerBase_Constructor {
  new (): Rmmz_BattlerBase;
}
