import type { Data_State } from "@RpgTypes/rpg";
import validetee from "./stateValidate";

export const isDataState = (data: unknown): data is Data_State => {
  return validetee(data);
};
