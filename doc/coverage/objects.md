# Game_* クラス別の網羅状況

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)（30 クラス / prototype メソッド 計 1466 個）

## 測り方

旧実装の prototype メソッド名が、[src/rmmz/](src/rmmz/)・[src/rmmzFunctional/](src/rmmzFunctional/)・[src/features/](src/features/) の
エクスポート関数名に部分一致で含まれるかを機械的に数えています。

- **上限値** の列は「対応がありそうな数」であり、実際の網羅率はこれより低くなります。
  `param` や `states` のような短い名前が別関数に紛れ込んで一致するためです。上振れした目安として読んでください。
- **未実装** の一覧は、名前がどのエクスポートにも現れないものです。多くはそのまま未着手を意味します。
  ただし接頭辞を足しただけの移植（`paramRate` → `traitParamRate`）は拾えるものの、
  綴りごと変えた移植（`isSkillWtypeOk` → `isSkillRequiredWeaponTypeOk`）は拾えず未実装側へ落ちます。
  実際 `Game_BattlerBase` の一覧にはそうした偽陽性が混ざっています。

関数単位の正確な状況は [doc/rmmz_pure/](doc/rmmz_pure/) の各ファイルを参照してください。

## 一覧

| クラス | メソッド数 | 対応あり（上限値） | 未実装（確定） |
| ------ | ---------: | -----------------: | -------------: |
| Game_Interpreter | 155 | 8 (5%) | 147 |
| Game_Actor | 132 | 26 (19%) | 106 |
| Game_BattlerBase | 126 | 51 (40%) | 75 |
| Game_Battler | 121 | 11 (9%) | 110 |
| Game_Map | 111 | 46 (41%) | 65 |
| Game_Action | 106 | 47 (44%) | 59 |
| Game_CharacterBase | 94 | 20 (21%) | 74 |
| Game_Party | 74 | 16 (21%) | 58 |
| Game_Player | 72 | 7 (9%) | 65 |
| Game_System | 52 | 18 (34%) | 34 |
| Game_Screen | 46 | 5 (10%) | 41 |
| Game_Enemy | 45 | 13 (28%) | 32 |
| Game_Message | 40 | 11 (27%) | 29 |
| Game_Event | 38 | 8 (21%) | 30 |
| Game_Character | 34 | 9 (26%) | 25 |
| Game_Vehicle | 32 | 11 (34%) | 21 |
| Game_Temp | 30 | 1 (3%) | 29 |
| Game_Picture | 28 | 7 (25%) | 21 |
| Game_Unit | 23 | 7 (30%) | 16 |
| Game_Troop | 21 | 6 (28%) | 15 |
| Game_Followers | 19 | 6 (31%) | 13 |
| Game_ActionResult | 16 | 1 (6%) | 15 |
| Game_Item | 12 | 5 (41%) | 7 |
| Game_Timer | 8 | 2 (25%) | 6 |
| Game_Follower | 8 | 2 (25%) | 6 |
| Game_CommonEvent | 6 | 3 (50%) | 3 |
| Game_Switches | 5 | 2 (40%) | 3 |
| Game_Variables | 5 | 2 (40%) | 3 |
| Game_SelfSwitches | 5 | 2 (40%) | 3 |
| Game_Actors | 2 | 2 (100%) | 0 |

## クラス別・未実装メソッド

### Game_Interpreter (147/155)

