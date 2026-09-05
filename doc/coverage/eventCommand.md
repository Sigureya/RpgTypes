# イベントコマンド網羅状況

コマンドコードの一覧は [src/libs/eventCommand/eventCommandCodes.ts](src/libs/eventCommand/eventCommandCodes.ts) を基準にしています。

- **型**: `Command_*` 型と `makeCommand*` Factory は [src/rmmz/eventCommand/commands/](src/rmmz/eventCommand/commands/) にほぼ全コード分あるため、列を設けていません。
- **fn**: [src/rmmzFunctional/interpreter/](src/rmmzFunctional/interpreter/) の実装関数名。
- **結線**: `executeSideEffectCommand` ([src/rmmzFunctional/interpreter/command/command.ts](src/rmmzFunctional/interpreter/command/command.ts)) の switch に載っているか。
- **旧実装テスト**: [src/rmmzMock/core/objects/](src/rmmzMock/core/objects/) の該当テストファイル名（`.test.ts` は省略）。fn が無くても、旧実装の挙動を固定するテストだけ先に置いてある場合がある。

| code | 定数 | fn | 結線 | 旧実装テスト |
| ---- | ---- | -- | ---- | ------------ |
| 0 | NO_OPERATION | － | － | － |
| 101 | SHOW_MESSAGE | － | － | commandShowMessage |
| 102 | SHOW_CHOICES | setupChoice | － | － |
| 103 | INPUT_NUMBER | commandInputNumber | － | commandMessageEtc |
| 104 | SELECT_ITEM | commandSetupItemChpice | － | － |
| 105 | SHOW_SCROLLING_TEXT | － | － | － |
| 108 | COMMENT_HEAD | － | － | － |
| 109 | SKIP | － | － | － |
| 111 | CONDITIONAL_BRANCH | evaluteBranchCommand / evaluteBranchBy* | － | commandBranch / commandBranch.timer |
| 112 | LOOP | － | － | － |
| 113 | LOOP_BREAK | － | － | － |
| 115 | EXIT_EVENT_PROCESSING | － | － | － |
| 117 | COMMON_EVENT | － | － | － |
| 118 | LABEL | findJumpTargetIndex | － | － |
| 119 | LABEL_JUMP | findJumpTargetIndex | － | － |
| 121 | CONTROL_SWITCHES | commandControlSwitches | 〇 | － |
| 122 | CONTROL_VARIABLES | variableFromCommand / variableFrom* | － | interpreter.gamedata / operateValue.*（11本） |
| 123 | CONTROL_SELF_SWITCH | commandControlSelfSwitch | － | － |
| 124 | CONTROL_TIMER | commandControlTimer | 〇 | － |
| 125 | CHANGE_GOLD | executeChangeGold | 〇 | commandPartyItem |
| 126 | CHANGE_ITEMS | executeChangeItems | 〇 | commandPartyItem |
| 127 | CHANGE_WEAPONS | executeChangeWeapons | 〇 | commandPartyItem |
| 128 | CHANGE_ARMORS | executeChangeArmors | 〇 | commandPartyItem |
| 129 | CHANGE_PARTY_MEMBER | commandChangePartyMember | 〇 | － |
| 132 | CHANGE_BATTLE_BGM | commandChangeBattleBgm | 〇 | － |
| 133 | CHANGE_VICTORY_ME | commandChangeVictoryMe | 〇 | － |
| 134 | CHANGE_SAVE_ACCESS | commandChangeSaveAccess | 〇 | － |
| 135 | CHANGE_MENU_ACCESS | commandChangeMenuAccess | 〇 | － |
| 136 | CHANGE_ENCOUNTER | commandChangeEncounter | 〇 | － |
| 137 | CHANGE_FORMATION_ACCESS | commandChangeFormationAccess | 〇 | － |
| 138 | CHANGE_WINDOW_COLOR | commandChangeWindowColor | 〇 | － |
| 139 | CHANGE_DEFEAT_ME | commandChangeDefeatMe | 〇 | － |
| 140 | CHANGE_VEHICLE_BGM | commandChangeVehicleBgm | 〇 | commandVehicle |
| 201 | TRANSFER_PLAYER | resplveTransferPlayerPostion (座標解決のみ) | － | － |
| 202 | SET_VEHICLE_LOCATION | setVehicleLocation / resolveVehicleLocation | 〇 | commandVehicle |
| 203 | SET_EVENT_LOCATION | － | － | － |
| 204 | SCROLL_MAP | － | － | commandMapScroll |
| 205 | SET_MOVEMENT_ROUTE | － | － | － |
| 206 | GET_ONOFF_VEHICLE | － | － | commandVehicle |
| 211 | CHANGE_TRANSPARENCY | － | － | － |
| 212 | SHOW_ANIMATION | － | － | commandTemp |
| 213 | SHOW_BALLOON_ICON | － | － | commandTemp |
| 214 | ERASE_EVENT | － | － | － |
| 216 | CHANGE_PLAYER_FOLLOWERS | － | － | － |
| 217 | GATHER_FOLLOWERS | － | － | － |
| 221 | FADEOUT_SCREEN | － | － | commandScreen |
| 222 | FADEIN_SCREEN | － | － | commandScreen |
| 223 | TINT_SCREEN | commandTintScreen | 〇 | commandScreen |
| 224 | FLASH_SCREEN | commandFlashScreen | 〇 | commandScreen |
| 225 | SHAKE_SCREEN | commandShakeScreen | 〇 | commandScreen |
| 230 | WAIT | － | － | － |
| 231 | SHOW_PICTURE | － | － | － |
| 232 | MOVE_PICTURE | － | － | － |
| 233 | ROTATE_PICTURE | － | － | － |
| 234 | TINT_PICTURE | － | － | － |
| 235 | ERASE_PICTURE | － | － | － |
| 236 | SET_WEATHER_EFFECT | commandSetWeatherEffect | 〇 | commandScreen |
| 241 | PLAY_BGM | commandPlayBgm | 〇 | commandAudio |
| 242 | FADEOUT_BGM | commandFadeOutBgm | 〇 | commandAudio |
| 243 | SAVE_BGM | commmandSaveBgm | 〇 | commandAudio |
| 244 | RESUME_BGM | － | － | commandAudio |
| 245 | PLAY_BGS | commandPlayBgs | 〇 | commandAudio |
| 246 | FADEOUT_BGS | commandFadeOutBgs | 〇 | commandAudio |
| 249 | PLAY_ME | commandPlayMe | 〇 | commandAudio |
| 250 | PLAY_SE | commandPlaySe | 〇 | commandAudio |
| 251 | STOP_SE | － | － | commandAudio |
| 261 | PLAY_MOVIE | － | － | － |
| 281 | CHANGE_MAP_NAME_DISPLAY | commandChangeMapNameDisplay | 〇 | commandMap |
| 282 | CHANGE_TILESET | commandChangeTileset | 〇 | commandTileset |
| 283 | CHANGE_BATTLE_BACKGROUND | commandChangeBattleBackground | 〇 | commandMap |
| 284 | CHANGE_PARALLAX | commandChangeParallax | 〇 | commandMap |
| 285 | GET_LOCATION_INFO | commandGetLocationInfo / resolveLocationInfo | － | － |
| 301 | BATTLE_PROCESSING | resolveTroopIdByCommand (troopId 解決のみ) | － | commandBattleIf / commandBattleStart / troop.encounter |
| 302 | SHOP_PROCESSING | － | － | － |
| 303 | NAME_INPUT_PROCESSING | － | － | － |
| 311 | CHANGE_HP | commandChangeActorHp | 〇 | commandChangeActorHP |
| 312 | CHANGE_MP | commandChangeActorMp | 〇 | commandChangeActorMP |
| 313 | CHANGE_ACTOR_STATE | － | － | command.actorState |
| 314 | RECOVER_ALL | － | － | command.actorState |
| 315 | CHANGE_EXP | commandChangeActorExp | 〇 | command.actorExp |
| 316 | CHANGE_LEVEL | commandChangeActorLevel | 〇 | command.actorExp |
| 317 | CHANGE_PARAMETER | － | － | － |
| 318 | CHANGE_SKILL | － | － | command.actorSkill |
| 319 | CHANGE_EQUIP | － | － | commandActors |
| 320 | CHANGE_NAME | commandChangeActorName | 〇 | commandActors |
| 321 | CHANGE_CLASS | commandChangeActorClass | 〇 | commandActors |
| 322 | CHANGE_ACTOR_IMAGES | commandChangeActorImages | 〇 | commandActors |
| 323 | CHANGE_VEHICLE_IMAGE | commandChangeVehicleImage | 〇 | commandVehicle |
| 324 | CHANGE_NICKNAME | commandChangeActorNickName | 〇 | commandActors |
| 325 | CHANGE_PROFILE | commandChangeActorProfile | 〇 | commandActors |
| 326 | CHANGE_TP | commandChangeActorTp | 〇 | commandChangeActorTP |
| 331 | CHANGE_ENEMY_HP | commandChangeEnemyHp | 〇 | commandChangeEnemyValue / command.enemy |
| 332 | CHANGE_ENEMY_MP | commandChangeEnemyMp | 〇 | commandChangeEnemyValue / command.enemy |
| 333 | CHANGE_ENEMY_STATE | － | － | － |
| 334 | ENEMY_RECOVER_ALL | commandEnemyRecoverAll | 〇 | command.enemy |
| 335 | ENEMY_APPEAR | commandEnemyAppear | 〇 | － |
| 336 | ENEMY_TRANSFORM | commandEnemyTransform | 〇 | － |
| 337 | SHOW_BATTLE_ANIMATION | － | － | － |
| 339 | FORCE_ACTION | － | － | commandForceAction |
| 340 | ABORT_BATTLE | － | － | － |
| 342 | CHANGE_ENEMY_TP | commandChangeEnemyTp | 〇 | commandChangeEnemyValue / command.enemy |
| 351 | OPEN_MENU_SCREEN | － | － | － |
| 352 | OPEN_SAVE_SCREEN | － | － | － |
| 353 | GAME_OVER | － | － | － |
| 354 | RETURN_TO_TITLE_SCREEN | － | － | － |
| 355 | SCRIPT_EVAL | － | － | － |
| 356 | PLUGIN_COMMAND_MV | － | － | － |
| 357 | PLUGIN_COMMAND_MZ | － | － | － |
| 401 | SHOW_MESSAGE_BODY | － | － | commandShowMessage |
| 402 | SHOW_CHOICES_ITEM | needsSkipByChoiceWhen | － | － |
| 403 | SHOW_CHOICES_CANCEL | needsSkipByWhenCancel | － | － |
| 405 | SHOW_SCROLLING_TEXT_BODY | － | － | － |
| 408 | COMMENT_BODY | － | － | － |
| 411 | CONDITIONAL_BRANCH_ELSE | skipBranch (分岐スキップのみ) | － | － |
| 601 | BATTLE_PROCESSING_IF_WIN | － | － | commandBattleIf |
| 602 | BATTLE_PROCESSING_IF_ESCAPE | － | － | commandBattleIf |
| 603 | BATTLE_PROCESSING_IF_LOSE | － | － | commandBattleIf |
| 604 | BATTLE_PROCESSING_BLOCK_END | － | － | commandBattleIf |
| 605 | SHOP_PROCESSING_BODY | － | － | － |
| 655 | SCRIPT_EVAL_BODY | － | － | － |

