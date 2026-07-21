import type { Data_Weapon, Trait } from "./traitContainers";
import { TRAIT_EQUIP_SEAL, TRAIT_EQUIP_WEAPON_TYPE } from "./traitContainers";

export const canEquipWeapon = (
  weapon: Data_Weapon,
  traits: ReadonlyArray<Trait>,
): boolean => {
  const wtypeOrSeal = traits.find((trait): boolean => {
    if (trait.code === TRAIT_EQUIP_WEAPON_TYPE) {
      return trait.dataId === weapon.wtypeId;
    }
    if (trait.code === TRAIT_EQUIP_SEAL) {
      return trait.dataId === weapon.id;
    }
    return false;
  });

  if (!wtypeOrSeal) {
    return false;
  }
  if (wtypeOrSeal.code !== TRAIT_EQUIP_WEAPON_TYPE) {
    return false;
  }

  return traits.every((trait) => {
    if (trait.code === TRAIT_EQUIP_SEAL) {
      return trait.dataId !== weapon.id;
    }
    return true;
  });
};
