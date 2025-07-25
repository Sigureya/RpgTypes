import validetee from "./stateValidate";
import type { Data_State } from "./types";

export const isDataState = (data: unknown): data is Data_State => {
  return validetee(data);
};
