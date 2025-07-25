import validate from "./classValidate";
import type { Data_Class } from "./types";

export const isDataClass = (data: unknown): data is Data_Class => {
  return validate(data);
};
