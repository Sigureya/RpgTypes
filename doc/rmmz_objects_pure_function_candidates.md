# rmmz_objects.js Pure Function Candidates

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

判定方針:

1. グローバル変数を読んでいるだけなら、対象値を引数注入できれば純粋関数化候補とみなす。
2. 関数Aが純粋関数化可能な関数Bのみを組み合わせているなら、Aも候補に含める。
3. オブジェクトや配列に破壊的変更を加える関数は、そのままでは純粋関数ではない。
4. ただし関数全体が非純粋でも、内部の計算部分だけ切り出せるなら候補として記録する。

記法:

- pure: そのまま、またはインスタンス状態を引数化すれば純粋関数にしやすい
- quasi: 読み取り専用だがグローバル参照や外部オブジェクト参照を引数化する必要がある
- extract: 関数全体は非純粋だが、内部の計算だけ切り出せる

## Game_Temp

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L10)

- pure: isPlaytest, destinationX, destinationY, isDestinationValid, touchTarget, touchState, isBattleRefreshRequested, isCommonEventReserved, lastActionData
- quasi: なし
- extract: requestAnimation の animationId 存在判定は dataAnimations を受け取る純粋関数に分離可能
- 非候補: initialize, setDestination, clearDestination, setTouchState, clearTouchState, requestBattleRefresh, reserveCommonEvent, retrieveCommonEvent, clearCommonEventReservation, requestAnimation, retrieveAnimation, requestBalloon, retrieveBalloon, setLastActionData, setLastUsedSkillId, setLastUsedItemId, setLastSubjectActorId, setLastSubjectEnemyIndex, setLastTargetActorId, setLastTargetEnemyIndex

## Game_System

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L173)

- pure: isSaveEnabled, isMenuEnabled, isEncounterEnabled, isFormationEnabled, battleCount, winCount, escapeCount, saveCount, versionId, savefileId, windowPadding
- quasi: isJapanese, isChinese, isKorean, isCJK, isRussian, isSideView, isAutosaveEnabled, windowTone, battleBgm, victoryMe, defeatMe, playtime, mainFontFace, numberFontFace, mainFontSize, windowOpacity
- extract: playtimeText は hour/min/sec の整形関数に切り出せる
- 注入候補: dataSystem, graphicsFrameCount
- 非候補: initialize, setSavefileId, setWindowTone, setBattleBgm, setVictoryMe, setDefeatMe, enable/disable 系, onBattleStart, onBattleWin, onBattleEscape, onBeforeSave, onAfterLoad, saveBgm, replayBgm, saveWalkingBgm, replayWalkingBgm, saveWalkingBgm2

## Game_Timer

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L425)

- pure: isWorking, seconds, frames
- quasi: なし
- extract: なし
- 非候補: initialize, update, start, stop, onExpire

## Game_Message

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L474)

- pure: choices, speakerName, faceName, faceIndex, background, positionType, choiceDefaultType, choiceCancelType, choiceBackground, choicePositionType, numInputVariableId, numInputMaxDigits, itemChoiceVariableId, itemChoiceItypeId, scrollMode, scrollSpeed, scrollNoFast, hasText, isChoice, isNumberInput, isItemChoice, isBusy, allText
- quasi: isRTL
- extract: isRTL は containsArabic(text) に切り出せる
- 注入候補: containsArabic, texts
- 非候補: initialize, clear, add, setSpeakerName, setFaceImage, setBackground, setPositionType, setChoices, setChoiceBackground, setChoicePositionType, setNumberInput, setItemChoice, setScroll, setChoiceCallback, onChoice, newPage

## Game_Switches

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L682)

- pure: value
- quasi: なし
- extract: なし
- 非候補: initialize, clear, setValue, onChange

## Game_Variables

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L714)

- pure: value
- quasi: なし
- extract: setValue 内の number を floor する部分は sanitizeVariableValue(value) として分離可能
- 非候補: initialize, clear, setValue, onChange

## Game_SelfSwitches

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L749)

- pure: value
- quasi: なし
- extract: なし
- 非候補: initialize, clear, setValue, onChange

## Game_Screen

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L784)

