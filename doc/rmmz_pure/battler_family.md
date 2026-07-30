# rmmz_objects.js Pure Function Candidates: Battler Family

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

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

## TypeScript 実装進捗メモ: trait と battler 周辺

確認対象:

- trait 本体: [src/rmmz/rpg/data/main/traitContainers/trait/index.ts](src/rmmz/rpg/data/main/traitContainers/trait/index.ts)
- battler 用パラメータ計算: [src/rmmz/rpg/data/main/traitContainers/battlerParam.ts](src/rmmz/rpg/data/main/traitContainers/battlerParam.ts)
- skill 使用判定: [src/rmmz/rpg/data/main/skill.ts](src/rmmz/rpg/data/main/skill.ts)
- runtime battler interface: [src/rmmzRuntime/objects/core/battle/battler/base/base.ts](src/rmmzRuntime/objects/core/battle/battler/base/base.ts), [src/rmmzRuntime/objects/core/battle/battler/battler.ts](src/rmmzRuntime/objects/core/battle/battler/battler.ts), [src/rmmzRuntime/objects/core/battle/battler/actor.ts](src/rmmzRuntime/objects/core/battle/battler/actor.ts), [src/rmmzRuntime/objects/core/battle/battler/enemy.ts](src/rmmzRuntime/objects/core/battle/battler/enemy.ts)

### 既に実装済みの領域

- trait 集約の基礎関数は実装済み
  - traitPi, traitSum, traitSumAll, traitSet, someTraitMatched
  - 対応先: Game_BattlerBase の traitsPi, traitsSum, traitsSumAll, traitsSet 相当
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/trait.ts](src/rmmz/rpg/data/main/traitContainers/trait/trait.ts)

- battler の trait rate 系は実装済み
  - traitParamRate, traitSparam, traitElementRate, traitDebuffRate, traitStateRate
  - 対応先: Game_BattlerBase の paramRate, sparam, elementRate, debuffRate, stateRate
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/rate.ts](src/rmmz/rpg/data/main/traitContainers/trait/rate.ts)

- xparam / sparam 個別アクセサは実装済み
  - traitXparam, traitHitRate, traitEvaRate, traitCriticalRate, traitCriticalEvasionRate, traitMagicEvasionRate, traitMagicReflectionRate, traitCounterAttackRate, traitHpRegenRate, traitMpRegenRate, traitTpRegenRate
  - traitTargetRate, traitGuardEffectRate, traitRecoveryEffectRate, traitPharmacologyRate, traitMpCostRate, traitTpChargeRate, traitPhysicalDamageRate, traitMagicDamageRate, traitFloorDamageRate, traitExperienceRate
  - 対応先: Game_BattlerBase の xparam, sparam と派生 getter 群
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/xparam.ts](src/rmmz/rpg/data/main/traitContainers/trait/xparam.ts), [src/rmmz/rpg/data/main/traitContainers/trait/sparam.ts](src/rmmz/rpg/data/main/traitContainers/trait/sparam.ts)

- attack / skill / equip に関する trait 判定は概ね実装済み
  - traitAttackElements, traitAttackStates, traitAttackStateRate, traitAtttackSpeed, traitAttackTimesAdd, traitAttackSkillId
  - traitsAttackSkillId, traitsAddedSkillTypes, isSkillTypeSealed, traitAddedSkills, isSkillIdSealed
  - isEquipWeaponTypeOk, isEquipArmorTypeOk, isEquipTypeLocked, isEquipTypeSealed
  - 対応先: Game_BattlerBase の attackElements, attackStates, attackStatesRate, attackSpeed, attackTimesAdd, attackSkillId, addedSkillTypes, isSkillTypeSealed, addedSkills, isSkillSealed, isEquipWtypeOk, isEquipAtypeOk, isEquipTypeLocked, isEquipTypeSealed
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/attack.ts](src/rmmz/rpg/data/main/traitContainers/trait/attack.ts), [src/rmmz/rpg/data/main/traitContainers/trait/skill.ts](src/rmmz/rpg/data/main/traitContainers/trait/skill.ts), [src/rmmz/rpg/data/main/traitContainers/trait/equip.ts](src/rmmz/rpg/data/main/traitContainers/trait/equip.ts)

- class / enemy の param 計算は純粋関数として実装済み
  - calculateClassDataParam, classParamBase, calculateEnemyDataParam
  - 対応先: Game_Actor.paramBase / Game_Enemy.paramBase / Game_BattlerBase.param 系の計算の中核
  - 実装: [src/rmmz/rpg/data/main/traitContainers/battlerParam.ts](src/rmmz/rpg/data/main/traitContainers/battlerParam.ts)

- skill コストと使用可否の基礎判定は実装済み
  - skillMpCost, canPaySkillCostBasic, isSkillRequiredWeaponTypeOk, isSkillSealed, filterSkillConditionTraits, filterUsableSkillsWithWeapon, filterUsableSkillsEx, filterUsableSkills, mapUsableSkills
  - 対応先: Game_BattlerBase.skillMpCost, canPaySkillCost, isSkillWtypeOk, meetsSkillConditions の一部
  - 実装: [src/rmmz/rpg/data/main/skill.ts](src/rmmz/rpg/data/main/skill.ts)

- trait 表示・ラベル解決はかなり進んでいる
  - defineTraitItems, 各種 named item 定義, formatTraitText, compileTraitDisplayData
  - これは battler の挙動実装ではないが、trait 周辺のデータ解決基盤としてはほぼ揃っている
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/core/namedItems.ts](src/rmmz/rpg/data/main/traitContainers/trait/core/namedItems.ts), [src/format/trait/formatTraits.ts](src/format/trait/formatTraits.ts)

