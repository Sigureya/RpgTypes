import type {
  Data_UsableItem,
  Enemy_Action,
  ItemEffect,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Action_ItemEffect } from "./itemEffect";
import type { Rmmz_Action_Trait } from "./trait";

export interface Rmmz_ActionBase<Battler, Team>
  extends Rmmz_Action_ItemEffect<Battler>, Rmmz_Action_Trait {
  // initialize(subject: IBattler, forcing: boolean): void;
  clear(): void;
  setSubject(subject: Battler): void;
  subject(): Battler;
  friendsUnit(): Team;
  opponentsUnit(): Team;
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
  makeTargets(): Battler[];
  repeatTargets(targets: ReadonlyArray<Battler>): Battler[];
  confusionTarget(): Battler;
  targetsForEveryone(): Battler[];
  targetsForOpponents(): Battler[];
  targetsForFriends(): Battler[];
  randomTargets(unit: Team): Battler[];
  targetsForDead(unit: Team): Battler[];
  targetsForAlive(unit: Team): Battler[];
  targetsForDeadAndAlive(unit: Team): Battler[];
  evaluate(): number;
  itemTargetCandidates(): number;
  evaluateWithTarget(target: Battler): number;
  testApply(target: Battler): boolean;
  testLifeAndDeath(target: Battler): boolean;
  hasItemAnyValidEffects(target: Battler): boolean;
  testItemEffect(target: Battler, effect: ItemEffect): boolean;
  itemCnt(target: Battler): number;
  itemMrf(target: Battler): number;
  itemHit(battler: Battler): number;
  itemEva(target: Battler): number;
  itemCri(target: Battler): number;
  apply(target: Battler): void;
  makeDamageValue(target: Battler, critical: boolean): number;
  evalDamageFormula(target: Battler): number;
  calcElementRate(target: Battler): number;
  elementsMaxRate(target: Battler, elements: ReadonlyArray<number>): number;
  applyCritical(damage: number): number;
  applyVariance(damage: number, variance: number): number;
  applyGuard(damage: number, target: Battler): number;
  executeDamage(target: Battler, value: number): void;
  executeHpDamage(target: Battler, value: number): void;
  executeMpDamage(target: Battler, value: number): void;
  gainDrainedHp(value: number): void;
  gainDrainedMp(value: number): void;
  makeSuccess(target: Battler): void;
}
