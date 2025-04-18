import { CollapsOptionLabels, GlobalLabel, NamedItemSource, PartyAbilityOptionLabels, RegularParamLabels, DomainLabel, ExtraParamLabels, SpecialParamLabels } from '../../schema';
export declare const traitDomain: <T>(sourceKey: string, labels: DomainLabel<T>, fn: (options: T) => {
    name: string;
    id: number;
}[]) => NamedItemSource;
export declare const buildCollapsSource: (labels: DomainLabel<CollapsOptionLabels>, global: Pick<GlobalLabel, "normal">) => NamedItemSource;
export declare const buildPartyAbilitySource: (labels: DomainLabel<PartyAbilityOptionLabels>) => NamedItemSource;
export declare const buildRegularParamSource: (label: DomainLabel<RegularParamLabels>) => NamedItemSource;
export declare const buildExtraParamSource: (label: DomainLabel<ExtraParamLabels>) => NamedItemSource;
export declare const buildSpecialParamSource: (label: DomainLabel<SpecialParamLabels>) => NamedItemSource;
