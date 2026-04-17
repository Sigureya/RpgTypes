import type { Data_Troop } from "@RpgTypes/rmmz/events";
import validate from "./troopValidate";

export const isDataTroop = (data: unknown): data is Data_Troop => {
  return validate(data);
};
