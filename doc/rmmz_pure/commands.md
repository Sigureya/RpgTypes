# 実装状況記録

対象は、`src/rmmzMock/core/objects/command*.test.ts` と `src/rmmzFunctional/interpreter/command/**` の対応状況です。

記号は次の意味でそろえています。

- `〇`: 存在する
- `－`: 存在しない、または未確認

## command番号あり

| コマンド番号 | 処理名                   | rmmzTest | fn  | fnTest |
| ------------ | ------------------------ | -------- | --- | ------ |
| 101          | ShowMessage              | 〇       | 〇  | －     |
| 401          | ShowMessageBody          | 〇       | －  | －     |
| 103          | InputNumber              | 〇       | 〇  | －     |
| 104          | SelectItem               | 〇       | 〇  | －     |
| 111          | BranchBySwitchOFF        | 〇       | 〇  | －     |
| 125          | ChangeGold               | 〇       | 〇  | －     |
| 126          | ChangeItems              | 〇       | 〇  | －     |
| 127          | ChangeWeapons            | 〇       | 〇  | －     |
| 128          | ChangeArmors             | 〇       | 〇  | －     |
| 202          | SetVehicleLocation       | 〇       | 〇  | 〇     |
| 204          | ScrollMap                | 〇       | 〇  | －     |
| 212          | ShowAnimation            | 〇       | 〇  | －     |
| 213          | ShowBalloonIcon          | 〇       | 〇  | －     |
| 214          | EraseEvent               | 〇       | 〇  | －     |
| 221          | FadeOutScreen            | 〇       | 〇  | －     |
| 222          | FadeInScreen             | 〇       | 〇  | －     |
| 223          | TintScreen               | 〇       | 〇  | －     |
| 224          | FlashScreen              | 〇       | 〇  | －     |
| 225          | ShakeScreen              | 〇       | 〇  | －     |
| 236          | SetWeatherEffect         | 〇       | 〇  | －     |
| 241          | PlayBGM                  | 〇       | 〇  | －     |
| 242          | FadeOutBGM               | 〇       | 〇  | －     |
| 243          | SaveBGM                  | 〇       | 〇  | －     |
| 244          | ResumeBGM                | 〇       | 〇  | －     |
| 245          | PlayBGS                  | 〇       | 〇  | －     |
| 246          | FadeOutBGS               | 〇       | 〇  | －     |
| 249          | PlayME                   | 〇       | 〇  | －     |
| 250          | PlaySE                   | 〇       | 〇  | －     |
| 251          | StopSE                   | 〇       | 〇  | －     |
| 281          | ChangeMapNameDisplay     | 〇       | 〇  | －     |
| 282          | ChangeTileset            | 〇       | 〇  | －     |
| 283          | ChangeBattleBackground   | 〇       | 〇  | －     |
| 284          | ChangeParallax           | 〇       | 〇  | －     |
| 301          | BattleProcessing         | 〇       | 〇  | －     |
| 601          | BattleProcessingIfWin    | 〇       | 〇  | －     |
| 602          | BattleProcessingIfEscape | 〇       | 〇  | －     |
| 603          | BattleProcessingIfLose   | 〇       | 〇  | －     |
| 604          | BattleProcessingBlockEnd | 〇       | 〇  | －     |
| 311          | ChangeHP                 | 〇       | 〇  | 〇     |
| 312          | ChangeMP                 | 〇       | 〇  | 〇     |
| 313          | ChangeActorState         | 〇       | 〇  | 〇     |
| 314          | RecoverAll               | 〇       | 〇  | 〇     |
| 315          | ChangeExp                | 〇       | 〇  | 〇     |
| 316          | ChangeLevel              | 〇       | 〇  | 〇     |
| 318          | ChangeSkill              | 〇       | 〇  | －     |
| 319          | ChangeEquip              | 〇       | 〇  | －     |
| 320          | ChangeName               | 〇       | 〇  | －     |
| 321          | ChangeClass              | 〇       | 〇  | －     |
| 322          | ChangeActorImages        | 〇       | 〇  | －     |
| 324          | ChangeNickname           | 〇       | 〇  | －     |
| 325          | ChangeProfile            | 〇       | 〇  | －     |
| 326          | ChangeTP                 | 〇       | 〇  | 〇     |
| 331          | ChangeEnemyHP            | 〇       | 〇  | 〇     |
| 332          | ChangeEnemyMP            | 〇       | 〇  | 〇     |
| 333          | ChangeEnemyState         | 〇       | 〇  | －     |
| 334          | EnemyRecoverAll          | 〇       | 〇  | －     |
| 335          | EnemyAppear              | 〇       | 〇  | －     |
| 336          | EnemyTransform           | 〇       | 〇  | －     |
| 337          | ShowBattleAnimation      | 〇       | 〇  | －     |
| 339          | ForceAction              | 〇       | 〇  | －     |
| 340          | AbortBattle              | 〇       | 〇  | －     |
| 342          | ChangeEnemyTP            | 〇       | 〇  | 〇     |

## command番号なし

| コマンド番号 | 処理名                   | rmmzTest | fn  | fnTest |
| ------------ | ------------------------ | -------- | --- | ------ |
| －           | variableFromPartyAt      | －       | 〇  | 〇     |
| －           | variableFromItem         | －       | 〇  | 〇     |
| －           | variableFromWeapon       | －       | 〇  | 〇     |
| －           | variableFromArmor        | －       | 〇  | 〇     |
| －           | variableFromOther        | －       | 〇  | 〇     |
| －           | variableFromCommand      | －       | 〇  | 〇     |
| －           | variableFromActor        | －       | 〇  | 〇     |
| －           | variableFromEnemy        | －       | 〇  | 〇     |
| －           | variableFromMapCharactor | －       | 〇  | 〇     |
| －           | evaluateBranchByActor    | －       | 〇  | 〇     |
| －           | resolveVehicleLocation   | －       | 〇  | 〇     |
| －           | resolveTargetVehicle     | －       | 〇  | 〇     |
| －           | iterateEnemyIndex        | 〇       | 〇  | －     |
