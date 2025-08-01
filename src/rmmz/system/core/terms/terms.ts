import type { Data_NamedItem } from "@RpgTypes/libs";
import type { System_Terms_Params } from "./core/types";

export const getParamNames = (
  system: System_Terms_Params
): Data_NamedItem[] => {
  return system.terms.params.map((name, index) => ({
    name: name,
    id: index,
  }));
};
