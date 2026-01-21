import type { Data_MapInfo } from "@RpgTypes/rmmz/rpg";
import validate from "./mapinfoValidate";

export const isDataMapInfo = (data: unknown): data is Data_MapInfo => {
  return validate(data);
};
