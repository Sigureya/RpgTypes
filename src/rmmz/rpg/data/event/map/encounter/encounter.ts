import type { Encounter } from "./types";

export const selectEncounters = (
  encounterList: ReadonlyArray<Encounter>,
  isEncounterValid: (
    e: Encounter,
    index: number,
    list: ReadonlyArray<Encounter>,
  ) => boolean,
  random: (max: number) => number,
): Encounter | null => {
  const ee = encounterList.filter(isEncounterValid);
  if (ee.length === 0) {
    return null;
  }
  const totalWeight: number = ee.reduce(calcWeightTotal, 0);
  if (totalWeight <= 0) {
    return null;
  }
  const vv = random(totalWeight);
  return selectByWeight(vv, ee);
};

const calcWeightTotal = (acc: number, e: Encounter): number => {
  return acc + e.weight;
};

const selectByWeight = (
  w: number,
  encounterList: readonly Encounter[],
): Encounter | null => {
  // eslint-disable-next-line @functional/no-let
  let weight = w;
  // eslint-disable-next-line @functional/no-loop-statements
  for (const encounter of encounterList) {
    weight -= encounter.weight;
    if (weight < 0) {
      return encounter;
    }
  }
  return null;
};
