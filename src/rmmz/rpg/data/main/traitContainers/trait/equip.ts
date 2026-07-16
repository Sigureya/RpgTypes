import type { TraitCode } from "./core";
import {
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
} from "./core";
import type { Trait } from "./types";

const aax = (
  traits: ReadonlyArray<Trait>,
  code: TraitCode,
  etypeId: number,
): boolean => {
  return traits.some((trait) => {
    return trait.code === code && trait.dataId === etypeId;
  });
};

export const isEquipWeaponTypeOk = (
  traits: ReadonlyArray<Trait>,
  wtypeId: number,
): boolean => {
  return aax(traits, TRAIT_EQUIP_WEAPON_TYPE, wtypeId);
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
