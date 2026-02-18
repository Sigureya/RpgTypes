import type { Data_System } from "@RpgTypes/rmmz/system";
import validate from "./systemValidate";
export const isDataSystem = (data: unknown): data is Data_System => {
  return validate(data);
};
