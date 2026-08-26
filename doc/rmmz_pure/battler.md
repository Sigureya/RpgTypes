# 実装状況記録

対象は [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js) と、その周辺の battler 系 `rmmzFunctional` 実装です。

記号は次の意味でそろえています。

## battler family

### Game_BattlerBase の trait, param, equip, skill 系

| 関数名                       | rmmzTest | fn  | fnTest |
| ---------------------------- | -------- | --- | ------ |
| traitParamRate               | 〇       | 〇  | 〇     |
| traitXparam                  | 〇       | 〇  | 〇     |
| traitSparam                  | 〇       | 〇  | 〇     |
| traitElementRate             | 〇       | 〇  | 〇     |
| traitDebuffRate              | 〇       | 〇  | 〇     |
| traitStateRate               | 〇       | 〇  | 〇     |
| traitAttackElements          | 〇       | 〇  | 〇     |
| traitAttackStates            | 〇       | 〇  | 〇     |
| traitAttackStateRate         | 〇       | 〇  | 〇     |
| traitAtttackSpeed            | 〇       | 〇  | 〇     |
| traitAttackTimesAdd          | 〇       | 〇  | 〇     |
| traitAttackSkillId           | 〇       | 〇  | 〇     |
| skillMpCost                  | 〇       | 〇  | 〇     |
| canPaySkillCostBasic         | 〇       | 〇  | 〇     |
| isSkillRequiredWeaponTypeOk  | 〇       | 〇  | 〇     |
| isSkillSealed                | 〇       | 〇  | 〇     |
| filterUsableSkills           | 〇       | 〇  | 〇     |
| filterUsableSkillsWithWeapon | 〇       | 〇  | 〇     |
| canEquipWeapon               | 〇       | 〇  | 〇     |
| canEquipArmor                | 〇       | 〇  | 〇     |
| isEquipWeaponTypeOk          | 〇       | 〇  | 〇     |
| isEquipArmorTypeOk           | 〇       | 〇  | 〇     |
| isEquipTypeLocked            | 〇       | 〇  | 〇     |
| isEquipTypeSealed            | 〇       | 〇  | 〇     |
| maxTp                        | －       | －  | －     |
| skillTpCost                  | －       | －  | －     |
| buffLength                   | －       | －  | －     |
| buff                         | －       | －  | －     |
| isBuffAffected               | －       | －  | －     |
| isDebuffAffected             | －       | －  | －     |
| isStateAffected              | －       | －  | －     |
| isDeathStateAffected         | －       | －  | －     |

### Game_Battler

| 関数名                     | rmmzTest | fn  | fnTest |
| -------------------------- | -------- | --- | ------ |
| numActions                 | －       | －  | －     |
| action                     | －       | －  | －     |
| result                     | －       | －  | －     |
| speed                      | －       | －  | －     |
| currentAction              | －       | －  | －     |
| tpbChargeTime              | －       | －  | －     |
| isTpbCharged               | －       | －  | －     |
| isTpbReady                 | －       | －  | －     |
| isTpbTimeout               | －       | －  | －     |
| isTpbTurnEnd               | －       | －  | －     |
| isDamagePopupRequested     | －       | －  | －     |
| isEffectRequested          | －       | －  | －     |
| isMotionRequested          | －       | －  | －     |
| isWeaponAnimationRequested | －       | －  | －     |
| isMotionRefreshRequested   | －       | －  | －     |
| isSelected                 | －       | －  | －     |
| makeSpeed                  | －       | －  | －     |
| makeActionTimes            | －       | －  | －     |
| canInput                   | －       | －  | －     |
| isStateAddable             | －       | －  | －     |
| isStateRestrict            | －       | －  | －     |

### Game_Actor

| 関数名               | rmmzTest | fn  | fnTest |
| -------------------- | -------- | --- | ------ |
| actorId              | －       | －  | －     |
| name                 | －       | －  | －     |
| nickname             | －       | －  | －     |
| profile              | －       | －  | －     |
| characterName        | －       | －  | －     |
| characterIndex       | －       | －  | －     |
| faceName             | －       | －  | －     |
| faceIndex            | －       | －  | －     |
| battlerName          | －       | －  | －     |
| currentExp           | －       | －  | －     |
| currentLevelExp      | －       | －  | －     |
| nextLevelExp         | －       | －  | －     |
| nextRequiredExp      | －       | －  | －     |
| maxLevel             | －       | －  | －     |
| isMaxLevel           | －       | －  | －     |
| isFormationChangeOk  | －       | －  | －     |
| hasNoWeapons         | －       | －  | －     |
| isActor              | －       | －  | －     |
| findNewSkills        | －       | －  | －     |
| shouldDisplayLevelUp | －       | －  | －     |

