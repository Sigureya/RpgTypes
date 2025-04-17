import { CollapsOptionLabels, GlobalLabel, NamedItemSource, PartyAbilityOptionLabels, RegularParamLabels, DomainLabel } from '../../../schema/src';
export declare const traitDomain: <T>(labels: DomainLabel<T>, sourceKey: string, fn: (options: T) => {
    name: string;
    id: number;
}[]) => NamedItemSource;
export declare const buildCollapsSource: (labels: DomainLabel<CollapsOptionLabels>, global: Pick<GlobalLabel, "normal">) => NamedItemSource;
export declare const buildPartyAbilitySource: (labels: DomainLabel<PartyAbilityOptionLabels>) => NamedItemSource;
export declare const buildRegularParamSource: (label: DomainLabel<RegularParamLabels>) => NamedItemSource;
