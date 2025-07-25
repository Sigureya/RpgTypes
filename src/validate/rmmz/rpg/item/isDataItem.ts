import type { Data_Item } from "@RpgTypes/rmmz/rpg";
import validateItem from "./itemValidate";

export const isDataItem = (data: unknown): data is Data_Item => {
  return validateItem(data);
};