### Game_Enemy

| 関数名                   | rmmzTest | fn  | fnTest |
| ------------------------ | -------- | --- | ------ |
| isEnemy                  | 〇       | －  | －     |
| enemyId                  | 〇       | －  | －     |
| itemObject               | 〇       | －  | －     |
| isSpriteVisible          | 〇       | －  | －     |
| screenX                  | 〇       | －  | －     |
| screenY                  | 〇       | －  | －     |
| isLetterEmpty            | 〇       | －  | －     |
| meetsTurnCondition       | 〇       | －  | －     |
| meetsHpCondition         | 〇       | －  | －     |
| meetsMpCondition         | 〇       | －  | －     |
| meetsStateCondition      | 〇       | －  | －     |
| meetsPartyLevelCondition | 〇       | －  | －     |
| meetsSwitchCondition     | 〇       | －  | －     |
| exp                      | 〇       | －  | －     |
| gold                     | 〇       | －  | －     |
| battlerName              | 〇       | －  | －     |
| battlerHue               | 〇       | －  | －     |
| originalName             | 〇       | －  | －     |
| name                     | 〇       | －  | －     |
| index                    | 〇       | －  | －     |
| enemy                    | －       | －  | －     |
| traitObjects             | －       | －  | －     |
| paramBase                | －       | －  | －     |
| isBattleMember           | －       | －  | －     |
| friendsUnit              | －       | －  | －     |
| opponentsUnit            | －       | －  | －     |
| meetsCondition           | －       | －  | －     |
| isActionValid            | －       | －  | －     |
| selectAction             | －       | －  | －     |
| selectAllActions         | －       | －  | －     |
| makeDropItems            | －       | －  | －     |
| initialize               | －       | －  | －     |
| setup                    | －       | －  | －     |
| performActionStart       | －       | －  | －     |
| performAction            | －       | －  | －     |
| performActionEnd         | －       | －  | －     |
| makeActions              | －       | －  | －     |
| setLetter                | －       | －  | －     |
| setPlural                | －       | －  | －     |
| transform                | －       | －  | －     |
| performDamage            | －       | －  | －     |
| performCollapse          | －       | －  | －     |

### Game_Actors

| 関数名 | rmmzTest | fn  | fnTest |
| ------ | -------- | --- | ------ |
| actor  | －       | －  | －     |

## battler 周辺の純関数基盤

| 関数名                       | rmmzTest | fn  | fnTest |
| ---------------------------- | -------- | --- | ------ |
| traitPi                      | －       | 〇  | 〇     |
| traitSum                     | －       | 〇  | 〇     |
| traitSumAll                  | －       | 〇  | 〇     |
| traitSet                     | －       | 〇  | 〇     |
| someTraitMatched             | －       | 〇  | 〇     |
| calculateClassDataParam      | －       | 〇  | 〇     |
| classParamBase               | －       | 〇  | 〇     |
| calculateEnemyDataParam      | －       | 〇  | 〇     |
| skillMpCost                  | 〇       | 〇  | 〇     |
| canPaySkillCostBasic         | 〇       | 〇  | 〇     |
| isSkillRequiredWeaponTypeOk  | 〇       | 〇  | 〇     |
| isSkillSealed                | 〇       | 〇  | 〇     |
| filterUsableSkills           | 〇       | 〇  | 〇     |
| filterUsableSkillsWithWeapon | 〇       | 〇  | 〇     |
| filterUsableSkillsEx         | 〇       | 〇  | 〇     |
| filterSkillConditionTraits   | 〇       | 〇  | 〇     |
| mapUsableSkills              | 〇       | 〇  | 〇     |
| defineTraitItems             | －       | 〇  | －     |
| formatTraitText              | －       | 〇  | －     |
| compileTraitDisplayData      | －       | 〇  | －     |

## 補足
