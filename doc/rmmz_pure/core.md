# rmmz_objects.js Pure Function Candidates: Core

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

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
