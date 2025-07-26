import { Data_NamedItem, FormatErrorGroup, FormatErrorLabels, FormatInput, FormatWithSource } from '../../../../../../libs';
import { Trait } from './types';
export declare const formatTraitText: (descriptor: FormatWithSource, trait: Trait, items: ReadonlyArray<Data_NamedItem>) => string;
export declare const detectTraitFormatErrors: (format: FormatInput, errorTexts: FormatErrorLabels) => FormatErrorGroup;
