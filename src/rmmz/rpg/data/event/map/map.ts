import type { Encounter } from "./encounter";
import { selectEncounters } from "./encounter/encounter";
import { mapRegionId } from "./tiles";
import type { Map_EncounterSoucre } from "./types";

export const selectMapEncounters = (
  map: Map_EncounterSoucre,
  x: number,
  y: number,
  random: (max: number) => number,
): Encounter | null => {
  const regionId: number = mapRegionId(map, x, y);
  return selectEncounters(
    map.encounterList,
    (e) => {
      return e.regionSet.includes(regionId);
    },
    random,
  );
};
