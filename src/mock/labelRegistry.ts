import type { LabelRegistry } from "@RpgTypes/schema";
import {
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
  MockStateLabels,
  MockUsableItem,
} from "@RpgTypes/schema";
import {
  MockGlobalLabels,
  MockSpecialFlagLabels,
  MockWeaponLabels,
} from "./labels";
export const MockLabelRegistry = {
  rpg: {
    actor: MockActorLabels,

    armor: MockArmorLabels,
    skill: MockSkillLabels,
    damage: {
      domainName: "ダメージ",
      options: {},
    },
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
