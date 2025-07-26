import type { Data_Skill } from "@RpgTypes/rmmz/rpg";
import validateSkill from "./skillValidate";

export const isDataSkill = (data: unknown): data is Data_Skill => {
  return validateSkill(data);
};