### battler 周辺で未実装、または interface 止まりの領域

- runtime battler は現状ほぼ interface 定義のみ
  - Rmmz_BattlerBase, Rmmz_Battler, Rmmz_Actor, Rmmz_Enemy はメソッド契約を持つが、具体的な関数本体はまだ見当たらない
  - 実装: [src/rmmzRuntime/objects/core/battle/battler/base/base.ts](src/rmmzRuntime/objects/core/battle/battler/base/base.ts), [src/rmmzRuntime/objects/core/battle/battler/battler.ts](src/rmmzRuntime/objects/core/battle/battler/battler.ts), [src/rmmzRuntime/objects/core/battle/battler/actor.ts](src/rmmzRuntime/objects/core/battle/battler/actor.ts), [src/rmmzRuntime/objects/core/battle/battler/enemy.ts](src/rmmzRuntime/objects/core/battle/battler/enemy.ts)

- buff / state / base values 周辺も interface 中心
  - clearBuffs, eraseBuff, updateBuffTurns, clearStates, addState, removeState, updateStateTurns, hpRate, mpRate, tpRate などは契約だけで、共通実装は未確認
  - 実装: [src/rmmzRuntime/objects/core/battle/battler/base/buff.ts](src/rmmzRuntime/objects/core/battle/battler/base/buff.ts), [src/rmmzRuntime/objects/core/battle/battler/base/state.ts](src/rmmzRuntime/objects/core/battle/battler/base/state.ts), [src/rmmzRuntime/objects/core/battle/battler/base/values.ts](src/rmmzRuntime/objects/core/battle/battler/base/values.ts)

- Game_Battler 本体の mutation 系は未着手と見てよい
  - gainHp, gainMp, gainTp, loseHp, loseMp, loseTp, clearResult, recoverAll, performCollapse, turnCount など
  - interface はあるが、共有ロジックの実装ファイルは未確認

- battler と unit の接続実装も未着手寄り
  - Rmmz_Party, Rmmz_Troop, Rmmz_Unit は interface があるが、members や turnCount 以外の実動ロジックは別途必要
  - 実装: [src/rmmzRuntime/objects/core/battle/unit.ts](src/rmmzRuntime/objects/core/battle/unit.ts)

### battler 周辺で部分的に足りていない trait ロジック

- special flag の query helper は一部のみ
  - 実装済み: autoBattle, guard
  - 未確認: substitute, preserveTp を直接返す helper
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/action.ts](src/rmmz/rpg/data/main/traitContainers/trait/action.ts)

- party ability の query helper は未確認
  - ラベル定義と named item 化はあるが、hasEncounterHalf, hasEncounterNone, hasCancelSurprise, hasRaisePreemptive, hasGoldDouble, hasDropItemDouble に直結する helper は今回確認範囲では見当たらない
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/core/items/partyAbility/partyAbility.ts](src/rmmz/rpg/data/main/traitContainers/trait/core/items/partyAbility/partyAbility.ts)

- collapse type の runtime query helper は未確認
  - ラベルと named item はあるが、Game_BattlerBase.collapseType 相当の取得関数は今回確認範囲では見当たらない

- addedSkillTypes に対応する汎用 helper 名はある一方、Rmmz_TraitContainer interface には addedSkillTypes が定義されていない
  - helper 実装と runtime interface の対応がまだ揃っていない
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/skill.ts](src/rmmz/rpg/data/main/traitContainers/trait/skill.ts), [src/rmmzRuntime/objects/core/battle/battler/base/trait.ts](src/rmmzRuntime/objects/core/battle/battler/base/trait.ts)

### 気づいた不整合

- Rmmz_TraitContainer.traitsSet の戻り値が boolean になっている
  - 実際の traitSet は number[] を返すため、interface 側が未調整の可能性が高い
  - 実装: [src/rmmzRuntime/objects/core/battle/battler/base/trait.ts](src/rmmzRuntime/objects/core/battle/battler/base/trait.ts), [src/rmmz/rpg/data/main/traitContainers/trait/trait.ts](src/rmmz/rpg/data/main/traitContainers/trait/trait.ts)

- Rmmz_ItemUser.confusionLevel の戻り値が boolean になっている
  - 元の Game_BattlerBase / Game_Battler 系では数値レベルを返す責務なので、型が未調整に見える
  - 実装: [src/rmmzRuntime/objects/core/battle/battler/base/itemUser.ts](src/rmmzRuntime/objects/core/battle/battler/base/itemUser.ts)

- traitAtttackSpeed に typographical error がある
  - 意味上は attackSpeed 相当だが export 名に t が一つ多い
  - 実装: [src/rmmz/rpg/data/main/traitContainers/trait/attack.ts](src/rmmz/rpg/data/main/traitContainers/trait/attack.ts)

### 現時点の結論

- trait ベースの純粋計算ロジックはかなり進んでいる
- battler の計算土台は data/main 側の関数群として先に実装されている
- ただし runtime の Game_BattlerBase / Game_Battler / Game_Actor / Game_Enemy を置き換える concrete 実装はまだ薄く、現状は interface 設計が先行している
- 次に着手するなら、Game_BattlerBase の trait 集約と param 計算を束ねる adapter 実装を 1 つ作るのが最も効果的
