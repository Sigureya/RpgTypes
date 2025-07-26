import type { SourceIdentifier } from "@RpgTypes/libs";
import type {
  SourceId_DataCommonEvent,
  SourceId_DataSkill,
  SourceId_DataState,
} from "@RpgTypes/rmmz/rpg";
import {
  EFFECT_SPECIAL,
  type SourceId_TraitRegularParam,
} from "@RpgTypes/rmmz/rpg";
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
} from "./effectCode";
import type {
  EffectDefinitionResolved,
  EffectLabelDefinition,
  ItemEffectLabelSet,
} from "./labels";

export const resolveItemEffectLabels = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved[] => {
  return [
    defineEffectRecoverHp(labels),
    defineEffectRecoverMp(labels),
    defineEffectGainTp(labels),
    defineEffectAddState(labels),
    defineEffectRemoveState(labels),
    defineEffectAddBuff(labels),
    defineEffectAddDebuff(labels),
    defineEffectRemoveBuff(labels),
    defineEffectRemoveDebuff(labels),
    defineEffectSpecial(labels),
    defineEffectGrow(labels),
    defineEffectLearnSkill(labels),
    defineEffectCommonEvent(labels),
  ];
};

const regularParamSourceId = (): SourceId_TraitRegularParam => ({
  author: "rmmz",
  module: "trait",
  kind: "params",
});

const stateSourceId = (): SourceId_DataState => ({
  author: "rmmz",
  module: "data",
  kind: "state",
});

const defineEffect = (
  code: number,
  baseLabel: EffectLabelDefinition,
  dataSource?: SourceIdentifier
): EffectDefinitionResolved => ({
  kindId: code,
  label: baseLabel.domainName,
  pattern: baseLabel.format,
  description: baseLabel.desc,
  dataSource: dataSource,
});

const defineEffectSpecial = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved => defineEffect(EFFECT_SPECIAL, labels.special);

const defineEffectRecoverHp = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_RECOVER_HP, labels.recoverHp);

const defineEffectRecoverMp = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_RECOVER_MP, labels.recoverMp);

const defineEffectGainTp = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved => defineEffect(EFFECT_GAIN_TP, labels.gainTp);

const defineEffectAddState = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_ADD_STATE, labels.addState, stateSourceId());

const defineEffectRemoveState = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_REMOVE_STATE, labels.removeState, stateSourceId());

const defineEffectAddBuff = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_ADD_BUFF, labels.addBuff, regularParamSourceId());

const defineEffectAddDebuff = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_ADD_DEBUFF, labels.addDebuff, regularParamSourceId());

const defineEffectRemoveBuff = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_REMOVE_BUFF, labels.removeBuff, regularParamSourceId());

const defineEffectRemoveDebuff = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(
    EFFECT_REMOVE_DEBUFF,
    labels.removeDebuff,
    regularParamSourceId()
  );

const defineEffectGrow = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_GROW, labels.grow, regularParamSourceId());

const defineEffectLearnSkill = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_LEARN_SKILL, labels.learnSkill, {
    author: "rmmz",
    module: "data",
    kind: "skill",
  } satisfies SourceId_DataSkill);

const defineEffectCommonEvent = (
  labels: ItemEffectLabelSet
): EffectDefinitionResolved =>
  defineEffect(EFFECT_COMMON_EVENT, labels.commonEvent, {
    author: "rmmz",
    module: "data",
    kind: "common_event",
  } satisfies SourceId_DataCommonEvent);