集計: fn 実装 63/120、dispatcher 結線 49/120、旧実装テスト 59/120。

## 未結線 14 件の内訳

fn はあるが結線していない 14 件です。`executeSideEffectCommand` は
「`void` を返す副作用だけ」を扱う形なので、それに収まらないものが残っています。

同じ「未結線」でも中身は 3 種類あり、必要な作業量が違います。

| 種類 | コード | 状況 |
| ---- | ------ | ---- |
| A. 関数は完成。dispatcher の形に合わないだけ | 102 / 103 / 104 / 123 | 戻り値か追加引数を渡せる形にすれば繋がる |
| B. インタプリタの状態が要る | 118 / 119 / 402 / 403 / 411 | 実行位置と分岐結果を持つ器が先に要る |
| C. 実装が部分的 | 111 / 122 / 201 / 285 / 301 | 元実装にある処理がまだ残っている |

## A. 関数は完成しているもの

### 102 SHOW_CHOICES / 103 INPUT_NUMBER / 104 SELECT_ITEM

[message/choice.ts](src/rmmzFunctional/interpreter/command/message/choice.ts) と
[message/message.ts](src/rmmzFunctional/interpreter/command/message/message.ts)。

`message.isBusy()` のとき `false` を返して次フレームへ回す必要があるため、戻り値が `boolean` です。
`executeSideEffectCommand` は `void` なので、この戻り値を捨てると「待ち」が消えます。
dispatcher 側を `boolean` にするか、待ちの要るコマンドを別の入口に分けるかの判断が要ります。

