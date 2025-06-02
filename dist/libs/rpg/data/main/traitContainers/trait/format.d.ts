import { Data_NamedItem } from '../../../../../namedItemSource';
import { Trait, TraitLabelResolved } from './types';
export declare const formatTraitText: (descriptor: TraitLabelResolved, trait: Trait, items: Data_NamedItem[], maxNameLength?: number) => string;
export declare const invalidPlaceholders: (format: string) => string[];
export declare const detectTraitLabel: (descriptor: TraitLabelResolved) => string[];
