import { DomainLabel } from 'src/libs/templates/domainLabel';
import { DataLabels, TraitLabelSet, ItemEffectLabelSet, DamageLabels } from './data';
export interface RpgLabels {
    data: DataLabels;
    traits: DomainLabel<TraitLabelSet>;
    itemEffect: DomainLabel<ItemEffectLabelSet>;
    damage: DomainLabel<DamageLabels>;
}
