interface RawEffectLabel {
  label: string;
  format: string;
}

export interface ItemEffectLabels {
  recoverHp: RawEffectLabel;
  recoverMp: RawEffectLabel;
  gainTp: RawEffectLabel;
  addState: RawEffectLabel;
  removeState: RawEffectLabel;
  addBuff: RawEffectLabel;
  addDebuff: RawEffectLabel;
  removeBuff: RawEffectLabel;
  removeDebuff: RawEffectLabel;
  grow: RawEffectLabel;
  learnSkill: RawEffectLabel;
  commonEvent: RawEffectLabel;
}
