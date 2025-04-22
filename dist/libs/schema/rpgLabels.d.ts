import { DomainLabel } from '../templates';
import { DamageLabels, DataLabels, ItemEffectLabelSet, TraitLabelSet } from './data';
export interface RpgLabels {
    data: DataLabels;
    traits: DomainLabel<TraitLabelSet>;
    itemEffect: DomainLabel<ItemEffectLabelSet>;
    damage: DomainLabel<DamageLabels>;
}
