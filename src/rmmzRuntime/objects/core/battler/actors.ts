import type { Rmmz_Actor } from "./actor";

export interface Rmmz_Actors {
  _data: Rmmz_Actor[];
  initialize(): void;
  actor(actorId: number): Rmmz_Actor | null;
}