### 123 CONTROL_SELF_SWITCH

[control/control.ts](src/rmmzFunctional/interpreter/command/control/control.ts)。
処理は元実装と等価ですが、`mapId` と `eventId` を引数で受け取ります。
これは実行中のイベント側が持つ値で、`Rmmz_GameObjects` からは取れません。

## B. インタプリタの状態が要るもの

元実装は `_index`（実行位置）、`_indent`、`_branch[]`（indent ごとの分岐結果）を
インタプリタ自身が持っています。この 5 件はそこを読み書きします。

### 118 LABEL / 119 LABEL_JUMP

[jump/jump.ts](src/rmmzFunctional/interpreter/command/jump/jump.ts) の `findJumpTargetIndex` は
**ラベルの検索まで**。元実装の `jumpTo(index)` はそのあと、飛び先までの間で indent が変わる区間の
`_branch[indent]` を `null` に戻してから `_index` を書き換えます。この巻き戻しが未実装です。

### 402 SHOW_CHOICES_ITEM / 403 SHOW_CHOICES_CANCEL / 411 CONDITIONAL_BRANCH_ELSE

[message/choice.ts](src/rmmzFunctional/interpreter/command/message/choice.ts) の
`needsSkipByChoiceWhen` / `needsSkipByWhenCancel`、および
[command/types.ts](src/rmmzFunctional/interpreter/command/types.ts) の `skipBranch`。

