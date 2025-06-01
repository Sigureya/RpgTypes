import { ItemEffect } from './itemEffect';
import { EffectDefinitionResolved, EffectLabelDefinition, ItemEffectLabelSet } from './labels';
import { ItemEffectDescriptor } from './itemEffectDescriptor';
import { DomainLabel } from '../../../../../../templates';
/**
 * @deprecated
 */
export declare const formatItemEffectText: (effectDefine: EffectDefinitionResolved, effect: ItemEffect, name: string) => string;
export declare const resolveItemEffectLabels: (label: DomainLabel<ItemEffectLabelSet>) => ItemEffectDescriptor[];
export declare const defineEffectRecoverHp: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectRecoverMp: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectGainTp: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectGrow: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectAddState: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectRemoveState: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectAddBuff: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectRemoveBuff: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectLearnSkill: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectAddDebuff: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectRemoveDebuff: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
export declare const defineEffectCommonEvent: (labels: Partial<EffectLabelDefinition>) => ItemEffectDescriptor;
