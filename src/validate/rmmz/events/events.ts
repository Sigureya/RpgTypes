import type { Data_Troop, Data_Map, Data_CommonEvent } from "@RpgTypes/rmmz";
import validateCommon from "./commonEvent/commonEventValidate";
import validateMap from "./map/mapValidate";
import validateTroop from "./troop/troopValidate";

export const isDataTroop = (data: unknown): data is Data_Troop => {
  return validateTroop(data);
};

export const isDataMap = (data: unknown): data is Data_Map => {
  return validateMap(data);
};

export const isDataCommonEvent = (data: unknown): data is Data_CommonEvent => {
  return validateCommon(data);
};
