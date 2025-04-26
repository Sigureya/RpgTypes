import { TraitLabelResolved, RawTraitLabel, TraitLabelSet } from './options';
import { Trait } from './types';
import { TraitLabelDescriptor } from './traitLabelDescriptor';
export declare const resolveTraitLabels: (labels: TraitLabelSet) => TraitLabelDescriptor[];
/**
 * @deprecated
 */
export declare const formatTraitText: (traitDefine: TraitLabelResolved, trait: Trait, name: string) => string;
export declare const defineTraitElementRate: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitDebuffRate: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitStateRate: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitStateResist: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitRegularParam: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitExtraParam: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSpecialParam: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitAttackElement: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitAttackState: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitAttackSpeed: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitAttackTimes: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitAttackSkill: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitActionPlus: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSpecialFlag: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitCollapseType: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitPartyAbility: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitEquipWeaponType: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitEquipArmorType: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitEquipLock: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitEquipSeal: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSkillAdd: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSkillSeal: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSlotType: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSkillTypeAdd: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
export declare const defineTraitSkillTypeSeal: (label: Partial<RawTraitLabel>) => TraitLabelDescriptor;