- pure: brightness, tone, flashColor, shake, zoomX, zoomY, zoomScale, weatherType, weatherPower, maxPictures
- quasi: picture, realPictureId
- extract: clearFade, clearTone, clearFlash, clearShake, clearZoom, clearWeather, clearPictures は初期値生成関数化できる。updateFadeOut, updateFadeIn, updateTone, updateFlash, updateShake, updateZoom, updateWeather は補間計算を純粋関数に切り出せる
- 注入候補: inBattle, maxPictures, pictures, currentBrightness, tone, toneTarget, flashColor, zoomScale, weatherPower
- 非候補: initialize, clear, onBattleStart, startFadeOut, startFadeIn, startTint, startFlash, startShake, startZoom, setZoom, changeWeather, update, updatePictures, startFlashForDamage, showPicture, movePicture, rotatePicture, tintPicture, erasePicture, eraseBattlePictures

## Game_Picture

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L1108)

- pure: name, origin, x, y, scaleX, scaleY, opacity, blendMode, tone, angle, easeIn, easeOut, easeInOut
- quasi: calcEasing, applyEasing
- extract: initBasic, initTarget, initTone, initRotation は builder に変更可能。updateMove, updateTone, updateRotation は次状態計算を純粋関数に切り出せる
- 注入候補: duration, wholeDuration, easingType, easingExponent, current, target
- 非候補: initialize, show, move, rotate, tint, update, updateMove, updateTone, updateRotation

## Game_Item

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L1320)

- pure: isSkill, isItem, isUsableItem, isWeapon, isArmor, isEquipItem, isNull, itemId
- quasi: object
- extract: なし
- 注入候補: dataClass, itemId, skills, items, weapons, armors
- 非候補: initialize, setObject, setEquip

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

## Game_BattlerBase

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L2379)

- pure: deathStateId, buffLength, buff, isBuffAffected, isDebuffAffected, isBuffOrDebuffAffected, isMaxBuffAffected, isMaxDebuffAffected, isBuffExpired, isStateAffected, isDeathStateAffected, isStateExpired, buffIconIndex, hpRate, mpRate, tpRate, isAppeared, isHidden, isActor, isEnemy, guardSkillId, maxTp, skillTpCost, isSkillWtypeOk
- quasi: isStateResist, states, stateIcons, buffIcons, allIcons, paramBase, paramPlus, paramBasePlus, paramMin, paramMax, paramRate, paramBuffRate, param, xparam, sparam, elementRate, debuffRate, stateRate, attackElements, attackStates, attackStatesRate, attackSpeed, attackTimesAdd, attackSkillId, addedSkillTypes, isSkillTypeSealed, addedSkills, isSkillSealed, isEquipWtypeOk, isEquipAtypeOk, isEquipTypeLocked, isEquipTypeSealed, slotType, isDualWield, actionPlusSet, specialFlag, collapseType, partyAbility, isAutoBattle, isGuard, isSubstitute, isPreserveTp, isDead, isAlive, isDying, isRestricted, canInput, canMove, isConfused, confusionLevel, mostImportantStateText, stateMotionIndex, stateOverlayIndex, traitsPi, traitsSum, traitsSumAll, traitsSet, skillMpCost, canPaySkillCost, isOccasionOk, meetsUsableItemConditions, meetsSkillConditions, meetsItemConditions, canUse, canEquip, canEquipWeapon, canEquipArmor, canAttack, canGuard
- extract: calculateParam, clampParam, aggregateTraitMultipliers, aggregateTraitSum, aggregateTraitSet, isAliveAndNotRestricted
- 注入候補: traitObjects, states, buffs, hp, mp, tp, mcr, occasionContext
- 非候補: initialize, refresh, recoverAll, addParam, setHp, setMp, setTp, clearParamPlus, clearStates, eraseState, resetStateCounts, die, revive, clearBuffs, eraseBuff, updateStateTurns, updateBuffTurns, removeState, removeBuff, removeBattleStates, removeAllBuffs, sortStates, addNewState, onRestrict, paySkillCost

## Game_Battler

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L3292)