**スキップの要否判定とスキップ処理は両方ある**ので、足りないのは
「直前の分岐結果を indent ごとに覚えておく器」だけです。
元実装でいう `this._branch[this._indent]` に相当するものがありません。

## C. 実装が部分的なもの

### 111 CONDITIONAL_BRANCH

[branch/branch.ts](src/rmmzFunctional/interpreter/command/branch/branch.ts) の `evaluteBranchCommand`。

判定タイプ 0〜10（スイッチ / 変数 / セルフスイッチ / タイマー / アクター / 敵キャラ /
キャラクター / 所持金 / アイテム / 武器 / 防具）は実装済み。未実装は次の 3 つです。

| タイプ | 内容 | 元実装が使うもの |
| ------ | ---- | ---------------- |
| 11 | ボタン | `Input.isPressed` / `isTriggered` / `isRepeated` |
| 12 | スクリプト | `eval` |
| 13 | 乗り物 | `$gamePlayer.vehicle() === $gameMap.vehicle(id)` |

11 は入力層が未着手のため、13 は `Rmmz_PlayerCharactor` に `vehicle()` を足せば書けます。

判定結果を `_branch[_indent]` に記録し、`false` なら `skipBranch()` する部分は B と同じ理由で外にあります。

**修正済み**: タイマー判定 `evaluteBranchByTimer` が `timer.seconds() / 60` を秒として使っていました。
元実装は `$gameTimer.frames() / 60` で、`Game_Timer.seconds()` はすでに `Math.floor(frames / 60)` を返すため、
60 で 2 回割っていたことになります。`timer.frames() / 60` に直し、
[commandBranch.timer.test.ts](src/rmmzMock/core/objects/commandBranch.timer.test.ts) で元実装との同値を固定しました。

### 122 CONTROL_VARIABLES

[variable/variable.ts](src/rmmzFunctional/interpreter/command/variable/variable.ts) の
`variableFromCommand` / `variableFromGameData`。

**値の解決**はオペランド 0（定数）/ 1（変数）/ 2（乱数）/ 3（ゲームデータ）まで揃っており、
ゲームデータの 9 種（アイテム / 武器 / 防具 / アクター / 敵キャラ / マップキャラ / パーティ /
その他 / 直前データ）も全て実装済みです。旧実装テストも 11 本と最も厚い。

