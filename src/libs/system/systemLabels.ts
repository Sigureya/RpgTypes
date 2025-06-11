import type { DomainLabel } from "@RpgTypes/templates";
import type { System_Bgm, System_BooleanOptionsRMMMZ } from "./core";
import type { SystemLabel_DataNames } from "./core/dataTypes";
import type { System_Images, System_Text } from "./subset";
type AsLabel<T> = Record<keyof T, string>;

export type SystemLabel_Images = AsLabel<System_Images>;
export type SystemLabel_Text = AsLabel<System_Text>;
export type SystemLabel_Bgm = AsLabel<System_Bgm>;
export type SystemLabel_BoolanOptions = AsLabel<System_BooleanOptionsRMMMZ>;

export const DEFAULT_SYSTEM_LABELS_BOOLEAN = {
  domainName: "オプション",
  options: {
    optDrawTitle: "ゲームタイトルの描画",
    optDisplayTp: "ウィンドウにTPを表示",
    optFloorDeath: "床ダメージで戦闘不能",
    optSlipDeath: "スリップダメージで戦闘不能",
    optAutosave: "オートセーブを有効化",
    optExtraExp: "控えメンバーも経験値を獲得",
    optFollowers: "隊列歩行",
    optSideView: "戦闘をサイドビューにする",
    optKeyItemsNumber: "大事なものの個数を表示",
    optTransparent: "透明状態で開始",
    optMessageSkip: "メッセージスキップを有効化",
    optSplashScreen: "スプラッシュ画面を表示",
  },
} as const satisfies DomainLabel<SystemLabel_BoolanOptions>;

export const DEFAULT_SYSTEM_LABELS_DATA_TYPES = {
  domainName: "タイプ",

  format: "{name}",

  options: {
    elements: "属性",
    equipTypes: "装備タイプ",
    skillTypes: "スキルタイプ",
    weaponTypes: "武器タイプ",
    armorTypes: "防具タイプ",
    switches: "スイッチ",
    variables: "変数",
  },
} as const satisfies SystemLabel_DataNames;

const LABELS_SYSTEM_BATTLER_PARAMS = {
  domainName: "能力値",
  options: {},
};