`changeHp`, `checkFreeze`, `checkOverflow`, `clear`, `command101`, `command102`, `command103`, `command104`, `command105`, `command108`, `command109`, `command111`, `command112`, `command113`, `command115`, `command117`, `command118`, `command119`, `command121`, `command122`, `command123`, `command124`, `command125`, `command126`, `command127`, `command128`, `command129`, `command132`, `command133`, `command134`, `command135`, `command136`, `command137`, `command138`, `command139`, `command140`, `command201`, `command202`, `command203`, `command204`, `command205`, `command206`, `command211`, `command212`, `command213`, `command214`, `command216`, `command217`, `command221`, `command222`, `command223`, `command224`, `command225`, `command230`, `command231`, `command232`, `command233`, `command234`, `command235`, `command236`, `command241`, `command242`, `command243`, `command244`, `command245`, `command246`, `command249`, `command250`, `command251`, `command261`, `command281`, `command282`, `command283`, `command284`, `command285`, `command301`, `command302`, `command303`, `command311`, `command312`, `command313`, `command314`, `command315`, `command316`, `command317`, `command318`, `command319`, `command320`, `command321`, `command322`, `command323`, `command324`, `command325`, `command326`, `command331`, `command332`, `command333`, `command334`, `command335`, `command336`, `command337`, `command339`, `command340`, `command342`, `command351`, `command352`, `command353`, `command354`, `command355`, `command356`, `command357`, `command402`, `command403`, `command411`, `command413`, `command601`, `command602`, `command603`, `currentCommand`, `executeCommand`, `fadeSpeed`, `gameDataOperand`, `isOnCurrentMap`, `isRunning`, `iterateActorEx`, `iterateActorId`, `iterateActorIndex`, `iterateBattler`, `jumpTo`, `loadImages`, `nextEventCode`, `operateVariable`, `picturePoint`, `setWaitMode`, `setupChild`, `setupChoices`, `setupItemChoice`, `setupNumInput`, `setupReservedCommonEvent`, `terminate`, `update`, `updateChild`, `updateWait`, `updateWaitCount`, `updateWaitMode`, `videoFileExt`, `wait`

### Game_Actor (106/132)

`attackAnimationId1`, `attackAnimationId2`, `bareHandsAnimationId`, `bareHandsElementId`, `basicFloorDamage`, `battlerName`, `benchMembersExpRate`, `bestEquipItem`, `calcEquipItemPerformance`, `changeEquipById`, `changeExp`, `changeLevel`, `characterIndex`, `characterName`, `checkFloorEffect`, `clearActions`, `clearEquipments`, `clearStates`, `constructor`, `currentClass`, `currentLevelExp`, `discardEquip`, `displayLevelUp`, `equipSlots`, `equips`, `eraseState`, `executeFloorDamage`, `faceIndex`, `faceName`, `finalExpRate`, `findNewSkills`, `forceChangeEquip`, `friendsUnit`, `hasArmor`, `hasNoWeapons`, `hasSkill`, `hasWeapon`, `initEquips`, `initExp`, `initImages`, `initMembers`, `initSkills`, `inputtingAction`, `isActor`, `isBattleMember`, `isClass`, `isEquipChangeOk`, `isEquipped`, `isFormationChangeOk`, `isLearnedSkill`, `isMaxLevel`, `isSkillWtypeOk`, `isSpriteVisible`, `isWtypeEquipped`, `lastBattleSkill`, `lastCommandSymbol`, `lastMenuSkill`, `lastSkill`, `makeActionList`, `makeActions`, `makeAutoBattleActions`, `makeConfusionActions`, `maxFloorDamage`, `maxLevel`, `meetsUsableItemConditions`, `nextLevelExp`, `nextRequiredExp`, `onEscapeFailure`, `onPlayerWalk`, `opponentsUnit`, `optimizeEquipments`, `performAction`, `performActionEnd`, `performActionStart`, `performAttack`, `performCollapse`, `performCounter`, `performDamage`, `performEscape`, `performEvasion`, `performMagicEvasion`, `performMapDamage`, `performVictory`, `refresh`, `releaseUnequippableItems`, `resetStateCounts`, `selectNextCommand`, `selectPreviousCommand`, `setBattlerImage`, `setCharacterImage`, `setFaceImage`, `setLastBattleSkill`, `setLastCommandSymbol`, `setLastMenuSkill`, `setName`, `setNickname`, `setProfile`, `shouldDisplayLevelUp`, `showAddedStates`, `showRemovedStates`, `stepsForTurn`, `testEscape`, `tradeItemWithParty`, `traitObjects`, `turnEndOnMap`, `updateStateSteps`

### Game_BattlerBase (75/126)

