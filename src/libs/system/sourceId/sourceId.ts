import { AUTHOR_RMMZ } from "@RpgTypes/namedItemSource";
import type { SourceIdentifier } from "@RpgTypes/schema";
import {
  MODULE_SYSTEM,
  SRC_ELEMENTS,
  SRC_ARMOR_TYPES,
  SRC_EQUIP_TYPES,
  SRC_SKILL_TYPES,
  SRC_SWITCHES,
  SRC_WEAPON_TYPES,
} from "./constants";

export const sourceIdSystemElements = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ELEMENTS,
});

export const sourceIdSystemArmorTypes = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ARMOR_TYPES,
});

export const sourceIdSystemEquipTypes = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_EQUIP_TYPES,
});

export const sourceIdSystemSkillTypes = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_SKILL_TYPES,
});

export const sourceIdSystemSwitches = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_SWITCHES,
});

export const sourceIdSystemWeaponTypes = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_WEAPON_TYPES,
});
