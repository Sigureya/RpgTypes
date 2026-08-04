# rmmz_objects.js Pure Function Candidates: Unit Family

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

## Game_Unit

起点: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js#L5222)

### 実装済み

- [src/rmmzFunctional/unit/unit.ts](src/rmmzFunctional/unit/unit.ts)
  - `dataTroop`
  - `dataEnemy`
  - `initialPartyActorIds`
  - `initialPartyActors`
  - `battleTestTroop`
  - `troopEnemyIds`
  - `troopEnemies`
  - `troopEnemyNames`
  - `troopLetterTable`
  - `troopEnemyLabels`

### まだ候補として残るもの

- pure: inBattle, members, aliveMembers, deadMembers, movableMembers, agility, tgrSum, isAllDead, tpbBaseSpeed
- quasi: tpbReferenceTime, substituteBattler
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
