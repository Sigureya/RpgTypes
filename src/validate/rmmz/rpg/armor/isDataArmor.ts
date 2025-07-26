import type { Data_Armor } from "@RpgTypes/rmmz/rpg";
import validate from "./armorValidate";

export const isDataArmor = (data: unknown): data is Data_Armor => {
  return validate(data);
};
