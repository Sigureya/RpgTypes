# rmmz_objects.js Pure Function Candidates: Action Support

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

## Game_Action

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L1403)

### 実装済み

- [src/rmmzFunctional/enemy/action/filter.ts](src/rmmzFunctional/enemy/action/filter.ts)
  - `filterUsableEnemyActions`
  - `filterEnemyActionByRating`
  - `enemyActionMeetsCondition`
- [src/rmmzFunctional/enemy/action/select.ts](src/rmmzFunctional/enemy/action/select.ts)
  - `enemyActionRatingMax`
  - `enemyActionRatingZero`
  - `filterEnemyActionsByRating`
  - `enemyActionWeightTotal`
  - `selectEnemyActionByWeight`
  - `selectEnemyActions`
- [src/rmmzFunctional/action/target/target.ts](src/rmmzFunctional/action/target/target.ts)
  - `repeatTargets`
  - `actionTargetForDead`
  - `actionTargetForDeadAndAlive`
  - `actionTargetForAlive`
  - `actionTargetsForOpponents`
- [src/rmmzFunctional/action/target/randomSelect.ts](src/rmmzFunctional/action/target/randomSelect.ts)
  - `battlersDecideRandomTarget`
  - `battlresRandomTarget`
  - `battlersRandomDeadTarget`
  - `battlersRandomAliveTarget`
  - `actionDecideRandomTarget`
- [src/rmmzFunctional/action/target/support.ts](src/rmmzFunctional/action/target/support.ts)
  - `smoothTarget`
  - `smoothAliveTarget`
  - `smoothDeadTarget`
- [src/rmmz/rpg/data/main/usableItems/scope.ts](src/rmmz/rpg/data/main/usableItems/scope.ts)
  - `scopeForUser`
  - `scopeIsForOne`
  - `scopeNeedsSelection`
  - `scopeIsForOpponent`
  - `scopeIsForFriend`
  - `scopeIsForDeadFriend`
  - `scopeIsForAliveFriend`
  - `scopeIsForEveryone`
  - `scopeIsForRandom`
  - `scopeRandomNumTargets`
- [src/rmmz/rpg/data/main/usableItems/damageType.ts](src/rmmz/rpg/data/main/usableItems/damageType.ts)
  - `isHpRecoverItem`
  - `isMpRecoverItem`
  - `isHpDamage`
  - `isMpDamage`
  - `isHpEffect`
  - `isMpEffect`
  - `isDamage`
  - `isRecover`
  - `isDrain`
  - `isHpRecovery`
  - `isMpRecovery`
- [src/rmmz/rpg/data/main/usableItems/hitType.ts](src/rmmz/rpg/data/main/usableItems/hitType.ts)
  - `isCertainHit`
  - `isPhysicalHit`
  - `isMagicalHit`
- [src/rmmz/rpg/data/main/traitContainers/trait/rate.ts](src/rmmz/rpg/data/main/traitContainers/trait/rate.ts)
  - `traitParamRate`
  - `traitSparam`
  - `traitElementRate`
  - `traitDebuffRate`
  - `traitStateRate`
- [src/rmmz/rpg/data/main/traitContainers/trait/xparam.ts](src/rmmz/rpg/data/main/traitContainers/trait/xparam.ts)
  - `traitXparam`
  - `traitHitRate`
  - `traitEvaRate`
  - `traitCriticalRate`
  - `traitCriticalEvasionRate`
  - `traitMagicEvasionRate`
  - `traitMagicReflectionRate`
  - `traitCounterAttackRate`
  - `traitHpRegenRate`
  - `traitMpRegenRate`
  - `traitTpRegenRate`
- [src/rmmz/rpg/data/main/traitContainers/trait/sparam.ts](src/rmmz/rpg/data/main/traitContainers/trait/sparam.ts)
  - `traitTargetRate`
  - `traitGuardEffectRate`
  - `traitRecoveryEffectRate`
  - `traitPharmacologyRate`
  - `traitMpCostRate`
  - `traitTpChargeRate`
  - `traitPhysicalDamageRate`
  - `traitMagicDamageRate`
  - `traitFloorDamageRate`
  - `traitExperienceRate`

### まだ候補として残るもの

- pure: checkDamageType, applyCritical
- quasi: numRepeats, isMagicSkill, itemCnt, itemMrf, itemHit, itemEva, itemCri, testLifeAndDeath, testItemEffect, calcElementRate, elementsMaxRate, applyGuard, lukEffectRate
- extract: makeDamageValue の計算パイプライン, applyVariance の乱数注入版, evaluateWithTarget のスコア計算, speed の速度算出式
- 注入候補: item, subjectStats, targetStats, magicSkillIds, randomInt, randomFloat, attackElements, elementRates, guarding, grd
- 非候補: initialize, clear, setSubject, subject, friendsUnit, opponentsUnit, setEnemyAction, setAttack, setGuard, setSkill, setItem, setItemObject, setTarget, item, isAttack, isGuard, decideRandomTarget, setConfusion, prepare, isValid, speed, makeTargets, confusionTarget, targetsForEveryone, targetsForOpponents, targetsForFriends, randomTargets, targetsForDead, targetsForAlive, targetsForDeadAndAlive, evaluate, itemTargetCandidates, evaluateWithTarget, testApply, hasItemAnyValidEffects, apply, makeDamageValue, evalDamageFormula, applyVariance, executeDamage, executeHpDamage, executeMpDamage, gainDrainedHp, gainDrainedMp, applyItemEffect, itemEffectRecoverHp, itemEffectRecoverMp, itemEffectGainTp, itemEffectAddState, itemEffectAddAttackState, itemEffectAddNormalState, itemEffectRemoveState, itemEffectAddBuff, itemEffectAddDebuff, itemEffectRemoveBuff, itemEffectRemoveDebuff, itemEffectSpecial, itemEffectGrow, itemEffectLearnSkill, itemEffectCommonEvent, makeSuccess, applyItemUserEffect, lukEffectRate, applyGlobal, updateLastUsed, updateLastSubject, updateLastTarget

## Game_ActionResult

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L2275)

### 実装済み

- まだ対応する純関数モジュールはありません

### まだ候補として残るもの

- pure: isStatusAffected, isHit, isStateAdded, isStateRemoved, isBuffAdded, isDebuffAdded, isBuffRemoved
- quasi: addedStateObjects, removedStateObjects
- extract: なし
- 注入候補: dataStates, addedStates, removedStates
- 非候補: initialize, clear, pushAddedState, pushRemovedState, pushAddedBuff, pushAddedDebuff, pushRemovedBuff
