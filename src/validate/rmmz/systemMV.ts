import type { Data_SystemMV } from "@RpgTypes/rmmz/system";
import validateMV from "./system/systemMVValidate";

export const isDataSystemMV = (data: unknown): data is Data_SystemMV => {
  return validateMV(data);
};
