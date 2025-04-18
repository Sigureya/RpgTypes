import type { LabelRegistry } from "@RpgTypes/schema";
import {
  MockActorLabels,
  MockClassLables,
  MockEnemyLabels,
  MockGlobalLabels,
  MockParamExtra,
  MockParamRegularLabels,
  MockParamSpecialLabels,
  MockSkillLabels,
  MockStateLabels,
} from "./labels";
import { MockArmorLabels } from "./labels/armor";
import { MockPartyAbility } from "./labels/traits/partyAbility";

export const MockLabelRegistry = {
  rpg: {
    actor: MockActorLabels,

    armor: MockArmorLabels,
    skill: MockSkillLabels,
    damage: {
      domainName: "ダメージ",
      options: {},
    },
    item: {
      domainName: "アイテム",
      options: {
        consumable: "消耗品",
      },
    },
    class: MockClassLables,
    enemy: MockEnemyLabels,
    collaps: {
      domainName: "消滅エフェクト",
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし",
      },
    },
    paramExtra: MockParamExtra,
    paramSpecial: MockParamSpecialLabels,
    paramRegular: MockParamRegularLabels,
    partyAbility: MockPartyAbility,
    weapon: {
      domainName: "武器",
      options: {
        weaponTypeId: "武器タイプID",
      },
    },
    usableItem: {
      domainName: "",
      options: { scope: "範囲", speed: "速度補正", successRate: "成功率" },
    },
    state: MockStateLabels,
    specialFlag: {
      domainName: "特殊フラグ",
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止",
      },
    },
  },
  global: MockGlobalLabels,
} as const satisfies LabelRegistry;
