import { SourceIdentifier } from '../../../../../../..';
export interface EffectDefinitionResolved {
    codeId: number;
    label: string;
    format: string;
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
