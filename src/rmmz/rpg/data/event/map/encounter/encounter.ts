import type { Encounter } from "./types";

export const selectEncounters = (
  encounterList: ReadonlyArray<Encounter>,
  isEncounterValid: (
    e: Encounter,
    index: number,
    list: ReadonlyArray<Encounter>,
  ) => boolean,
  randomFn: (max: number) => number,
): Encounter | null => {
  const list = encounterList.filter(isEncounterValid);
  if (list.length === 0) {
    return null;
  }
  const totalWeight: number = list.reduce(calcWeightTotal, 0);
  if (totalWeight <= 0) {
    return null;
  }
  const randomValue = randomFn(totalWeight);
  return selectByWeight(randomValue, list);
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
