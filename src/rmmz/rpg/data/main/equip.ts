import type {
  Data_Armor,
  Data_Equipment,
  Data_Weapon,
  Trait,
} from "./traitContainers";
import {
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
} from "./traitContainers";

export const canEquipWeapon = (
  weapon: Data_Weapon,
  traits: ReadonlyArray<Trait>,
): boolean => {
  return eeex(weapon, traits, ewx);
};

const ewx = (weapon: Data_Weapon, trait: Trait): boolean => {
  return (
    trait.code === TRAIT_EQUIP_WEAPON_TYPE && trait.dataId === weapon.wtypeId
  );
};

export const canEquipArmor = (
  armor: Data_Armor,
  traits: ReadonlyArray<Trait>,
): boolean => {
  return eeex(armor, traits, eax);
};

const eax = (armor: Data_Armor, trait: Trait): boolean => {
  return (
    trait.code === TRAIT_EQUIP_ARMOR_TYPE && trait.dataId === armor.atypeId
  );
};

const eeex = <T extends Data_Equipment>(
  equipment: T,
  traits: ReadonlyArray<Trait>,
  fn: (e: T, trait: Trait) => boolean,
): boolean => {
  const wtypeOrSeal = traits.find((trait): boolean => {
    if (trait.code === TRAIT_EQUIP_SEAL) {
      return trait.dataId === equipment.etypeId;
    }
    if (fn(equipment, trait)) {
      return true;
    }
    return false;
  });
  if (!wtypeOrSeal) {
    return false;
  }
  if (wtypeOrSeal.code === TRAIT_EQUIP_SEAL) {
    return false;
  }
  return traits.every((trait) => {
    if (trait.code === TRAIT_EQUIP_SEAL) {
      return trait.dataId !== equipment.etypeId;
    }
    return true;
  });
};
