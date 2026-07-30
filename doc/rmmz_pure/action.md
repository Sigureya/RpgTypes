# rmmz_objects.js Pure Function Candidates: Action Support

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

## Game_Action

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L1403)

- pure: checkItemScope, isForOpponent, isForFriend, isForEveryone, isForAliveFriend, isForDeadFriend, isForUser, isForOne, isForRandom, isForAll, needsSelection, numTargets, checkDamageType, isHpEffect, isMpEffect, isDamage, isRecover, isDrain, isHpRecover, isMpRecover, isCertainHit, isPhysical, isMagical, applyCritical
- quasi: numRepeats, isMagicSkill, itemCnt, itemMrf, itemHit, itemEva, itemCri, testLifeAndDeath, testItemEffect, calcElementRate, elementsMaxRate, applyGuard, lukEffectRate
- extract: repeatTargets, makeDamageValue の計算パイプライン, applyVariance の乱数注入版, evaluateWithTarget のスコア計算, speed の速度算出式
- 注入候補: item, subjectStats, targetStats, magicSkillIds, randomInt, randomFloat, attackElements, elementRates, guarding, grd
- 非候補: initialize, clear, setSubject, subject, friendsUnit, opponentsUnit, setEnemyAction, setAttack, setGuard, setSkill, setItem, setItemObject, setTarget, item, isAttack, isGuard, decideRandomTarget, setConfusion, prepare, isValid, speed, makeTargets, confusionTarget, targetsForEveryone, targetsForOpponents, targetsForFriends, randomTargets, targetsForDead, targetsForAlive, targetsForDeadAndAlive, evaluate, itemTargetCandidates, evaluateWithTarget, testApply, hasItemAnyValidEffects, apply, makeDamageValue, evalDamageFormula, applyVariance, executeDamage, executeHpDamage, executeMpDamage, gainDrainedHp, gainDrainedMp, applyItemEffect, itemEffectRecoverHp, itemEffectRecoverMp, itemEffectGainTp, itemEffectAddState, itemEffectAddAttackState, itemEffectAddNormalState, itemEffectRemoveState, itemEffectAddBuff, itemEffectAddDebuff, itemEffectRemoveBuff, itemEffectRemoveDebuff, itemEffectSpecial, itemEffectGrow, itemEffectLearnSkill, itemEffectCommonEvent, makeSuccess, applyItemUserEffect, lukEffectRate, applyGlobal, updateLastUsed, updateLastSubject, updateLastTarget

## Game_ActionResult

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L2275)

- pure: isStatusAffected, isHit, isStateAdded, isStateRemoved, isBuffAdded, isDebuffAdded, isBuffRemoved
- quasi: addedStateObjects, removedStateObjects
- extract: なし
- 注入候補: dataStates, addedStates, removedStates
- 非候補: initialize, clear, pushAddedState, pushRemovedState, pushAddedBuff, pushAddedDebuff, pushRemovedBuff
