import validate from "./armorValidate";
import type { Data_Armor } from "./types";

export const isDataArmor2 = (data: unknown): data is Data_Armor => {
  return validate(data);
};
