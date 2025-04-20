import type { LabelRegistry } from "@RpgTypes/schema";
import {
  DEFAULT_DAMAGE_LABELS,
  DEFAULT_WEAPON_LABELS,
  DEFAULT_ACTOR_LABELS,
  DEFAULT_ARMOR_LABELS,
  DEFAULT_COLLAPS_LABELS,
  DEFAULT_PARAMREGULAR_LABELS,
  DEFAULT_SKILL_LABELS,
  DEFAULT_ITEM_LABELS,
  DEFAULT_GLOBAL_LABELS,
  DEFAULT_ENEMY_LABELS,
  DEFAULT_STATE_LABELS,
  DEFAULT_PARAMSPECIAL_LABELS,
  DEFAULT_SPECIALFLAG_LABELS,
  MockPartyAbility,
  MockParamExtra,
  MockClassLables,
  MockUsableItem,
} from "@RpgTypes/schema";

export const MockLabelRegistry = {
  rpg: {
    actor: DEFAULT_ACTOR_LABELS,

    armor: DEFAULT_ARMOR_LABELS,
    skill: DEFAULT_SKILL_LABELS,
    damage: DEFAULT_DAMAGE_LABELS,
    item: DEFAULT_ITEM_LABELS,
    weapon: DEFAULT_WEAPON_LABELS,
    enemy: DEFAULT_ENEMY_LABELS,
    state: DEFAULT_STATE_LABELS,
    paramSpecial: DEFAULT_PARAMSPECIAL_LABELS,
    paramRegular: DEFAULT_PARAMREGULAR_LABELS,
    paramExtra: MockParamExtra,
    collaps: DEFAULT_COLLAPS_LABELS,
    specialFlag: DEFAULT_SPECIALFLAG_LABELS,
    partyAbility: MockPartyAbility,
    class: MockClassLables,
    usableItem: MockUsableItem,
  },
  global: DEFAULT_GLOBAL_LABELS,
} as const satisfies LabelRegistry;
