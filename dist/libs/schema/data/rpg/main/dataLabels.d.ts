import { DomainLabel } from '../../../../templates';
import { WeaponLabels, ArmorLabels, EnemyLabels, ActorLabels, ClassLabels, StateLabels } from './traitContainers';
import { ItemLabels, SkillLabels, UsableItemLabels } from './usableItems';
export interface DataLabels {
    weapon: DomainLabel<WeaponLabels>;
    armor: DomainLabel<ArmorLabels>;
    enemy: DomainLabel<EnemyLabels>;
    actor: DomainLabel<ActorLabels>;
    class: DomainLabel<ClassLabels>;
    state: DomainLabel<StateLabels>;
    item: DomainLabel<ItemLabels>;
    skill: DomainLabel<SkillLabels>;
    usableItem: DomainLabel<UsableItemLabels>;
}
