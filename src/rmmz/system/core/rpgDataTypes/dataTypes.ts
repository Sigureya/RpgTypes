import type { System_RPG_DataNames } from "./types";

export const makeDataNames = (
  data: Partial<System_RPG_DataNames>
): System_RPG_DataNames => ({
  armorTypes: cloneStringArray(data.armorTypes),
  elements: cloneStringArray(data.elements),
  equipTypes: cloneStringArray(data.equipTypes),
  weaponTypes: cloneStringArray(data.weaponTypes),
  skillTypes: cloneStringArray(data.skillTypes),
  variables: cloneStringArray(data.variables),
  switches: cloneStringArray(data.switches),
});

const cloneStringArray = (array?: ReadonlyArray<string>) => {
  return array ? [...array] : [];
};
