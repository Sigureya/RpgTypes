import type { DomainLabel } from "src/templates";
import type { DataLabels } from "./dataLabels";
import type {
  ActorLabels,
  ArmorLabels,
  ClassLabels,
  EnemyLabels,
  StateLabels,
  WeaponLabels,
} from "./traitContainers";
import type { ItemLabels, SkillLabels, UsableItemLabels } from "./usableItems";

export const LABEL_SET_DATA = {
  actor: {
    domainName: "アクター",
    options: {
      initialEquipments: "初期装備",
      faceImage: "顔画像",
      characterImage: "キャラクター画像",
      svBattlerImage: "SVバトラー画像",
      nickname: "ニックネーム",
      profile: "プロフィール",
      classId: "職業ID",
      initialLevel: "初期レベル",
      maxLevel: "最大レベル",
    },
  } as const satisfies DomainLabel<ActorLabels>,
  class: {
    domainName: "職業",
    options: {
      params: "パラメータ",
      learnings: "習得スキル",
      expParams: "経験値パラメータ",
    },
  } as const satisfies DomainLabel<ClassLabels>,
  armor: {
    domainName: "防具",
    options: {
      armorTypeId: "防具タイプID",
      slotTypeId: "スロットタイプID",
    },
  } as const satisfies DomainLabel<ArmorLabels>,
  enemy: {
    domainName: "敵キャラ",
    options: {
      dropItems: "ドロップアイテム",
      battlerHue: "バトラーヒュー",
      battlerName: "バトラー名",
      gold: "ゴールド",
    },
  } as const satisfies DomainLabel<EnemyLabels>,
  item: {
    domainName: "アイテム",
    options: {
      consumable: "消耗品",
    },
  } as const satisfies DomainLabel<ItemLabels>,
  skill: {
    domainName: "スキル",
    options: {
      requiredWeaponTypeId1: "必要武器タイプ1",
      requiredWeaponTypeId2: "必要武器タイプ2",
      mpCost: "MP消費",
      tpCost: "TP消費",
    },
  } as const satisfies DomainLabel<SkillLabels>,
  state: {
    domainName: "ステート",
    options: {
      restriction: "制約",
      priority: "優先度",
      motion: "モーション",
      overlay: "オーバーレイ",
      removeAtBattleEnd: "戦闘終了時解除",
      removeByRestriction: "制約による解除",
      autoRemovalTiming: "自動解除タイミング",
      minTurns: "最小ターン数",
      maxTurns: "最大ターン数",
      removeByDamage: "ダメージによる解除",
      chanceByDamage: "ダメージによる解除確率",
      removeByWalking: "歩行による解除",
      stepsToRemove: "解除までの歩数",
    },
  } as const satisfies DomainLabel<StateLabels>,
  weapon: {
    domainName: "武器",
    options: {
      weaponTypeId: "武器タイプID",
    },
  } as const satisfies DomainLabel<WeaponLabels>,
  usableItem: {
    domainName: "",
    options: {
      scope: "範囲",
      speed: "速度補正",
      successRate: "成功率",
    },
  } as const satisfies DomainLabel<UsableItemLabels>,
} as const satisfies DataLabels;
