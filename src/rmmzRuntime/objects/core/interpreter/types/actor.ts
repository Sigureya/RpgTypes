export interface Rmmz_InterpreterBattler<Actor, Enemy> {
  iterateActorId(actorId: number, callBack: (actor: Actor) => void): void;
  iterateActorEx(
    mode: number,
    dataId: number,
    callBack: (actor: Actor) => void
  ): void;
  iterateEnemyIndex(enemyId: number, callBack: (enemy: Enemy) => void): void;
}
