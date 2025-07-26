import type { Data_Class } from "@RpgTypes/rpg";
import validate from "./classValidate";

export const isDataClass = (data: unknown): data is Data_Class => {
  return validate(data);
};
