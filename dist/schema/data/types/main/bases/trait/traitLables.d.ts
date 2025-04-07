import { CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, RegularParamLabels, SpecialFlagOptions, SpecialParamLabels } from './options';
import { TraitTypeLabels } from './traitTypeLabels';
export interface TraitLabels {
    types: TraitTypeLabels;
    options: {
        paramSpecial: SpecialParamLabels;
        paramExtra: ExtraParamLabels;
        paramRegular: RegularParamLabels;
        partyAbility: PartyAbilityOptionLabels;
        collaps: CollapsOptionLabels;
        specialFlag: SpecialFlagOptions;
    };
}
