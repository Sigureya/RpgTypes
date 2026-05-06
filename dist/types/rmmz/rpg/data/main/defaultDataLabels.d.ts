import { ActorLabels, ArmorLabels, ClassLabels, EnemyLabels, StateLabels, WeaponLabels } from './traitContainers';
import { ItemLabels, SkillLabels, UsableItemLabels } from './usableItems';
export declare const LABEL_SET_DATA: {
    readonly actor: DomainLabel<ActorLabels>;
    readonly class: DomainLabel<ClassLabels>;
    readonly armor: DomainLabel<ArmorLabels>;
    readonly enemy: DomainLabel<EnemyLabels>;
    readonly item: DomainLabel<ItemLabels>;
    readonly skill: DomainLabel<SkillLabels>;
    readonly state: DomainLabel<StateLabels>;
    readonly weapon: DomainLabel<WeaponLabels>;
    readonly usableItem: DomainLabel<UsableItemLabels>;
    readonly commonEvent: {
        readonly title: "コモンイベント";
        readonly options: {
            readonly trigger: "トリガー";
            readonly switchId: "スイッチID";
            readonly name: "名前";
            readonly id: "ID";
            readonly list: "コマンドリスト";
        };
    };
};
