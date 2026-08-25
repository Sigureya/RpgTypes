import type { Rmmz_Enemy } from "@RpgTypes/rmmzRuntime";

export const enemiesExpTotal = (troop: ReadonlyArray<Rmmz_Enemy>): number => {
  return troop.reduce(accExp, 0);
};

const accExp = (acc: number, enemy: Rmmz_Enemy): number => {
  if (enemy.isDead()) {
    return acc + enemy.exp();
  }
  return acc;
};