- pure: isDamagePopupRequested, isEffectRequested, isMotionRequested, isWeaponAnimationRequested, isMotionRefreshRequested, isSelected, effectType, motionType, weaponImageId, shouldPopupDamage, numActions, action, result, speed, currentAction, tpbChargeTime, isTpbCharged, isTpbReady, isTpbTimeout, isTpbTurnEnd, tpbBaseSpeed, tpbRelativeSpeed, isUndecided, isInputting, isWaiting, isActing
- quasi: turnCount, tpbSpeed, tpbAcceleration, tpbRequiredCastTime, isChanting, isGuardWaiting, makeSpeed, makeActionTimes, canInput, isStateAddable, isStateRestrict
- extract: calculateTpbAcceleration, calculateTpbRelativeSpeed, getTurnCount, makeSpeed の最小値計算
- 注入候補: agi, baseSpeed, referenceTime, actionSpeeds, stateFlags
- 非候補: initialize, initMembers, clearDamagePopup, clearWeaponAnimation, clearEffect, clearMotion, requestEffect, requestMotion, requestMotionRefresh, cancelMotionRefresh, select, deselect, clearActions, setAction, removeCurrentAction, forceAction, useItem, consumeItem, gainHp, gainMp, gainTp, gainSilentTp, initTp, clearTp, chargeTpByDamage, regenerateHp, regenerateMp, regenerateTp, regenerateAll, onBattleStart, onAllActionsEnd, onTurnEnd, onBattleEnd, onDamage, setLastTarget, clearResult, clearTpbChargeTime, applyTpbPenalty, initTpbChargeTime, startTpbCasting, startTpbAction, updateTpb, updateTpbChargeTime, updateTpbCastTime, updateTpbAutoBattle, updateTpbIdleTime, onTpbCharged, shouldDelayTpbCharge, finishTpbCharge, initTpbTurn, startTpbTurn, onTpbTimeout, makeTpbActions, makeActions, makeSuccess, applyItemUserEffect, refresh, addState, removeState, onRestrict, escape, addBuff, addDebuff, removeBuff, removeBattleStates, removeAllBuffs, removeStatesAuto, removeBuffsAuto, removeStatesByDamage, setActionState, performActionStart, performAction, performActionEnd, performDamage, performMiss, performRecovery, performEvasion, performMagicEvasion, performCounter, performReflection, performSubstitute, performCollapse

## Game_Actor

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L4008)

- pure: actorId, name, nickname, profile, characterName, characterIndex, faceName, faceIndex, battlerName, bareHandsElementId, bareHandsAnimationId, hasNoWeapons, currentExp, currentLevelExp, nextLevelExp, nextRequiredExp, findNewSkills, shouldDisplayLevelUp, isActor, isFormationChangeOk
- quasi: actor, currentClass, isClass, skillTypes, skills, usableSkills, hasSkill, isLearnedSkill, hasWeapon, hasArmor, weapons, armors, equips, isEquipped, attackAnimationId1, attackAnimationId2, paramBase, paramPlus, attackElements, traitObjects, maxLevel, isMaxLevel, finalExpRate, benchMembersExpRate, isSpriteVisible, isBattleMember, index, friendsUnit, opponentsUnit, isWtypeEquipped, isSkillWtypeOk, expForLevel, meetsUsableItemConditions
- extract: calculateExpForLevel, skill list building, equipment optimization comparator
- 注入候補: actorData, classData, level, equips, partyState, systemFlags
- 非候補: setup, initExp, initSkills, initEquips, initImages, 各種 setter, learnSkill, forgetSkill, changeClass, changeLevel, changeExp, levelUp, levelDown, displayLevelUp, gainExp, equip 操作群, perform 系, makeActionList, makeAutoBattleActions, makeConfusionActions, onEscapeFailure, clearActions, lastSkill 系, inputtingAction, refresh, clearStates, eraseState, resetStateCounts

## Game_Enemy

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L4913)

- pure: isEnemy, enemyId, itemObject, isSpriteVisible, screenX, screenY, isLetterEmpty, meetsTurnCondition, meetsHpCondition, meetsMpCondition
- quasi: enemy, traitObjects, paramBase, exp, gold, dropItemRate, battlerName, battlerHue, originalName, name, isBattleMember, friendsUnit, opponentsUnit, index, meetsStateCondition, meetsPartyLevelCondition, meetsSwitchCondition, meetsCondition, isActionValid, selectAction, selectAllActions, makeDropItems
- extract: selectWeightedAction, evaluateTurnCondition, isStatInRange
- 注入候補: enemyData, troopState, switchState, partyLevel, randomFloat
- 非候補: initialize, setup, performActionStart, performAction, performActionEnd, makeActions, setLetter, setPlural, transform, performDamage, performCollapse

