import { DomainLabel } from '../../libs/templates';
import { DataLabels, TraitLabelSet, ItemEffectLabelSet, DamageLabels } from './data';
export interface RpgLabels {
    data: DataLabels;
    traits: DomainLabel<TraitLabelSet>;
    itemEffect: DomainLabel<ItemEffectLabelSet>;
    damage: DomainLabel<DamageLabels>;
}
