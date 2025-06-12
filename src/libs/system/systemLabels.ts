import type { DomainLabel } from "@RpgTypes/templates";
import type {
  System_Bgm,
  System_BooleanOptionsRMMMZ,
  System_Images,
  SystemLabel_DataNames,
  SystemLabels_GameCommands,
} from "./core";
import type { SystemLabels_TermsParamNames } from "./core/terms/paramArray";
import type { System_Text } from "./subset";
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

export const LABELS_SYSTEM_BATTLER_PARAMS = {
  domainName: "能力値",
  options: {
    agi: "敏捷",
    atk: "攻撃力",
    def: "防御力",
    eva: "回避",
    hit: "命中",
    luk: "運",
    mat: "魔法攻撃力",
    mdf: "魔法防御力",
    mhp: "最大HP",
    mmp: "最大MP",
  },
} as const satisfies DomainLabel<SystemLabels_TermsParamNames>;

export const LABELS_SYSTEM_GAME_COMMANDS = {
  domainName: "コマンド",
  options: {
    item: "アイテム",
    skill: "スキル",
    equip: "装備",
    status: "ステータス",
    formation: "編成",
    options: "オプション",
    save: "セーブ",
    gameEnd: "ゲーム終了",
    armor: "防具",
    weapon: "武器",
    newGame: "ニューゲーム",
    attack: "攻撃",
    guard: "防御",
    escape: "逃げる",
    fight: "戦う",
    buy: "買う",
    sell: "売る",
    cancel: "キャンセル",
    clear: "クリア",
    continue_: "続きから",
    equip2: "装備2",
    keyItem: "大事なもの",
    optimize: "最強装備",
    toTitle: "タイトルへ戻る",
  },
} satisfies DomainLabel<SystemLabels_GameCommands>;
