import type {
  Data_UsableItem,
  Enemy_Action,
  ItemEffect,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Action_Damage } from "./damage";
import type { Rmmz_Action_ItemEffect } from "./itemEffect";
import type { Rmmz_Action_Target } from "./target";
import type { Rmmz_Action_Trait } from "./trait";

export interface Rmmz_ActionBase<Battler, Team>
  extends
    Rmmz_Action_ItemEffect<Battler>,
    Rmmz_Action_Trait,
    Rmmz_Action_Damage<Battler>,
    Rmmz_Action_Target<Battler, Team> {
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
}