`addNewState`, `addParam`, `allIcons`, `allTraits`, `attackSpeed`, `attackStatesRate`, `buffIconIndex`, `buffIcons`, `buffLength`, `canAttack`, `canGuard`, `canUse`, `clearBuffs`, `clearParamPlus`, `clearStates`, `deathStateId`, `decreaseBuff`, `eraseBuff`, `eraseState`, `guardSkillId`, `increaseBuff`, `initMembers`, `isActor`, `isAppeared`, `isBuffAffected`, `isBuffExpired`, `isBuffOrDebuffAffected`, `isDeathStateAffected`, `isDebuffAffected`, `isDualWield`, `isDying`, `isEnemy`, `isEquipAtypeOk`, `isEquipWtypeOk`, `isHidden`, `isMaxBuffAffected`, `isMaxDebuffAffected`, `isOccasionOk`, `isRestricted`, `isSkillWtypeOk`, `isStateAffected`, `isStateExpired`, `isSubstitute`, `maxTp`, `meetsItemConditions`, `meetsSkillConditions`, `meetsUsableItemConditions`, `mostImportantStateText`, `onRestrict`, `overwriteBuffTurns`, `paramBasePlus`, `paramBuffRate`, `paramMax`, `paramMin`, `refresh`, `resetStateCounts`, `revive`, `setHp`, `setMp`, `setTp`, `skillTpCost`, `slotType`, `sortStates`, `stateMotionIndex`, `stateOverlayIndex`, `stateResistSet`, `tpRate`, `traitObjects`, `traitsPi`, `traitsSet`, `traitsSum`, `traitsSumAll`, `traitsWithId`, `updateBuffTurns`, `updateStateTurns`

### Game_Battler (110/121)

`addBuff`, `addDebuff`, `applyTpbPenalty`, `cancelMotionRefresh`, `chargeTpByDamage`, `clearActions`, `clearDamagePopup`, `clearEffect`, `clearMotion`, `clearResult`, `clearTp`, `clearTpbChargeTime`, `clearWeaponAnimation`, `constructor`, `consumeItem`, `currentAction`, `deselect`, `effectType`, `finishTpbCharge`, `gainMp`, `gainSilentTp`, `gainTp`, `initMembers`, `initTp`, `initTpbChargeTime`, `initTpbTurn`, `isActing`, `isChanting`, `isDamagePopupRequested`, `isEffectRequested`, `isGuardWaiting`, `isInputting`, `isMotionRefreshRequested`, `isMotionRequested`, `isSelected`, `isStateAddable`, `isStateRestrict`, `isTpbCharged`, `isTpbReady`, `isTpbTimeout`, `isTpbTurnEnd`, `isUndecided`, `isWaiting`, `isWeaponAnimationRequested`, `makeActionTimes`, `makeActions`, `makeSpeed`, `makeTpbActions`, `maxSlipDamage`, `motionType`, `numActions`, `onAllActionsEnd`, `onBattleEnd`, `onBattleStart`, `onDamage`, `onRestrict`, `onTpbCharged`, `onTpbTimeout`, `onTurnEnd`, `performAction`, `performActionEnd`, `performActionStart`, `performCollapse`, `performCounter`, `performDamage`, `performEvasion`, `performMagicEvasion`, `performMiss`, `performRecovery`, `performReflection`, `performSubstitute`, `refresh`, `regenerateAll`, `regenerateHp`, `regenerateMp`, `regenerateTp`, `removeAllBuffs`, `removeBattleStates`, `removeBuff`, `removeBuffsAuto`, `removeCurrentAction`, `removeStatesAuto`, `removeStatesByDamage`, `requestEffect`, `requestMotion`, `requestMotionRefresh`, `setAction`, `setActionState`, `setLastTarget`, `shouldDelayTpbCharge`, `shouldPopupDamage`, `startDamagePopup`, `startTpbAction`, `startTpbCasting`, `startTpbTurn`, `startWeaponAnimation`, `tpbAcceleration`, `tpbBaseSpeed`, `tpbChargeTime`, `tpbRelativeSpeed`, `tpbRequiredCastTime`, `tpbSpeed`, `turnCount`, `updateTpb`, `updateTpbAutoBattle`, `updateTpbCastTime`, `updateTpbChargeTime`, `updateTpbIdleTime`, `useItem`, `weaponImageId`

