import type { SystemLabel_DataNames } from "@RpgTypes/system/core/dataTypes/";
import type {
  SourceId_SystemWeaponTypes,
  SourceId_SystemArmorTypes,
  SourceId_SystemElements,
  SourceId_SystemEquipTypes,
  SourceId_SystemSkillTypes,
} from "@RpgTypes/system/core/dataTypes/sourceIdTypes";
import type { FormatLabelResolved } from "src/namedItemSource";
import {
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ELEMENT_RATE,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
  TRAIT_EQUIP_LOCK,
} from "./constants";

export const defineSysteLabels = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number>[] => {
  return [
    defineWeaponTypes(label),
    defineArmorTypes(label),
    defineAttackElements(label),
    defineElementRate(label),
    defineEquipTypes(label),
    defineSkillTypesAdd(label),
    defineSkillTypesSeal(label),
  ];
};

const defineWeaponTypes = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.weaponTypes.format,
  kindId: TRAIT_EQUIP_WEAPON_TYPE,
  label: label.weaponTypes.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "weaponTypes",
  } satisfies SourceId_SystemWeaponTypes,
});

const defineArmorTypes = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.armorTypes.format,
  kindId: TRAIT_EQUIP_ARMOR_TYPE,
  label: label.armorTypes.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "armorTypes",
  } satisfies SourceId_SystemArmorTypes,
});

const defineAttackElements = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.elements.format,
  kindId: TRAIT_ATTACK_ELEMENT,
  label: label.elements.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "elements",
  } satisfies SourceId_SystemElements,
});

const defineElementRate = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.elements.format,
  kindId: TRAIT_ELEMENT_RATE,
  label: label.elements.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "elements",
  } satisfies SourceId_SystemElements,
});

const defineEquipTypes = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.equipTypes.format,
  kindId: TRAIT_EQUIP_LOCK,
  label: label.equipTypes.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "equipTypes",
  } satisfies SourceId_SystemEquipTypes,
});

const defineSkillTypesAdd = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.skillTypes.format,
  kindId: TRAIT_SKILL_TYPE_ADD,
  label: label.skillTypes.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "skillTypes",
  } satisfies SourceId_SystemSkillTypes,
});

const defineSkillTypesSeal = (
  label: SystemLabel_DataNames
): FormatLabelResolved<number> => ({
  pattern: label.skillTypes.format,
  kindId: TRAIT_SKILL_TYPE_SEAL,
  label: label.skillTypes.domainName,
  dataSource: {
    author: "rmmz",
    module: "system",
    kind: "skillTypes",
  } satisfies SourceId_SystemSkillTypes,
});
