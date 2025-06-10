import { SourceIdentifier } from '../../../../../../../namedItemSource';
export interface EffectDefinitionResolved {
    kindId: number;
    label: string;
    pattern: string;
    description: string;
    dataSource?: SourceIdentifier;
}
export interface EffectLabelDefinition {
    desc: string;
    domainName: string;
    format: string;
}
export interface ItemEffectLabelSet {
    addBuff: EffectLabelDefinition;
    addDebuff: EffectLabelDefinition;
    gainTp: EffectLabelDefinition;
    grow: EffectLabelDefinition;
    learnSkill: EffectLabelDefinition;
    recoverHp: EffectLabelDefinition;
    recoverMp: EffectLabelDefinition;
    removeBuff: EffectLabelDefinition;
    removeDebuff: EffectLabelDefinition;
    removeState: EffectLabelDefinition;
    special: EffectLabelDefinition;
    addState: EffectLabelDefinition;
    commonEvent: EffectLabelDefinition;
}
