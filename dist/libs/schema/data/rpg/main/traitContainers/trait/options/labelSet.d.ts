import { CollapsOptionLabels, ExtraParamLabels, PartyAbilityOptionLabels, RegularParamLabels, SpecialFlagOptions, SpecialParamLabels, RawTraitLabel, TraitLabelWithOption } from './types';
export interface TraitLabelSet {
    collaps: TraitLabelWithOption<CollapsOptionLabels>;
    regularParam: TraitLabelWithOption<RegularParamLabels>;
    specialParam: TraitLabelWithOption<SpecialParamLabels>;
    extraParam: TraitLabelWithOption<ExtraParamLabels>;
    partyAbility: TraitLabelWithOption<PartyAbilityOptionLabels>;
    specialFlag: TraitLabelWithOption<SpecialFlagOptions>;
    actionPlus: RawTraitLabel;
    attackElement: RawTraitLabel;
    attackSkill: RawTraitLabel;
    attackSpeed: RawTraitLabel;
    attackState: RawTraitLabel;
    attackTimes: RawTraitLabel;
    debuffRate: RawTraitLabel;
    elementRate: RawTraitLabel;
    equipWeaponType: RawTraitLabel;
    equipArmorType: RawTraitLabel;
    equipLock: RawTraitLabel;
    equipSeal: RawTraitLabel;
    skillAdd: RawTraitLabel;
    skillSeal: RawTraitLabel;
    stateRate: RawTraitLabel;
    stateResist: RawTraitLabel;
    skillTypeAdd: RawTraitLabel;
    skillTypeSeal: RawTraitLabel;
    slotType: RawTraitLabel;
}