未実装は**値を書き込む側**です。

- オペランド 4（スクリプト）… `eval` のため未対応
- 変数 ID の範囲ループ … 元実装は `startId`〜`endId` を回す
- 代入方法 … 元実装の `operateVariable` にある 代入 / 加算 / 減算 / 乗算 / 除算 / 剰余、
  および例外時に `0` を入れるフォールバック

**書き込み側を作るときの注意**: 元実装は範囲ループの中で変数ごとに乱数を引き直すため、
複数の変数に別々の値が入ります。`variableFromRandom` は 1 回の呼び出しで 1 つの値を返すので、
戻り値をそのまま範囲へ配ると全ての変数が同じ値になります。
書き込み側はまだ無いので現時点で壊れてはいませんが、範囲ループを書くときに
「値の解決を変数ごとに呼ぶ」形にしないと元実装と挙動が変わります。

### 201 TRANSFER_PLAYER

[character/character.ts](src/rmmzFunctional/interpreter/command/character/character.ts) の
`resplveTransferPlayerPostion` は**座標の解決**（直接指定 / 変数指定）、
`canTransferPlayer(party, message)` は**実行可否の判定**を担います。
後者は元実装の `$gameParty.inBattle() || $gameMessage.isBusy()` に対応し、
偽のときは同じコマンドを次のフレームで再実行させます。

未実装は次の 2 つです。

- `$gamePlayer.reserveTransfer(mapId, x, y, direction, fadeType)`
- `setWaitMode("transfer")`

### 285 GET_LOCATION_INFO

[mapEvent/getLocationInfo.ts](src/rmmzFunctional/interpreter/command/mapEvent/getLocationInfo.ts)。

指定モード 0（直接）/ 1（変数）と、取得内容 6 種（地形タグ / イベント ID /
タイル ID 4 層 / リージョン ID）は実装済み。

モード 2（キャラクターで指定）も、元実装の `Game_Interpreter.character()` と同じ解決順
（負数はプレイヤー / `0` は実行中イベント / 正数はその ID のイベント）にそろえました。
プレイヤーの座標は引数 `player` で受け取ります。

**意図的な差**: 該当キャラクターが見つからないとき、元実装は `character.x` で例外になります
（`this.character()` は戦闘中・別マップ・イベント不在で `null` を返し、その後 `null.x` を読む）。
ここでは原点 `{x: 0, y: 0}` を返して落とさない形にしています。

未実装は、戦闘中と別マップのときに `null` を返す部分です。どちらもインタプリタ側の文脈が要ります。

### 301 BATTLE_PROCESSING

[battle/battle.ts](src/rmmzFunctional/interpreter/command/battle/battle.ts) の
`resolveTroopIdByCommand` は**敵グループ ID の解決だけ**。
指定方法 3 種（直接 / 変数 / ランダムエンカウントと同じ）に対応しています。
ランダム時は元実装の `$gamePlayer.makeEncounterTroopId()` を呼ばず `selectMapEncounters` で自前に解決するため、
[troop.encounter.test.ts](src/rmmzMock/core/objects/troop.encounter.test.ts) で元実装との同値を固定しました。

このテストで **`regionSet` が空のエンカウントが候補から漏れる不具合**が見つかり、修正済みです。
元実装の `meetsEncounterConditions` は `regionSet.length === 0 || regionSet.includes(regionId)` で、
空の `regionSet`（＝どのリージョンでも出る、既定の設定）を通します。
`selectMapEncounters` は `includes` だけを見ていたため、既定設定のエンカウントが 1 つも選ばれませんでした。

未実装は戦闘の開始そのものです。

- `$dataTroops[troopId]` の存在確認
- `BattleManager.setup(troopId, canEscape, canLose)`
- `setEventCallback` で戦闘結果を `_branch[_indent]` へ格納（601/602/603 の分岐がこれを読む）
- `$gamePlayer.makeEncounterCount()`
- `SceneManager.push(Scene_Battle)`

`Rmmz_BattleManager` の interface はあるので、置き場が決まれば書けます。
