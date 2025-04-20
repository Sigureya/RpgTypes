import type { LabelRegistry } from "@RpgTypes/schema";
import {
  MockActorLabels,
  MockClassLables,
  MockCollapsLabels,
  MockEnemyLabels,
  MockParamExtra,
  MockParamRegularLabels,
  MockParamSpecialLabels,
  MockPartyAbility,
  MockSkillLabels,
  MockStateLabels,
} from "@RpgTypes/schema";
import {
  MockGlobalLabels,
  MockSpecialFlagLabels,
  MockUsableItem,
  MockWeaponLabels,
} from "./labels";
import { MockArmorLabels } from "@RpgTypes/schema";
import { MockItemLabels } from "@RpgTypes/schema/data/rpg/main/usableItems/itemDefault";
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
