import type { ValidateResult } from "@RpgTypes/libs/ajv/validateWithErrors";
import { validateWithErros } from "@RpgTypes/libs/ajv/validateWithErrors";
import type { Data_Map } from "@RpgTypes/rmmz/rpg";
import type { ValidateFunction } from "ajv";
import validate from "./mapValidate";

export const isDataMap = (data: unknown): data is Data_Map => {
  return validate(data);
};

export const validateMapWithErrors = (
  data: unknown,
): ValidateResult<Data_Map> => {
  return validateWithErros(data, validate as ValidateFunction<Data_Map>);
};