## Game_Actors

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L5199)

- pure: なし
- quasi: actor
- extract: なし
- 非候補: initialize, actor は初回キャッシュ更新を伴うため完全純粋ではない

## Game_Unit

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L5222)

- pure: inBattle, members, aliveMembers, deadMembers, movableMembers, agility, tgrSum, isAllDead, tpbBaseSpeed
- quasi: tpbReferenceTime, randomDeadTarget, smoothTarget, smoothDeadTarget, substituteBattler
- extract: selectTargetByTgr, filterByPredicate, calculateAgility
- 注入候補: members, tgrWeights, battleMode, randomFloat
- 非候補: initialize, clearActions, randomTarget, clearResults, onBattleStart, onBattleEnd, makeActions, select, updateTpb

## Game_Party

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L5363)

- pure: exists, isEmpty, size, maxBattleMembers, leader, highestLevel, gold, maxGold, steps, numItems, maxItems, hasMaxItems, isAllDead, isEscaped, lastItem
- quasi: members, allMembers, battleMembers, allBattleMembers, hiddenBattleMembers, items, weapons, armors, equipItems, allItems, itemContainer, name, hasItem, isAnyMemberEquipped, canUse, canInput, ratePreemptive, rateSurprise, partyAbility, hasEncounterHalf, hasEncounterNone, hasCancelSurprise, hasRaisePreemptive, hasGoldDouble, hasDropItemDouble, menuActor, targetActor
- extract: calculatePreemptiveRate, calculateSurpriseRate, member aggregation
- 注入候補: actorIds, actorMap, itemContainers, troopAgi, partyAbilities
- 非候補: initialize, initAllItems, setupStartingMembers, setupBattleTest, setupBattleTestMembers, setupBattleTestItems, addActor, removeActor, gainGold, loseGold, increaseSteps, gainItem, loseItem, consumeItem, discardMembersEquip, removeInvalidMembers, reviveBattleMembers, setMenuActor, setTargetActor, setLastItem, swapOrder, makeMenuActorNext, makeMenuActorPrevious, onPlayerWalk, performVictory, performEscape, removeBattleStates, requestMotionRefresh, onEscapeFailure

## Game_Troop

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L5827)

- pure: turnCount, members, enemyNames, goldTotal, expTotal, isTpbTurnEnd
- quasi: troop, letterTable, goldRate, meetsConditions, makeDropItems
- extract: assignUniqueNames, evaluateTroopConditions, isTpbTurnEnd の判定補助
- 注入候補: enemies, letterTable, pageConditions, gameState, dropFlags
- 非候補: initialize, clear, setup, makeUniqueNames, updatePluralFlags, setupBattleEvent, increaseTurn, updateInterpreter

## Game_Map

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L6045)

- pure: mapId, tilesetId, displayX, displayY, tileWidth, tileHeight, bushDepth, parallaxName, battleback1Name, battleback2Name, isNameDisplayEnabled, isDashDisabled, isLoopHorizontal, isLoopVertical, displayName, width, height, data, screenTileX, screenTileY, encounterList, encounterStep, isValid, tileId, layeredTiles, autotileType, terrainTag, regionId, isPassable, isBoatPassable, isShipPassable, isAirshipLandOk, isLadder, isBush, isCounter, isDamageFloor, checkPassage, checkLayeredTilesFlags, parallaxOx, parallaxOy, xWithDirection, yWithDirection, roundX, roundY, roundXWithDirection, roundYWithDirection, deltaX, deltaY, distance, canvasToMapX, canvasToMapY, adjustX, adjustY, scrollDistance, isScrolling, vehicles, boat, ship, airship, vehicle, events, event, eventsXy, eventsXyNt, tileEventsXy, eventIdXy, parallelCommonEvents, autorunCommonEvents
- quasi: isOverworld, tilesetFlags, tileset, allTiles, isEventRunning
- extract: canvasToMap, mapToCanvas, calculateDelta, checkTileFlag, calculateDistance
- 注入候補: mapData, displayPos, tileSize, loopFlags, flags, events, tilesetData
- 非候補: initialize, setup, setupEvents, setupScroll, setupParallax, setupBattleback, createVehicles, refreshVehicles, setDisplayPos, scrollDown, scrollLeft, scrollRight, scrollUp, startScroll, doScroll, update, updateScroll, updateEvents, updateVehicles, updateParallax, changeTileset, changeBattleback, changeParallax, updateInterpreter, unlockEvent, setupStartingEvent, setupTestEvent, setupStartingMapEvent, setupAutorunCommonEvent, requestRefresh, refresh, refreshIfNeeded, refreshTileEvents, eraseEvent, disableNameDisplay, enableNameDisplay

