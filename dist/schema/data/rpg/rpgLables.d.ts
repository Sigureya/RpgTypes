import { ActorLabels, EnemyLables, ItemLabels, ItemCodeLabels, SkillLabels, WeaponLabels, ArmorLables, NamedItemLables, ClassLabels, StateLabels, TraitLabels, DamageLabels, UsableItemLabels } from './main';
export interface RpgLabels {
    actor: ActorLabels;
    enemy: EnemyLables;
    item: ItemLabels;
    usableItem: UsableItemLabels;
    itemCode: ItemCodeLabels;
    skill: SkillLabels;
    weapon: WeaponLabels;
    armor: ArmorLables;
    namedItem: NamedItemLables;
    class: ClassLabels;
    state: StateLabels;
    damage: DamageLabels;
    trait: TraitLabels;
    itemEffect: ItemCodeLabels;
}
