import { FormatErrorLabels, FormatWithSource, Data_NamedItem, FormatErrorGroup, FormatInput } from '../../../../../../libs/namedItemSource';
import { Trait } from './types';
export declare const formatTraitText: (descriptor: FormatWithSource, trait: Trait, items: ReadonlyArray<Data_NamedItem>) => string;
export declare const detectTraitFormatErrors: (format: FormatInput, errorTexts: FormatErrorLabels) => FormatErrorGroup;