## Game_CommonEvent

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L6850)

- pure: list
- quasi: event, isActive
- extract: なし
- 注入候補: commonEventData, switchState
- 非候補: initialize, refresh, update

## Game_CharacterBase

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L6897)

- pure: x getter, y getter, moveSpeed, moveFrequency, opacity, blendMode, isNormalPriority, isMoving, isJumping, isStopping, jumpHeight, checkStop, realMoveSpeed, distancePerFrame, isDashing, isDebugThrough, reverseDir, direction, tileId, characterName, characterIndex, isTile, isObjectCharacter, shiftY, hasWalkAnime, hasStepAnime, isDirectionFixed, isThrough, isTransparent, isAnimationPlaying, isBalloonPlaying, bushDepth, pattern, isOriginalPattern, maxPattern
- quasi: canPass, canPassDiagonally, isMapPassable, isCollidedWithCharacters, isCollidedWithEvents, isCollidedWithVehicles, scrolledX, scrolledY, screenX, screenY, screenZ, isNearTheScreen, isOnLadder, isOnBush, terrainTag, regionId
- extract: calculateJumpHeight, nextAnimationPattern, mapToScreen, calculateDistancePerFrame
- 注入候補: mapApi, moveState, animationState, displayPos, tileSize
- 非候補: initialize, initMembers, setMoveSpeed, setMoveFrequency, setOpacity, setBlendMode, setPriorityType, setDirection, setImage, setTileImage, setWalkAnime, setStepAnime, setDirectionFix, setThrough, setPattern, setTransparent, update, updateStop, updateJump, updateMove, updateAnimation, updateAnimationCount, updatePattern, refreshBushDepth, increaseSteps, setPosition, copyPosition, locate, moveStraight, moveDiagonally, jump, straighten, setMovementSuccess, checkEventTriggerTouchFront, checkEventTriggerTouch, startAnimation, startBalloon, endAnimation, endBalloon, resetPattern, resetStopCount

## Game_Character

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L7490)

- pure: isMoveRouteForcing, searchLimit, turnRight90, turnLeft90, turn180
- quasi: deltaXFrom, deltaYFrom, moveRandom, moveTowardCharacter, moveAwayFromCharacter, moveTowardPlayer, moveAwayFromPlayer, moveForward, moveBackward, turnTowardCharacter, turnAwayFromCharacter, turnTowardPlayer, turnAwayFromPlayer, turnRightOrLeft90, turnRandom, findDirectionTo
- extract: reverseDirection, decideMovementDirection, A\* pathfinding の探索本体
- 注入候補: currentPos, targetPos, canPass, randomInt, mapDelta
- 非候補: initialize, initMembers, memorizeMoveRoute, restoreMoveRoute, setMoveRoute, forceMoveRoute, updateStop, updateRoutineMove, processMoveCommand, advanceMoveRouteIndex, processRouteEnd, swap

## Game_Player

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L8055)

- pure: followers, isTransferring, newMapId, fadeType, isInBoat, isInShip, isInAirship, isInVehicle, isNormal, isDashing, centerX, centerY, canStartLocalEvents, getInputDirection
- quasi: isDebugThrough, isCollided, isOnDamageFloor, canEncounter, encounterProgressValue, isDashButtonPressed
- extract: getMovementDirection, calculateEncounterDecrement
- 注入候補: inputState, configState, mapState, partyAbilities, vehicleState
- 非候補: initialize, initMembers, setupForNewGame, clearTransferInfo, reserveTransfer, requestMapReload, performTransfer, center, locate, increaseSteps, makeEncounterCount, makeEncounterTroopId, executeMove, update, updateDashing, updateScroll, updateVehicle, updateVehicleGetOn, updateVehicleGetOff, updateNonmoving, triggerAction, triggerButtonAction, triggerTouchAction, triggerTouchActionD1, triggerTouchActionD2, triggerTouchActionD3, updateEncounterCount, canMove, getOnOffVehicle, getOnVehicle, getOffVehicle, forceMoveForward, startMapEvent, moveByInput, checkEventTriggerHere, checkEventTriggerThere, checkEventTriggerTouch, gatherFollowers, hideFollowers, showFollowers, areFollowersGathering, areFollowersGathered

