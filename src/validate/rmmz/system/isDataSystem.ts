import type { Data_System } from "@RpgTypes/rmmz/system";
import type { ValidateFunction } from "ajv";
import validate from "./systemValidate";

export const validateSystemData: ValidateFunction = validate;
export const isDataSystem = (data: unknown): data is Data_System => {
  return validate(data);
};
