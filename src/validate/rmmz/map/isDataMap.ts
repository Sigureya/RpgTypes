import type { Data_Map } from "@RpgTypes/rmmz/rpg";
import validate from "./mapValidate";

export const isDataMap = (data: unknown): data is Data_Map => {
  return validate(data);
};
