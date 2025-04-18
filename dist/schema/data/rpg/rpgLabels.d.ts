import { ActorLabels, NamedItemLabels, TraitLabels, RegularParamLabels, CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, SpecialFlagOptions, SpecialParamLabels } from './main';
export interface RpgLabels {
    namedItem: NamedItemLabels;
    trait: TraitLabels;
    paramSpecial: SpecialParamLabels;
    paramExtra: ExtraParamLabels;
    paramRegular: RegularParamLabels;
    partyAbility: PartyAbilityOptionLabels;
    collaps: CollapsOptionLabels;
    specialFlag: SpecialFlagOptions;
    actor: ActorLabels;
}
