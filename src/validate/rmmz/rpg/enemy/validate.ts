import type { Data_Enemy } from "@RpgTypes/rpg";
import validate from "./enemyValidate";

export const isDataEnemy = (data: unknown): data is Data_Enemy => {
  return validate(data);
};
