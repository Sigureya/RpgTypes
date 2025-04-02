import { CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, RegularParamLabels, SpecialFlagOptions, SpecialParamLabels } from './options';
import { TraitTypeLabels } from './traitTypeLabels';
export interface TraitLabels {
    types: TraitTypeLabels;
    options: {
        paramSpecial: SpecialParamLabels;
        partyAbility: PartyAbilityOptionLabels;
        collaps: CollapsOptionLabels;
        specialFlag: SpecialFlagOptions;
        regularParam: RegularParamLabels;
        extraParam: ExtraParamLabels;
    };
}
