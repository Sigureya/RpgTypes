import { ActorLabels, EnemyLables, ItemLabels, ItemCodeLabels, SkillLabels, WeaponLabels, ArmorLables, NamedItemLables, ClassLabels, StateLabels, TraitLabels } from './main';
export interface RpgLabels {
    actor: ActorLabels;
    enemy: EnemyLables;
    item: ItemLabels;
    itemCode: ItemCodeLabels;
    skill: SkillLabels;
    weapon: WeaponLabels;
    armor: ArmorLables;
    namedItem: NamedItemLables;
    class: ClassLabels;
    state: StateLabels;
    trait: TraitLabels;
    itemEffect: ItemCodeLabels;
}
