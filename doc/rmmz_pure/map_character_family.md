# rmmz_objects.js Pure Function Candidates: Map and Character Family

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

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