### Game_Map (65/111)

`adjustX`, `adjustY`, `autoplay`, `autorunCommonEvents`, `battleback1Name`, `battleback2Name`, `bushDepth`, `canvasToMapX`, `canvasToMapY`, `createVehicles`, `disableNameDisplay`, `displayName`, `displayX`, `displayY`, `doScroll`, `enableNameDisplay`, `encounterList`, `encounterStep`, `eraseEvent`, `isAnyEventStarting`, `isDashDisabled`, `isEventRunning`, `isNameDisplayEnabled`, `isOverworld`, `isScrolling`, `parallaxName`, `parallaxOx`, `parallaxOy`, `parallelCommonEvents`, `refereshVehicles`, `refresh`, `refreshIfNeeded`, `refreshTileEvents`, `requestRefresh`, `screenTileX`, `screenTileY`, `scrollDistance`, `scrollDown`, `scrollLeft`, `scrollRight`, `scrollUp`, `setDisplayPos`, `setupAutorunCommonEvent`, `setupBattleback`, `setupEvents`, `setupParallax`, `setupScroll`, `setupStartingEvent`, `setupStartingMapEvent`, `setupTestEvent`, `startScroll`, `tileEventsXy`, `tileHeight`, `tileWidth`, `tilesetFlags`, `tilesetId`, `unlockEvent`, `update`, `updateEvents`, `updateInterpreter`, `updateParallax`, `updateScroll`, `updateVehicles`, `vehicles`, `width`

### Game_Action (59/106)

`apply`, `applyCritical`, `applyGlobal`, `applyGuard`, `applyItemEffect`, `applyItemUserEffect`, `applyVariance`, `checkDamageType`, `checkItemScope`, `clear`, `confusionTarget`, `elementsMaxRate`, `evalDamageFormula`, `evaluateWithTarget`, `executeDamage`, `executeHpDamage`, `executeMpDamage`, `friendsUnit`, `gainDrainedHp`, `gainDrainedMp`, `hasItemAnyValidEffects`, `isAttack`, `isForAll`, `isItem`, `isMagicSkill`, `itemCnt`, `itemEffectAddAttackState`, `itemEffectAddBuff`, `itemEffectAddDebuff`, `itemEffectAddNormalState`, `itemEffectAddState`, `itemEffectCommonEvent`, `itemEffectGainTp`, `itemEffectGrow`, `itemEffectLearnSkill`, `itemEffectRemoveBuff`, `itemEffectRemoveDebuff`, `itemEffectRemoveState`, `itemEffectSpecial`, `makeDamageValue`, `makeSuccess`, `opponentsUnit`, `prepare`, `randomTargets`, `setAttack`, `setConfusion`, `setEnemyAction`, `setGuard`, `setItem`, `setItemObject`, `setSkill`, `setSubject`, `setTarget`, `subject`, `targetsForEveryone`, `testApply`, `updateLastSubject`, `updateLastTarget`, `updateLastUsed`

### Game_CharacterBase (74/94)

