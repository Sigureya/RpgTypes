import { ItemEffect } from '../../../../../rmmz/rpg';
export interface Rmmz_Action_ItemEffect<Battler> {
    applyItemEffect(taget: Battler, effect: ItemEffect): void;
    itemEffectRecoverHp(taget: Battler, effect: ItemEffect): void;
    itemEffectRecoverMp(taget: Battler, effect: ItemEffect): void;
    itemEffectGainTp(taget: Battler, effect: ItemEffect): void;
    itemEffectAddState(taget: Battler, effect: ItemEffect): void;
    itemEffectAddAttackState(taget: Battler, effect: ItemEffect): void;
    itemEffectAddNormalState(taget: Battler, effect: ItemEffect): void;
    itemEffectRemoveState(taget: Battler, effect: ItemEffect): void;
    itemEffectAddBuff(taget: Battler, effect: ItemEffect): void;
    itemEffectAddDebuff(taget: Battler, effect: ItemEffect): void;
    itemEffectRemoveBuff(taget: Battler, effect: ItemEffect): void;
    itemEffectRemoveDebuff(taget: Battler, effect: ItemEffect): void;
    itemEffectSpecial(taget: Battler, effect: ItemEffect): void;
    itemEffectGrow(taget: Battler, effect: ItemEffect): void;
    itemEffectLearnSkill(taget: Battler, effect: ItemEffect): void;
}
