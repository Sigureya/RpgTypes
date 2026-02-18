import type { Data_System, Data_SystemMV } from "@RpgTypes/rmmz/system";
import validateMV from "./systemMVValidate";
import validate from "./systemValidate";

export const isDataSystem = (data: unknown): data is Data_System => {
  return validate(data);
};

export const isDataSystemMV = (data: unknown): data is Data_SystemMV => {
  return validateMV(data);
};