`animationWait`, `blendMode`, `bushDepth`, `characterIndex`, `characterName`, `checkEventTriggerTouch`, `checkEventTriggerTouchFront`, `checkStop`, `copyPosition`, `endAnimation`, `endBalloon`, `hasStepAnime`, `hasWalkAnime`, `increaseSteps`, `initMembers`, `isAnimationPlaying`, `isBalloonPlaying`, `isCollidedWithCharacters`, `isCollidedWithEvents`, `isCollidedWithVehicles`, `isDashing`, `isDebugThrough`, `isDirectionFixed`, `isJumping`, `isMovementSucceeded`, `isMoving`, `isNormalPriority`, `isObjectCharacter`, `isOnBush`, `isOnLadder`, `isOriginalPattern`, `isStopping`, `isThrough`, `isTile`, `isTransparent`, `locate`, `maxPattern`, `moveDiagonally`, `moveFrequency`, `moveStraight`, `opacity`, `pattern`, `posNt`, `refreshBushDepth`, `resetPattern`, `resetStopCount`, `screenZ`, `setBlendMode`, `setDirection`, `setDirectionFix`, `setImage`, `setMoveFrequency`, `setMoveSpeed`, `setMovementSuccess`, `setOpacity`, `setPattern`, `setPosition`, `setPriorityType`, `setStepAnime`, `setThrough`, `setTileImage`, `setTransparent`, `setWalkAnime`, `shiftY`, `startAnimation`, `startBalloon`, `straighten`, `update`, `updateAnimation`, `updateAnimationCount`, `updateJump`, `updateMove`, `updatePattern`, `updateStop`

### Game_Party (58/74)

`addActor`, `allBattleMembers`, `allItems`, `allMembers`, `battleMembers`, `canUse`, `charactersForSavefile`, `constructor`, `consumeItem`, `discardMembersEquip`, `equipItems`, `exists`, `facesForSavefile`, `hasCancelSurprise`, `hasDropItemDouble`, `hasEncounterHalf`, `hasEncounterNone`, `hasGoldDouble`, `hasItem`, `hasMaxItems`, `hasRaisePreemptive`, `hiddenBattleMembers`, `highestLevel`, `increaseSteps`, `initAllItems`, `isAllDead`, `isAnyMemberEquipped`, `isEmpty`, `isEscaped`, `itemContainer`, `lastItem`, `leader`, `makeMenuActorNext`, `makeMenuActorPrevious`, `maxBattleMembers`, `maxGold`, `maxItems`, `members`, `menuActor`, `numItems`, `onEscapeFailure`, `onPlayerWalk`, `performEscape`, `performVictory`, `ratePreemptive`, `rateSurprise`, `removeBattleStates`, `removeInvalidMembers`, `requestMotionRefresh`, `reviveBattleMembers`, `setLastItem`, `setMenuActor`, `setTargetActor`, `setupBattleTest`, `setupBattleTestItems`, `setupBattleTestMembers`, `setupStartingMembers`, `swapOrder`

### Game_Player (65/72)

`areFollowersGathered`, `areFollowersGathering`, `canEncounter`, `canStartLocalEvents`, `center`, `centerX`, `centerY`, `checkEventTriggerHere`, `checkEventTriggerThere`, `checkEventTriggerTouch`, `clearTransferInfo`, `constructor`, `encounterProgressValue`, `executeEncounter`, `executeMove`, `fadeType`, `followers`, `forceMoveForward`, `gatherFollowers`, `getInputDirection`, `getOffVehicle`, `getOnVehicle`, `hideFollowers`, `increaseSteps`, `initMembers`, `isCollided`, `isDashButtonPressed`, `isDashing`, `isDebugThrough`, `isInAirship`, `isInBoat`, `isInShip`, `isInVehicle`, `isNormal`, `isOnDamageFloor`, `isStopping`, `isTransferring`, `locate`, `makeEncounterCount`, `makeEncounterTroopId`, `meetsEncounterConditions`, `moveByInput`, `moveDiagonally`, `moveStraight`, `newMapId`, `performTransfer`, `refresh`, `requestMapReload`, `reserveTransfer`, `setupForNewGame`, `showFollowers`, `triggerAction`, `triggerButtonAction`, `triggerTouchAction`, `triggerTouchActionD1`, `triggerTouchActionD2`, `triggerTouchActionD3`, `update`, `updateDashing`, `updateEncounterCount`, `updateNonmoving`, `updateScroll`, `updateVehicle`, `updateVehicleGetOff`, `updateVehicleGetOn`

### Game_System (34/52)

