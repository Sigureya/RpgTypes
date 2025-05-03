import type { SourceIdentifier } from "@RpgTypes/schema/";
import {
  SRC_COMMON_EVNET,
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_PARAMS_REGULAR,
} from "@RpgTypes/schema/namedItemSource";
import {
  EFFECT_ADD_STATE,
  EFFECT_GROW,
  EFFECT_RECOVER_HP,
  EFFECT_ADD_BUFF,
  EFFECT_ADD_DEBUFF,
  EFFECT_REMOVE_BUFF,
  EFFECT_COMMON_EVENT,
  EFFECT_GAIN_TP,
  EFFECT_LEARN_SKILL,
  EFFECT_RECOVER_MP,
  EFFECT_REMOVE_DEBUFF,
  EFFECT_REMOVE_STATE,
} from "./constants/";
import type { ItemEffect } from "./itemEffect";
import type {
  EffectDefinitionResolved,
  EffectLabelDefinition,
  ItemEffectLabelSet,
} from "./labels";
import { LABEL_SET_ITEM_EFFECT } from "./labels";
import {
  AUTHOR_RMMZ,
  MODULE_DATA,
  MODULE_TRAIT,
} from "@RpgTypes/namedItemSource/";
import { ItemEffectDescriptor } from "./itemEffectDescriptor";
import type { DomainLabel } from "@RpgTypes/templates";
/**
 * @deprecated
 */
export const formatItemEffectText = (
  effectDefine: EffectDefinitionResolved,
  effect: ItemEffect,
  name: string
) => {
  return effectDefine.format
    .replaceAll(`{value1}`, effect.value1.toString())
    .replaceAll(`{value2}`, effect.value2.toString())
    .replaceAll("{name}", name);
};

export const resolveItemEffectLabels = (
  label: DomainLabel<ItemEffectLabelSet>
): ItemEffectDescriptor[] => {
  return [
    defineEffectRecoverHp(label.options.recoverHp),
    defineEffectRecoverMp(label.options.recoverMp),
    defineEffectGainTp(label.options.gainTp),
    defineEffectAddState(label.options.addState),
    defineEffectRemoveState(label.options.removeState),
    defineEffectAddBuff(label.options.addBuff),
    defineEffectAddDebuff(label.options.addDebuff),
    defineEffectRemoveBuff(label.options.removeBuff),
    defineEffectRemoveDebuff(label.options.removeDebuff),
    defineEffectLearnSkill(label.options.learnSkill),
    defineEffectCommonEvent(label.options.commonEvent),
  ];
};

const regularParam = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_REGULAR,
});

const srcData = (sourceKey: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: sourceKey,
});

const defineEffect = (
  code: number,
  baseLabel: EffectLabelDefinition,
  override: Partial<EffectLabelDefinition>,
  dataSource?: SourceIdentifier
): ItemEffectDescriptor => {
  const label = override.domainName ?? baseLabel.domainName;
  const format = override.format ?? baseLabel.format;
  const description = override.desc ?? baseLabel.desc;
  return new ItemEffectDescriptor(code, label, format, description, dataSource);
};

export const defineEffectRecoverHp = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_RECOVER_HP,
    LABEL_SET_ITEM_EFFECT.options.recoverHp,
    labels
  );

export const defineEffectRecoverMp = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_RECOVER_MP,
    LABEL_SET_ITEM_EFFECT.options.recoverMp,
    labels
  );

export const defineEffectGainTp = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(EFFECT_GAIN_TP, LABEL_SET_ITEM_EFFECT.options.gainTp, labels);

export const defineEffectGrow = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(EFFECT_GROW, LABEL_SET_ITEM_EFFECT.options.grow, labels);

export const defineEffectAddState = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_ADD_STATE,
    LABEL_SET_ITEM_EFFECT.options.addState,
    labels,
    srcData(SRC_DATA_STATE)
  );

export const defineEffectRemoveState = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_REMOVE_STATE,
    LABEL_SET_ITEM_EFFECT.options.removeState,
    labels,
    srcData(SRC_DATA_STATE)
  );

export const defineEffectAddBuff = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_ADD_BUFF,
    LABEL_SET_ITEM_EFFECT.options.addBuff,
    labels,
    regularParam()
  );

export const defineEffectRemoveBuff = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_REMOVE_BUFF,
    LABEL_SET_ITEM_EFFECT.options.removeBuff,
    labels,
    regularParam()
  );

export const defineEffectLearnSkill = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_LEARN_SKILL,
    LABEL_SET_ITEM_EFFECT.options.learnSkill,
    labels,
    srcData(SRC_DATA_SKILL)
  );

export const defineEffectAddDebuff = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_ADD_DEBUFF,
    LABEL_SET_ITEM_EFFECT.options.addBuff,
    labels,
    regularParam()
  );

export const defineEffectRemoveDebuff = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_REMOVE_DEBUFF,
    LABEL_SET_ITEM_EFFECT.options.removeDebuff,
    labels,
    regularParam()
  );

export const defineEffectCommonEvent = (
  labels: Partial<EffectLabelDefinition>
): ItemEffectDescriptor =>
  defineEffect(
    EFFECT_COMMON_EVENT,
    LABEL_SET_ITEM_EFFECT.options.commonEvent,
    labels,
    srcData(SRC_COMMON_EVNET)
  );
