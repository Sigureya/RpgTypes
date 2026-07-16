import type { Data_Weapon, Trait, TraitCode } from "@RpgTypes/rmmz";
import {
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
} from "@RpgTypes/rmmz";
import { traitSet } from "./trait";

export const filterEquipableWeapons = (
  traits: ReadonlyArray<Trait>,
  equip: ReadonlyArray<Data_Weapon>,
): Data_Weapon[] => {
  const wtypes: ReadonlySet<number> = new Set(
    traitSet(traits, TRAIT_EQUIP_WEAPON_TYPE),
  );
  const seald = new Set(traitSet(traits, TRAIT_EQUIP_SEAL));
  return equip.filter((item) => {
    return wtypes.has(item.wtypeId) && !seald.has(item.wtypeId);
  });
};

const aax = (
  traits: ReadonlyArray<Trait>,
  code: TraitCode,
  etypeId: number,
): boolean => {
  return traits.some((trait) => {
    return trait.code === code && trait.dataId === etypeId;
  });
};

export const isEquipArmorTypeOk = (
  traits: ReadonlyArray<Trait>,
  etypeId: number,
): boolean => {
  return aax(traits, TRAIT_EQUIP_ARMOR_TYPE, etypeId);
};

export const isEquipTypeLocked = (
  traits: ReadonlyArray<Trait>,
  etypeId: number,
): boolean => {
  return aax(traits, TRAIT_EQUIP_LOCK, etypeId);
};

export const isEquipTypeSealed = (
  traits: ReadonlyArray<Trait>,
  etypeId: number,
): boolean => {
  return aax(traits, TRAIT_EQUIP_SEAL, etypeId);
};
