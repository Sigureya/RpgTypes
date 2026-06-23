export interface Rmmz_Action_Trait {
  checkItemScope(list: ReadonlyArray<number>): boolean;
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
  numTargets(): number;
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
}
