import { Game_Unit } from "./Game_Unit";
import { IUnit, IUsableItem, IBattler } from "./types/";
import { Data_UsableItem } from "../../schema";
//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.
export declare class Game_Action {
  _subjectActorId: number;
  _subjectEnemyIndex: number;
  _forcing: boolean;
  _item: IUsableItem;
  _targetIndex: number;
  _reflectionTarget: any;
  static HITTYPE_CERTAIN: any;
  static HITTYPE_PHYSICAL: any;
  static HITTYPE_MAGICAL: any;
  static EFFECT_RECOVER_HP: any;
  static EFFECT_RECOVER_MP: any;
  static EFFECT_ADD_STATE: any;
  static EFFECT_REMOVE_STATE: any;
  static EFFECT_ADD_BUFF: any;
  static EFFECT_ADD_DEBUFF: any;
  static EFFECT_REMOVE_BUFF: any;
  static EFFECT_REMOVE_DEBUFF: any;
  static EFFECT_LEARN_SKILL: any;
  static EFFECT_GAIN_TP: any;
  static EFFECT_SPECIAL: any;
  static EFFECT_GROW: any;
  static EFFECT_COMMON_EVENT: any;
  static SPECIAL_EFFECT_ESCAPE: any;
  constructor(subject: IBattler, forcing: boolean);
  initialize(subject: IBattler, forcing: boolean): void;
  clear(): void;
  setSubject(subject: IBattler): void;
  subject(): IBattler;
  friendsUnit(): IUnit<IBattler>;
  opponentsUnit(): IUnit<IBattler>;
  setEnemyAction(action: any): void;
  setAttack(): any;
  setGuard(): any;
  setSkill(skillId: number): any;
  setItem(itemId: number): any;
  setItemObject(object: Data_UsableItem): any;
  setTarget(targetIndex: number): any;
  item(): Data_UsableItem | null;
  isSkill(): boolean;
  isItem(): boolean;
  numRepeats(): number;
  checkItemScope(list: number[]): any;
  isForOpponent(): boolean;
  isForFriend(): boolean;
  isForEveryone(): boolean;
  isForAliveFriend(): boolean;
  isForDeadFriend(): boolean;
  isForUser(): boolean;
  isForOne(): boolean;
  isForRandom(): boolean;
  isForAll(): boolean;
  needsSelection(): any;
  numTargets(): any;
  checkDamageType(list: []): any;
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
  decideRandomTarget(): void;
  setConfusion(): any;
  prepare(): void;
  isValid(): boolean;
  speed(): number;
  makeTargets(): IBattler[];
  repeatTargets(targets: IBattler[]): IBattler[];
  confusionTarget(): IBattler;
  targetsForEveryone(): IBattler[];
  targetsForOpponents(): IBattler[];
  targetsForFriends(): IBattler[];
  randomTargets(unit: IUnit<IBattler>): IBattler[];
  targetsForDead(unit: Game_Unit): IBattler[];
  targetsForAlive(unit: IUnit<IBattler>): IBattler[];
  targetsForDeadAndAlive(unit: Game_Unit): IBattler[];
  evaluate(): number;
  itemTargetCandidates(): number;
  evaluateWithTarget(target: IBattler): number;
  testApply(target: IBattler): boolean;
  testLifeAndDeath(target: IBattler): boolean;
  hasItemAnyValidEffects(target: IBattler): boolean;
  testItemEffect(target: IBattler, effect: any): boolean;
  itemCnt(target: IBattler): number;
  itemMrf(target: IBattler): number;
  itemHit(battler: IBattler): number;
  itemEva(target: IBattler): number;
  itemCri(target: IBattler): number;
  apply(target: IBattler): void;
  makeDamageValue(target: IBattler, critical: boolean): number;
  evalDamageFormula(target: IBattler): number;
  calcElementRate(target: IBattler): number;
  elementsMaxRate(target: IBattler, elements: number[]): number;
  applyCritical(damage: number): any;
  applyVariance(damage: number, variance: number): number;
  applyGuard(damage: number, target: IBattler): any;
  executeDamage(target: IBattler, value: number): void;
  executeHpDamage(target: IBattler, value: number): void;
  executeMpDamage(target: IBattler, value: number): void;
  gainDrainedHp(value: number): void;
  gainDrainedMp(value: number): void;
  applyItemEffect(taget: IBattler, effect: any): void;
  itemEffectRecoverHp(taget: IBattler, effect: any): void;
  itemEffectRecoverMp(taget: IBattler, effect: any): void;
  itemEffectGainTp(taget: IBattler, effect: any): void;
  itemEffectAddState(taget: IBattler, effect: any): void;
  itemEffectAddAttackState(taget: IBattler, effect: any): void;
  itemEffectAddNormalState(taget: IBattler, effect: any): void;
  itemEffectRemoveState(taget: IBattler, effect: any): void;
  itemEffectAddBuff(taget: IBattler, effect: any): void;
  itemEffectAddDebuff(taget: IBattler, effect: any): void;
  itemEffectRemoveBuff(taget: IBattler, effect: any): void;
  itemEffectRemoveDebuff(taget: IBattler, effect: any): void;
  itemEffectSpecial(taget: IBattler, effect: any): void;
  itemEffectGrow(taget: IBattler, effect: any): void;

  itemEffectLearnSkill(taget: IBattler, effect: any): void;
  makeSuccess(target: IBattler): any;
}
