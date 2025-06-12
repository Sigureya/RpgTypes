import { System_Bgm, System_BooleanGameOptions, System_TitleImages } from './core';
import { System_Text } from './subset';
type AsLabel<T> = Record<keyof T, string>;
export type SystemLabel_Images = AsLabel<System_TitleImages>;
export type SystemLabel_Text = AsLabel<System_Text>;
export type SystemLabel_Bgm = AsLabel<System_Bgm>;
export type SystemLabel_BoolanOptions = AsLabel<System_BooleanGameOptions>;
export declare const DEFAULT_SYSTEM_LABELS_BOOLEAN: {
    readonly domainName: "オプション";
    readonly options: {
        readonly optDrawTitle: "ゲームタイトルの描画";
        readonly optDisplayTp: "ウィンドウにTPを表示";
        readonly optFloorDeath: "床ダメージで戦闘不能";
        readonly optSlipDeath: "スリップダメージで戦闘不能";
        readonly optAutosave: "オートセーブを有効化";
        readonly optExtraExp: "控えメンバーも経験値を獲得";
        readonly optFollowers: "隊列歩行";
        readonly optSideView: "戦闘をサイドビューにする";
        readonly optKeyItemsNumber: "大事なものの個数を表示";
        readonly optTransparent: "透明状態で開始";
        readonly optMessageSkip: "メッセージスキップを有効化";
        readonly optSplashScreen: "スプラッシュ画面を表示";
    };
};
export declare const DEFAULT_SYSTEM_LABELS_DATA_TYPES: {
    readonly domainName: "タイプ";
    readonly format: "{name}";
    readonly options: {
        readonly elements: "属性";
        readonly equipTypes: "装備タイプ";
        readonly skillTypes: "スキルタイプ";
        readonly weaponTypes: "武器タイプ";
        readonly armorTypes: "防具タイプ";
        readonly switches: "スイッチ";
        readonly variables: "変数";
    };
};
export declare const LABELS_SYSTEM_BATTLER_PARAMS: {
    readonly domainName: "能力値";
    readonly options: {
        readonly agi: "敏捷";
        readonly atk: "攻撃力";
        readonly def: "防御力";
        readonly eva: "回避";
        readonly hit: "命中";
        readonly luk: "運";
        readonly mat: "魔法攻撃力";
        readonly mdf: "魔法防御力";
        readonly mhp: "最大HP";
        readonly mmp: "最大MP";
    };
};
export declare const LABELS_SYSTEM_GAME_COMMANDS: {
    domainName: string;
    options: {
        item: string;
        skill: string;
        equip: string;
        status: string;
        formation: string;
        options: string;
        save: string;
        gameEnd: string;
        armor: string;
        weapon: string;
        newGame: string;
        attack: string;
        guard: string;
        escape: string;
        fight: string;
        buy: string;
        sell: string;
        cancel: string;
        clear: string;
        continue_: string;
        equip2: string;
        keyItem: string;
        optimize: string;
        toTitle: string;
    };
};
export {};
