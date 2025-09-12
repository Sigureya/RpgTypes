import type { Rmmz_Actor } from "./actor";

export type Rmmz_Actors = Rmmz_ActorsTemplate<Rmmz_Actor>;

export interface Rmmz_ActorsTemplate<
  Actor extends Partial<Rmmz_Actor> = Rmmz_Actor
> {
  _data: Actor[];
  initialize(): void;
  actor(actorId: number): Actor | null;
}
