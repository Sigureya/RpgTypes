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
  traitSet,
} from "./traitContainers";

export const canEquipWeapon = (
  weapon: Data_Weapon,
  traits: ReadonlyArray<Trait>,
): boolean => {
  return isEquipmentEquipable(weapon, traits, matchesWeaponTypeTrait);
};

const matchesWeaponTypeTrait = (weapon: Data_Weapon, trait: Trait): boolean => {
  return (
    trait.code === TRAIT_EQUIP_WEAPON_TYPE && trait.dataId === weapon.wtypeId
  );
};

export const canEquipArmor = (
  armor: Data_Armor,
  traits: ReadonlyArray<Trait>,
): boolean => {
  return isEquipmentEquipable(armor, traits, matchesArmorTypeTrait);
};

const matchesArmorTypeTrait = (armor: Data_Armor, trait: Trait): boolean => {
  return (
    trait.code === TRAIT_EQUIP_ARMOR_TYPE && trait.dataId === armor.atypeId
  );
};

const isEquipmentEquipable = <T extends Data_Equipment>(
  equipment: T,
  traits: ReadonlyArray<Trait>,
  fn: (e: T, trait: Trait) => boolean,
): boolean => {
  const matchedTrait = traits.find((trait): boolean => {
    if (trait.code === TRAIT_EQUIP_SEAL) {
      return trait.dataId === equipment.etypeId;
    }
    if (fn(equipment, trait)) {
      return true;
    }
    return false;
  });
  if (!matchedTrait) {
    return false;
  }
  if (matchedTrait.code === TRAIT_EQUIP_SEAL) {
    return false;
  }
  return traits.every((trait) => {
    if (trait.code === TRAIT_EQUIP_SEAL) {
      return trait.dataId !== equipment.etypeId;
    }
    return true;
  });
};

export const filterEquipableWeapons = (
  traits: ReadonlyArray<Trait>,
  equip: ReadonlyArray<Data_Weapon>,
): Data_Weapon[] => {
  const wtypes: ReadonlySet<number> = new Set(
    traitSet(traits, TRAIT_EQUIP_WEAPON_TYPE),
  );
  const seald = new Set(traitSet(traits, TRAIT_EQUIP_SEAL));
  return equip.filter((item) => {
    return wtypes.has(item.wtypeId) && !seald.has(item.etypeId);
  });
};

export const filterEquipableArmors = (
  traits: ReadonlyArray<Trait>,
  equip: ReadonlyArray<Data_Armor>,
): Data_Armor[] => {
  const atypes: ReadonlySet<number> = new Set(
    traitSet(traits, TRAIT_EQUIP_ARMOR_TYPE),
  );
  const seald = new Set(traitSet(traits, TRAIT_EQUIP_SEAL));
  return equip.filter((item) => {
    return atypes.has(item.atypeId) && !seald.has(item.etypeId);
  });
};