`isAutosaveEnabled`, `isCJK`, `isChinese`, `isEncounterEnabled`, `isFormationEnabled`, `isJapanese`, `isKorean`, `isMenuEnabled`, `isRussian`, `isSaveEnabled`, `isSideView`, `mainFontFace`, `mainFontSize`, `numberFontFace`, `onAfterLoad`, `onBattleEscape`, `onBattleStart`, `onBattleWin`, `onBeforeSave`, `playtimeText`, `replayBgm`, `replayWalkingBgm`, `saveWalkingBgm`, `saveWalkingBgm2`, `savefileId`, `setBattleBgm`, `setDefeatMe`, `setSavefileId`, `setVictoryMe`, `setWindowTone`, `versionId`, `windowOpacity`, `windowPadding`, `windowTone`

### Game_Screen (41/46)

`brightness`, `changeWeather`, `clear`, `clearFade`, `clearFlash`, `clearPictures`, `clearShake`, `clearTone`, `clearWeather`, `clearZoom`, `eraseBattlePictures`, `erasePicture`, `flashColor`, `maxPictures`, `onBattleStart`, `realPictureId`, `rotatePicture`, `setZoom`, `startFadeIn`, `startFadeOut`, `startFlash`, `startFlashForDamage`, `startShake`, `startTint`, `startZoom`, `tintPicture`, `tone`, `update`, `updateFadeIn`, `updateFadeOut`, `updateFlash`, `updatePictures`, `updateShake`, `updateTone`, `updateWeather`, `updateZoom`, `weatherPower`, `weatherType`, `zoomScale`, `zoomX`, `zoomY`

### Game_Enemy (32/45)

`battlerHue`, `battlerName`, `constructor`, `dropItemRate`, `friendsUnit`, `initMembers`, `isActionValid`, `isBattleMember`, `isEnemy`, `isLetterEmpty`, `isSpriteVisible`, `itemObject`, `makeActions`, `makeDropItems`, `meetsHpCondition`, `meetsMpCondition`, `meetsPartyLevelCondition`, `meetsStateCondition`, `meetsSwitchCondition`, `meetsTurnCondition`, `opponentsUnit`, `originalName`, `performAction`, `performActionEnd`, `performActionStart`, `performCollapse`, `performDamage`, `selectAction`, `selectAllActions`, `setLetter`, `setPlural`, `traitObjects`

### Game_Message (29/40)

`allText`, `clear`, `faceIndex`, `faceName`, `hasText`, `isBusy`, `isItemChoice`, `isNumberInput`, `isRTL`, `itemChoiceItypeId`, `itemChoiceVariableId`, `newPage`, `numInputMaxDigits`, `numInputVariableId`, `onChoice`, `scrollMode`, `scrollNoFast`, `scrollSpeed`, `setBackground`, `setChoiceBackground`, `setChoiceCallback`, `setChoicePositionType`, `setChoices`, `setFaceImage`, `setItemChoice`, `setNumberInput`, `setPositionType`, `setScroll`, `setSpeakerName`

### Game_Event (30/38)

`checkEventTriggerAuto`, `checkEventTriggerTouch`, `clearPageSettings`, `clearStartingFlag`, `constructor`, `erase`, `forceMoveRoute`, `initMembers`, `isCollidedWithCharacters`, `isCollidedWithEvents`, `isCollidedWithPlayerCharacters`, `isNearThePlayer`, `isOriginalPattern`, `isStarting`, `isTriggerIn`, `locate`, `meetsConditions`, `moveTypeCustom`, `moveTypeRandom`, `moveTypeTowardPlayer`, `refresh`, `resetPattern`, `setupPage`, `setupPageSettings`, `stopCountThreshold`, `unlock`, `update`, `updateParallel`, `updateSelfMovement`, `updateStop`

### Game_Character (25/34)

`advanceMoveRouteIndex`, `constructor`, `findDirectionTo`, `forceMoveRoute`, `initMembers`, `isMoveRouteForcing`, `memorizeMoveRoute`, `moveAwayFromCharacter`, `moveAwayFromPlayer`, `moveBackward`, `moveForward`, `moveRandom`, `moveTowardCharacter`, `moveTowardPlayer`, `processMoveCommand`, `processRouteEnd`, `restoreMoveRoute`, `setMoveRoute`, `swap`, `turnAwayFromCharacter`, `turnAwayFromPlayer`, `turnTowardCharacter`, `turnTowardPlayer`, `updateRoutineMove`, `updateStop`

