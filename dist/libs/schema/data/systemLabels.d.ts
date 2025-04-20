import { System_DataNames, System_Images, System_Text, System_Bgm, System_BoolanOptions } from './system';
type AsLabel<T> = Record<keyof T, string>;
export type SystemLabel_DataNames = AsLabel<System_DataNames>;
export type SystemLabel_Images = AsLabel<System_Images>;
export type SystemLabel_Text = AsLabel<System_Text>;
export type SystemLabel_Bgm = AsLabel<System_Bgm>;
export type SystemLabel_BoolanOptions = AsLabel<System_BoolanOptions>;
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
export declare const MockSystemLabelDataTypes: {
    readonly domainName: "タイプ";
    readonly options: {
        readonly armorTypes: "防具タイプ";
        readonly elements: "属性";
        readonly equipTypes: "装備タイプ";
        readonly skillTypes: "スキルタイプ";
        readonly weaponTypes: "武器タイプ";
        readonly switches: "スイッチ";
        readonly variables: "変数";
    };
};
export {};
