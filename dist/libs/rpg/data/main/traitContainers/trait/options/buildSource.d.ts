import { GlobalLabel, NamedItemSource } from '../../../../../../schema';
import { CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, RegularParamLabels, SpecialFlagOptions, SpecialParamLabels } from './types';
import { DomainLabel } from '../../../../../../templates';
export declare const traitDomain: <T>(sourceKey: string, labels: DomainLabel<T>, fn: (options: T) => {
    name: string;
    id: number;
}[]) => NamedItemSource;
export declare const buildCollapsSource: (labels: DomainLabel<CollapsOptionLabels>, global: Pick<GlobalLabel, "normal">) => NamedItemSource;
export declare const buildPartyAbilitySource: (labels: DomainLabel<PartyAbilityOptionLabels>) => NamedItemSource;
export declare const buildRegularParamSource: (label: DomainLabel<RegularParamLabels>) => NamedItemSource;
export declare const buildExtraParamSource: (label: DomainLabel<ExtraParamLabels>) => NamedItemSource;
export declare const buildSpecialParamSource: (label: DomainLabel<SpecialParamLabels>) => NamedItemSource;
export declare const buildSpecialFlagSource: (label: DomainLabel<SpecialFlagOptions>) => NamedItemSource;
