import type { Data_Armor } from "@RpgTypes/rpg";
import validate from "./armorValidate";

export const isDataArmor2 = (data: unknown): data is Data_Armor => {
  return validate(data);
};
