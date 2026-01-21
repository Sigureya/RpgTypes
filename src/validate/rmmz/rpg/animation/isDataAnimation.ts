import type { Data_Animation } from "@RpgTypes/rmmz/rpg";
import validate from "./animationValidate";

export const isDataAnimation = (data: unknown): data is Data_Animation => {
  return validate(data);
};