## Game_Follower

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L8691)

- pure: なし
- quasi: actor, isVisible, isGathered
- extract: calculateChaseMovement
- 注入候補: followerPos, targetPos, visibilityFlags
- 非候補: initialize, refresh, update, chaseCharacter

## Game_Followers

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L8752)

- pure: isVisible, follower, data, reverseData, visibleFollowers, areMoving, areGathered, isSomeoneCollided
- quasi: なし
- extract: なし
- 非候補: initialize, setup, show, hide, refresh, update, updateMove, jumpAll, synchronize, gather

## Game_Vehicle

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L8867)

- pure: isBoat, isShip, isAirship, maxAltitude, isLowest, isHighest, canMove, screenY, shadowX, shadowY, shadowOpacity
- quasi: vehicle, isTakeoffOk, isLandOk, isMapPassable
- extract: updateAltitude, calculateShadowOpacity
- 注入候補: altitude, maxAltitude, drivingState, passabilityState
- 非候補: initialize, initMembers, resetDirection, initMoveSpeed, loadSystemSettings, refresh, setLocation, setBgm, playBgm, syncWithPlayer, getOn, getOff, update, updateAirship, updateAirshipAltitude

## Game_Event

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L9102)

- pure: eventId, page, list, isNearThePlayer, isStarting, isTriggerIn, isOriginalPattern
- quasi: event, findProperPageIndex, meetsConditions
- extract: findPageWithMetConditions
- 注入候補: pages, conditionEvaluator, playerPos, switchState, variableState, selfSwitchState
- 非候補: initialize, initMembers, setupPage, clearPageSettings, setupPageSettings, refresh, clearStartingFlag, isTile, isObjectCharacter, lock, unlock, updateStop, updateSelfMovement, stopCountThreshold, moveTypeRandom, moveTypeTowardPlayer, moveTypeCustom, isCollidedWithCharacters, checkEventTriggerTouch, checkEventTriggerAuto, update, updateParallel, locate, forceMoveRoute, start, erase

## Game_Interpreter

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L9451)

- pure: eventId, isRunning, currentCommand, nextEventCode, operateValue
- quasi: isOnCurrentMap, character, iterateActorId, iterateActorEx, iterateActorIndex, iterateEnemyIndex, iterateBattler
- extract: evaluateCondition, iterator パターン共通化
- 注入候補: mapId, currentMapId, commandList, callback
- 非候補: initialize, clear, setup, checkOverflow, loadImages, update, updateChild, updateWait, updateWaitCount, updateWaitMode, setWaitMode, wait, executeCommand, terminate, skipBranch, setupReservedCommonEvent, command 系全般

## 優先度の高い抽出候補

1. Game_Picture の easeIn, easeOut, easeInOut, calcEasing, applyEasing
2. Game_Screen の補間更新群: updateFadeOut, updateFadeIn, updateTone, updateFlash, updateZoom, updateWeather
3. Game_Action の判定群: checkItemScope, checkDamageType, isForX, isDamageX
4. Game_Action の計算群: applyCritical, applyGuard, applyVariance の乱数注入版, makeDamageValue の計算部分
5. Game_BattlerBase の parameter/trait 集計群
6. Game_Map の座標変換・距離計算・ビットフラグ判定群
7. Game_Character と Game_Player の方向決定・経路探索ロジック
8. Game_Enemy と Game_Unit の重み付き選択ロジック

## 傾向まとめ

- getter 系だけなら多くのクラスで pure 化は容易
- 真に価値が高いのは、計算ロジックを state mutation から切り離せる箇所
- 特に Game_Action, Game_BattlerBase, Game_Map, Game_Picture, Game_Screen, Game_Character は純粋関数の切り出し効果が大きい
- 一方で Game_Interpreter, Game_Player, Game_Event は外部状態変更が本質なので、関数全体の pure 化より内部の条件判定や数値計算の抽出が現実的