### Game_Vehicle (21/32)

`constructor`, `getOff`, `initMembers`, `initMoveSpeed`, `isHighest`, `isLandOk`, `isLowest`, `isTakeoffOk`, `loadSystemSettings`, `maxAltitude`, `refresh`, `resetDirection`, `setBgm`, `setLocation`, `shadowOpacity`, `shadowX`, `shadowY`, `syncWithPlayer`, `update`, `updateAirship`, `updateAirshipAltitude`

### Game_Temp (29/30)

`clearBattleRefreshRequest`, `clearCommonEventReservation`, `clearDestination`, `clearTouchState`, `destinationX`, `destinationY`, `isBattleRefreshRequested`, `isCommonEventReserved`, `isDestinationValid`, `isPlaytest`, `lastActionData`, `requestAnimation`, `requestBalloon`, `requestBattleRefresh`, `reserveCommonEvent`, `retrieveAnimation`, `retrieveBalloon`, `retrieveCommonEvent`, `setDestination`, `setLastActionData`, `setLastSubjectActorId`, `setLastSubjectEnemyIndex`, `setLastTargetActorId`, `setLastTargetEnemyIndex`, `setLastUsedItemId`, `setLastUsedSkillId`, `setTouchState`, `touchState`, `touchTarget`

### Game_Picture (21/28)

`angle`, `applyEasing`, `blendMode`, `calcEasing`, `easeIn`, `easeInOut`, `easeOut`, `initBasic`, `initRotation`, `initTarget`, `initTone`, `opacity`, `origin`, `rotate`, `scaleX`, `scaleY`, `tone`, `update`, `updateMove`, `updateRotation`, `updateTone`

### Game_Unit (16/23)

`agility`, `aliveMembers`, `clearActions`, `clearResults`, `deadMembers`, `isAllDead`, `makeActions`, `members`, `movableMembers`, `onBattleEnd`, `onBattleStart`, `substituteBattler`, `tgrSum`, `tpbBaseSpeed`, `tpbReferenceTime`, `updateTpb`

### Game_Troop (15/21)

`clear`, `constructor`, `goldRate`, `goldTotal`, `increaseTurn`, `isEventRunning`, `isTpbTurnEnd`, `makeDropItems`, `makeUniqueNames`, `meetsConditions`, `members`, `setupBattleEvent`, `turnCount`, `updateInterpreter`, `updatePluralFlags`

### Game_Followers (13/19)

`areGathered`, `areGathering`, `areMoving`, `follower`, `isSomeoneCollided`, `isVisible`, `jumpAll`, `refresh`, `reverseData`, `synchronize`, `update`, `updateMove`, `visibleFollowers`

### Game_ActionResult (15/16)

`addedStateObjects`, `clear`, `isBuffAdded`, `isBuffRemoved`, `isDebuffAdded`, `isHit`, `isStateAdded`, `isStateRemoved`, `isStatusAffected`, `pushAddedBuff`, `pushAddedDebuff`, `pushAddedState`, `pushRemovedBuff`, `pushRemovedState`, `removedStateObjects`

### Game_Item (7/12)

`isArmor`, `isEquipItem`, `isItem`, `isNull`, `isWeapon`, `setEquip`, `setObject`

### Game_Timer (6/8)

`frames`, `isWorking`, `onExpire`, `seconds`, `stop`, `update`

### Game_Follower (6/8)

`chaseCharacter`, `constructor`, `isGathered`, `isVisible`, `refresh`, `update`

### Game_CommonEvent (3/6)

`isActive`, `refresh`, `update`

### Game_Switches (3/5)

`clear`, `onChange`, `setValue`

### Game_Variables (3/5)

`clear`, `onChange`, `setValue`

### Game_SelfSwitches (3/5)

`clear`, `onChange`, `setValue`

### Game_Actors

なし

