import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
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
import type { EffectDefinitionResolved, EffectLabelDefinition } from "./labels";
import {
  DEFAULT_LABEL_RECOVER_HP,
  DEFAULT_LABEL_RECOVER_MP,
  DEFAULT_LABEL_GAIN_TP,
  DEFAULT_LABEL_ADD_STATE,
  DEFAULT_LABEL_REMOVE_STATE,
  DEFAULT_LABEL_ADD_BUFF,
  DEFAULT_LABEL_ADD_DEBUFF,
  DEFAULT_LABEL_REMOVE_BUFF,
  DEFAULT_LABEL_REMOVE_DEBUFF,
  DEFAULT_LABEL_GROW,
  DEFAULT_LABEL_LEARN_SKILL,
  DEFAULT_LABEL_COMMON_EVENT,
} from "./labels";
import {
  AUTHOR_RMMZ,
  MODULE_DATA,
  MODULE_TRAIT,
} from "@RpgTypes/namedItemSource/";

export const formatEffectText = (
  effectDefine: EffectDefinitionResolved,
  effect: ItemEffect,
  name: string
) => {
  return effectDefine.format
    .replaceAll(`{value1}`, effect.value1.toString())
    .replaceAll(`{value2}`, effect.value2.toString())
    .replaceAll("{name}", name);
};

const regularParam = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  sourceKey: SRC_PARAMS_REGULAR,
});

const srcData = (sourceKey: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  sourceKey,
});

export const defineEffect = (
  codeId: number,
  baseLabel: EffectLabelDefinition,
  override: Partial<EffectLabelDefinition>,
  dataSource?: SourceIdentifier
): EffectDefinitionResolved => ({
  codeId,
  label: override.domainName ?? baseLabel.domainName,
  format: override.format ?? baseLabel.format,
  description: override.desc ?? baseLabel.desc,
  dataSource: dataSource,
});

export const defineEffectRecoverHp = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(EFFECT_RECOVER_HP, DEFAULT_LABEL_RECOVER_HP, labels);

export const defineEffectRecoverMp = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(EFFECT_RECOVER_MP, DEFAULT_LABEL_RECOVER_MP, labels);

export const defineEffectGainTp = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(EFFECT_GAIN_TP, DEFAULT_LABEL_GAIN_TP, labels);

export const defineEffectGrow = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(EFFECT_GROW, DEFAULT_LABEL_GROW, labels);

export const defineEffectAddState = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_ADD_STATE,
    DEFAULT_LABEL_ADD_STATE,
    labels,
    srcData(SRC_DATA_STATE)
  );

export const defineEffectRemoveState = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_REMOVE_STATE,
    DEFAULT_LABEL_REMOVE_STATE,
    labels,
    srcData(SRC_DATA_STATE)
  );

export const defineEffectAddBuff = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(EFFECT_ADD_BUFF, DEFAULT_LABEL_ADD_BUFF, labels, regularParam());

export const defineEffectRemoveBuff = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_REMOVE_BUFF,
    DEFAULT_LABEL_REMOVE_BUFF,
    labels,
    regularParam()
  );

export const defineEffectLearnSkill = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_LEARN_SKILL,
    DEFAULT_LABEL_LEARN_SKILL,
    labels,
    srcData(SRC_DATA_SKILL)
  );

export const defineEffectAddDebuff = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_ADD_DEBUFF,
    DEFAULT_LABEL_ADD_DEBUFF,
    labels,
    regularParam()
  );

export const defineEffectRemoveDebuff = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_REMOVE_DEBUFF,
    DEFAULT_LABEL_REMOVE_DEBUFF,
    labels,
    regularParam()
  );

export const defineEffectCommonEvent = (
  labels: Partial<EffectLabelDefinition>
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_COMMON_EVENT,
    DEFAULT_LABEL_COMMON_EVENT,
    labels,
    srcData(SRC_COMMON_EVNET)
  );
