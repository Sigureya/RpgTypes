import { DomainLabel } from '../templates';
import { ActorLabels, ArmorLabels, ClassLabels, CollapsOptionLabels, DamageLabels, ItemEffectLabelSet, EnemyLabels, ExtraParamLabels, ItemLabels, PartyAbilityOptionLabels, RegularParamLabels, SkillLabels, SpecialFlagOptions, SpecialParamLabels, StateLabels, TraitLabelSet, UsableItemLabels, WeaponLabels } from './data';
import { DataLabels } from './data/rpg/main/dataLabels';
export interface RpgLabels {
    paramSpecial: DomainLabel<SpecialParamLabels>;
    paramExtra: DomainLabel<ExtraParamLabels>;
    paramRegular: DomainLabel<RegularParamLabels>;
    partyAbility: DomainLabel<PartyAbilityOptionLabels>;
    collaps: DomainLabel<CollapsOptionLabels>;
    specialFlag: DomainLabel<SpecialFlagOptions>;
    actor: DomainLabel<ActorLabels>;
    weapon: DomainLabel<WeaponLabels>;
    armor: DomainLabel<ArmorLabels>;
    class: DomainLabel<ClassLabels>;
    state: DomainLabel<StateLabels>;
    enemy: DomainLabel<EnemyLabels>;
    usableItem: DomainLabel<UsableItemLabels>;
    item: DomainLabel<ItemLabels>;
    skill: DomainLabel<SkillLabels>;
    damage: DomainLabel<DamageLabels>;
    itemEffect: DomainLabel<ItemEffectLabelSet>;
}
export interface RpgLabels2 {
    data: DataLabels;
    traits: DomainLabel<TraitLabelSet>;
    itemEffect: DomainLabel<ItemEffectLabelSet>;
    damage: DomainLabel<DamageLabels>;
}
