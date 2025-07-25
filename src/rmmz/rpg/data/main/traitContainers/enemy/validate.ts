import validate from "./enemyValidate";
import type { Data_Enemy } from "./types";

export const isDataEnemy = (data: unknown): data is Data_Enemy => {
  return validate(data);
};
