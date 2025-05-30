import { AUTHOR_RMMZ } from "@RpgTypes/namedItemSource";
import type { SourceIdentifier } from "@RpgTypes/schema";
import {
  MODULE_SYSTEM,
  SRC_ELEMENTS,
  SRC_ARMOR_TYPES,
  SRC_EQUIP_TYPES,
  SRC_SKILL_TYPES,
  SRC_SWITCHES,
  SRC_VARIABLE,
  SRC_WEAPON_TYPES,
} from "./constants";

export const systemElementsSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ELEMENTS,
});

export const systemArmorTypesSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ARMOR_TYPES,
});

export const equipTypesSourceIdSystem = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_EQUIP_TYPES,
});

export const systemSkillTypesSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_SKILL_TYPES,
});

export const systemSwitchesSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_SWITCHES,
});

export const systemVariablesSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_VARIABLE,
});

export const systemWeaponTypesSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_WEAPON_TYPES,
});
