import type { Rmmz_Actor, Rmmz_Actors, Rmmz_Map } from "@RpgTypes/rmmzRuntime";

export const createFakeMap = (): Partial<Rmmz_Map> => ({
  mapId: () => 1,
});

export const createFakeActors = (
  actors: Rmmz_Actor[]
): Partial<Rmmz_Actors> => ({
  actor(actorId: number): Rmmz_Actor | null {
    return actors.find((a) => a.actorId() === actorId) || null;
  },
});
