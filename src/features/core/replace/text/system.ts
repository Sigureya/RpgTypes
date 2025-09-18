import type { Data_System } from "@RpgTypes/rmmz";
import { replaceSystemTerms } from "./systemTerms";
import { replaceTextByMap } from "./utils";

export const replaceSystemText = (
  system: Data_System,
  map: ReadonlyMap<string, string>
): Data_System => {
  return {
    ...system,
    gameTitle: replaceTextByMap(system.gameTitle, map),
    currencyUnit: replaceTextByMap(system.currencyUnit, map),
    elements: replaceArray(system.elements, map),
    skillTypes: replaceArray(system.skillTypes, map),
    weaponTypes: replaceArray(system.weaponTypes, map),
    armorTypes: replaceArray(system.armorTypes, map),
    equipTypes: replaceArray(system.equipTypes, map),
    terms: replaceSystemTerms(system.terms, map),
  };
};

const replaceArray = (
  list: ReadonlyArray<string>,
  map: ReadonlyMap<string, string>
): string[] => {
  return list.map((item) => replaceTextByMap(item, map));
};
