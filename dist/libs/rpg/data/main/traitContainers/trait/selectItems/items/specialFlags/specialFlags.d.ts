import { DomainLabel } from '../../../../../../../../templates';
import { SpecialFlagOptions } from './labels';
import { Data_NamedItem, NamedItemSource, SourceIdentifier } from '../../../../../../../../namedItemSource';
export declare const defineTraitSpecialFlag: (label: DomainLabel<SpecialFlagOptions>) => NamedItemSource;
export declare const specialFlagSourceId: () => SourceIdentifier;
export declare const specialFlagToArray: (label: SpecialFlagOptions) => Data_NamedItem[];
