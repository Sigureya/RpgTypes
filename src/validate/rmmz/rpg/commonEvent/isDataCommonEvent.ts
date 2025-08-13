import type { Data_CommonEventLike } from "@RpgTypes/rmmz";
import validate from "./commonEventValidate";

export const isDataCommonEvent = (
  data: unknown
): data is Data_CommonEventLike => {
  return validate(data);
};
