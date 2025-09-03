import { DomainLabel } from 'src/libs/templates/domainLabel';
import { Data_CommonEventUnknown } from '../event';
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
    commonEvent: DomainLabel<Record<keyof Data_CommonEventUnknown, string>>;
}
