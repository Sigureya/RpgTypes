import { NamedItemSource } from '../../../../../../namedItemSource';
import { EffectDefinitionResolved, ItemEffectLabelSet } from './labels';
import { EscapeLabel } from './specialEffect';
export declare const definetItemEffectEntries: (labelSet: ItemEffectLabelSet, escapeLabels: EscapeLabel) => NamedItemSource[];
export declare const resolveItemEffectLabels: (labels: ItemEffectLabelSet) => EffectDefinitionResolved[];
