import type { LabelRegistry } from "@RpgTypes/schema";
import {
  DEFAULT_DAMAGE_LABELS,
  MockActorLabels,
  MockArmorLabels,
  MockClassLables,
  MockCollapsLabels,
  MockEnemyLabels,
  MockItemLabels,
  MockParamExtra,
  MockParamRegularLabels,
  MockParamSpecialLabels,
  MockPartyAbility,
  MockSkillLabels,
  MockSpecialFlagLabels,
  MockStateLabels,
  MockUsableItem,
} from "@RpgTypes/schema";
import { MockWeaponLabels, MockGlobalLabels } from "./labels";
export const MockLabelRegistry = {
  rpg: {
    actor: MockActorLabels,

    armor: MockArmorLabels,
    skill: MockSkillLabels,
    damage: DEFAULT_DAMAGE_LABELS,
    item: MockItemLabels,
    class: MockClassLables,
    enemy: MockEnemyLabels,
    collaps: MockCollapsLabels,
    paramExtra: MockParamExtra,
    paramSpecial: MockParamSpecialLabels,
    paramRegular: MockParamRegularLabels,
    partyAbility: MockPartyAbility,
    weapon: MockWeaponLabels,
    usableItem: MockUsableItem,
    state: MockStateLabels,
    specialFlag: MockSpecialFlagLabels,
  },
  global: MockGlobalLabels,
} as const satisfies LabelRegistry;
