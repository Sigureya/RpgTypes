import type { Data_System } from "@RpgTypes/rmmz";
import { replaceSystemTerms } from "./systemTerms";
import { replaceTextByFunction } from "./utils";

export const replaceSystemText = (
  system: Data_System,
  fn: (key: string) => string | undefined
): Data_System => {
  return {
    ...system,
    gameTitle: replaceTextByFunction(system.gameTitle, fn),
    currencyUnit: replaceTextByFunction(system.currencyUnit, fn),
    elements: replaceArray(system.elements, fn),
    skillTypes: replaceArray(system.skillTypes, fn),
    weaponTypes: replaceArray(system.weaponTypes, fn),
    armorTypes: replaceArray(system.armorTypes, fn),
    equipTypes: replaceArray(system.equipTypes, fn),
    terms: replaceSystemTerms(system.terms, fn),
  };
};

const replaceArray = (
  list: ReadonlyArray<string>,
  fn: (key: string) => string | undefined
): string[] => {
  return list.map((item) => replaceTextByFunction(item, fn));
};
