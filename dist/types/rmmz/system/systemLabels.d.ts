import { System_Bgm, System_BooleanGameOptions, System_TitleImages, SystemLabels_GameCommands, SystemLabels_TermsParamNames } from './core';
import { System_Text } from './subset';
type AsLabel<T> = Record<keyof T, string>;
export type SystemLabel_Images = AsLabel<System_TitleImages>;
export type SystemLabel_Text = AsLabel<System_Text>;
export type SystemLabel_Bgm = AsLabel<System_Bgm>;
export type SystemLabel_BoolanOptions = AsLabel<System_BooleanGameOptions>;
export declare const DEFAULT_SYSTEM_LABELS_BOOLEAN: DomainLabel<SystemLabel_BoolanOptions>;
export declare const DEFAULT_SYSTEM_LABELS_DATA_TYPES: {
    readonly title: "タイプ";
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
export declare const LABELS_SYSTEM_BATTLER_PARAMS: DomainLabel<SystemLabels_TermsParamNames>;
export declare const LABELS_SYSTEM_GAME_COMMANDS: DomainLabel<SystemLabels_GameCommands>;
export {};
