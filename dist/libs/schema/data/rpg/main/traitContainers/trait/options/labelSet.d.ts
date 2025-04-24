import { CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, RegularParamLabels, SpecialFlagOptions, SpecialParamLabels, TraitLabel, TraitLabelWithOption } from './types';
export interface TraitLabelSet {
    collaps: TraitLabelWithOption<CollapsOptionLabels>;
    regularParam: TraitLabelWithOption<RegularParamLabels>;
    specialParam: TraitLabelWithOption<SpecialParamLabels>;
    extraParam: TraitLabelWithOption<ExtraParamLabels>;
    partyAbility: TraitLabelWithOption<PartyAbilityOptionLabels>;
    specialFlag: TraitLabelWithOption<SpecialFlagOptions>;
    actionPlus: TraitLabel;
    attackElement: TraitLabel;
    attackSkill: TraitLabel;
    attackSpeed: TraitLabel;
    attackState: TraitLabel;
    attackTimes: TraitLabel;
    debuffRate: TraitLabel;
    elementRate: TraitLabel;
    equipWeaponType: TraitLabel;
    equipArmorType: TraitLabel;
    equipLock: TraitLabel;
    equipSeal: TraitLabel;
    skillAdd: TraitLabel;
    skillSeal: TraitLabel;
    stateRate: TraitLabel;
    stateResist: TraitLabel;
    skillTypeAdd: TraitLabel;
    skillTypeSeal: TraitLabel;
    slotType: TraitLabel;
}
