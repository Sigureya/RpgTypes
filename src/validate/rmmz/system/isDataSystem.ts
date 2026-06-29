import type { Data_System, Data_SystemTexts } from "@RpgTypes/rmmz/system";
import type { ValidateFunction } from "ajv";
import validateSystemTexts from "./systemTextsValidate";
import validate from "./systemValidate";

export const validateSystemData: ValidateFunction = validate;
export const isDataSystem = (data: unknown): data is Data_System => {
  return validate(data);
};

export const isDataSystemTexts = (data: unknown): data is Data_SystemTexts => {
  return validateSystemTexts(data);
};
