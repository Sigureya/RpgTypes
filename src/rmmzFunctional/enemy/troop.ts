import type { Rmmz_Enemy } from "@RpgTypes/rmmzRuntime";

export const enemiesExpTotal = (troop: ReadonlyArray<Rmmz_Enemy>): number => {
  return troop.filter((e) => e.isDead()).reduce(accExp, 0);
};

const accExp = (acc: number, enemy: Rmmz_Enemy): number => {
  return acc + enemy.exp();
};
