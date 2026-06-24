import type {
  Enemy_Action,
  Data_UsableItem,
  ItemEffect,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Action, Rmmz_Battler, Rmmz_Unit } from "./core";

declare global {
  class Game_Action implements Rmmz_Action {
    clear(): void;
    setSubject(subject: Rmmz_Battler): void;
    subject(): Rmmz_Battler;
    friendsUnit(): Rmmz_Unit<Rmmz_Battler>;
    opponentsUnit(): Rmmz_Unit<Rmmz_Battler>;
    setEnemyAction(action: Enemy_Action): void;
    setAttack(): void;
    setGuard(): void;
    setSkill(skillId: number): void;
    setItem(itemId: number): void;
    setItemObject(object: Data_UsableItem): void;
    setTarget(targetIndex: number): void;
    item(): Data_UsableItem | null;
    isSkill(): boolean;
    isItem(): boolean;
    numRepeats(): number;
    decideRandomTarget(): void;
    setConfusion(): void;
    prepare(): void;
    isValid(): boolean;
    speed(): number;
    evaluate(): number;
    itemTargetCandidates(): number;
    evaluateWithTarget(target: Rmmz_Battler): number;
    testApply(target: Rmmz_Battler): boolean;
    testLifeAndDeath(target: Rmmz_Battler): boolean;
    hasItemAnyValidEffects(target: Rmmz_Battler): boolean;
    testItemEffect(target: Rmmz_Battler, effect: ItemEffect): boolean;
    itemCnt(target: Rmmz_Battler): number;
    itemMrf(target: Rmmz_Battler): number;
    itemHit(battler: Rmmz_Battler): number;
    itemEva(target: Rmmz_Battler): number;
    itemCri(target: Rmmz_Battler): number;
    applyItemEffect(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectRecoverHp(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectRecoverMp(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectGainTp(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectAddState(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectAddAttackState(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectAddNormalState(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectRemoveState(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectAddBuff(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectAddDebuff(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectRemoveBuff(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectRemoveDebuff(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectSpecial(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectGrow(taget: Rmmz_Battler, effect: ItemEffect): void;
    itemEffectLearnSkill(taget: Rmmz_Battler, effect: ItemEffect): void;
    checkDamageType(list: ReadonlyArray<number>): boolean;
    isHpEffect(): boolean;
    isMpEffect(): boolean;
    isDamage(): boolean;
    isRecover(): boolean;
    isDrain(): boolean;
    isHpRecover(): boolean;
    isMpRecover(): boolean;
    isCertainHit(): boolean;
    isPhysical(): boolean;
    isMagical(): boolean;
    isAttack(): boolean;
    isGuard(): boolean;
    isMagicSkill(): boolean;
    isForOpponent(): boolean;
    isForFriend(): boolean;
    isForEveryone(): boolean;
    isForAliveFriend(): boolean;
    isForDeadFriend(): boolean;
    isForUser(): boolean;
    isForOne(): boolean;
    isForRandom(): boolean;
    isForAll(): boolean;
    needsSelection(): boolean;
    makeDamageValue(target: Rmmz_Battler, critical: boolean): number;
    evalDamageFormula(target: Rmmz_Battler): number;
    calcElementRate(target: Rmmz_Battler): number;
    elementsMaxRate(
      target: Rmmz_Battler,
      elements: ReadonlyArray<number>,
    ): number;
    applyCritical(damage: number): number;
    applyVariance(damage: number, variance: number): number;
    applyGuard(damage: number, target: Rmmz_Battler): number;
    executeDamage(target: Rmmz_Battler, value: number): void;
    executeHpDamage(target: Rmmz_Battler, value: number): void;
    executeMpDamage(target: Rmmz_Battler, value: number): void;
    gainDrainedHp(value: number): void;
    gainDrainedMp(value: number): void;
    makeSuccess(target: Rmmz_Battler): void;
    apply(target: Rmmz_Battler): void;
    makeTargets(): Rmmz_Battler[];
    repeatTargets(targets: readonly Rmmz_Battler[]): Rmmz_Battler[];
    confusionTarget(): Rmmz_Battler;
    targetsForEveryone(): Rmmz_Battler[];
    targetsForOpponents(): Rmmz_Battler[];
    targetsForFriends(): Rmmz_Battler[];
    randomTargets(unit: Rmmz_Unit<Rmmz_Battler>): Rmmz_Battler[];
    targetsForDead(unit: Rmmz_Unit<Rmmz_Battler>): Rmmz_Battler[];
    targetsForAlive(unit: Rmmz_Unit<Rmmz_Battler>): Rmmz_Battler[];
    targetsForDeadAndAlive(unit: Rmmz_Unit<Rmmz_Battler>): Rmmz_Battler[];
  }
}
