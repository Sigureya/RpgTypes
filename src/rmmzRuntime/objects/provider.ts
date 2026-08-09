export interface Provider_GameActor<TActor> {
  gameActor(actorId: number): TActor | undefined | null;
}
