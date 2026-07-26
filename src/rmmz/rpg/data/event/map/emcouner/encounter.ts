import type { Encounter } from "./types";

const mmm = (
  encounterList: readonly Encounter[],
  fn: (e: Encounter) => boolean,
  random: (max: number) => number,
): Encounter | null => {
  const ee = encounterList.filter(fn);
  if (ee.length === 0) {
    return null;
  }
  const totalWeight: number = ee.reduce(xxx, 0);
  if (totalWeight <= 0) {
    return null;
  }
  const vv = random(totalWeight);
  return ggg(vv, ee);
};

const xxx = (acc: number, e: Encounter): number => {
  return acc + e.weight;
};

const ggg = (
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
