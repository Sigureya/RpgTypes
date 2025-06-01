import { Data_NamedItem2 } from '../../../../../schema';
import { Trait, TraitLabelResolved } from './types';
export declare const formatTraitText: (descriptor: TraitLabelResolved, trait: Trait, items: Data_NamedItem2[], maxNameLength?: number) => string;
export declare const invalidPlaceholders: (format: string) => string[];
export declare const detectTraitLabel: (descriptor: TraitLabelResolved) => string[];
