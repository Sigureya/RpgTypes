# 実装網羅状況の全体像

調査日: 2026-09-06

このフォルダは「ツクールMZのコアスクリプトのうち、どこまで作り直せているか」を
機械的に数えて記録したものです。関数単位の細かい記録は [doc/rmmz_pure/](doc/rmmz_pure/) 側にあり、
ここはその上に立つ俯瞰図です。

- [doc/coverage/objects.md](doc/coverage/objects.md) … `rmmz_objects.js` の Game_* クラス別
- [doc/coverage/eventCommand.md](doc/coverage/eventCommand.md) … イベントコマンド 120 種別

## 1. 数え方

`src/rmmzMock/core/` に置いた旧コアスクリプトを母数とし、
それに対応する実装が `src/` 側に存在するかを名前一致で突き合わせています。

この方法には次の限界があります。読むときは前提として扱ってください。

1. 名前一致なので、**旧実装と違う名前に変えて移植した関数は「未実装」に見える**。
   逆に短い名前（`param`、`states` など）は無関係な関数に一致して「実装済み」に見える。
2. よって **「対応あり」の数は上振れした上限値**、**「未実装」の一覧の方が信頼できる**。
3. 描画・入力・音声の実処理はそもそも移植対象外なので、母数に含めると網羅率が不当に下がる。
   コアスクリプト別の扱いは 3 節で分けています。

## 2. 層ごとの規模

| フォルダ | 実装ファイル | テストファイル | エクスポート数 | 位置づけ |
| -------- | -----------: | -------------: | -------------: | -------- |
| [src/rmmz/](src/rmmz/) | 630 | 60 | 1626 | JSON データの型・Factory・データだけで完結する関数 |
| [src/features/](src/features/) | 144 | 64 | 310 | 抽出・置換などの応用処理 |
| [src/rmmzRuntime/](src/rmmzRuntime/) | 119 | 1 | 150 | 実行時オブジェクトの interface 群 |
| [src/rmmzFunctional/](src/rmmzFunctional/) | 89 | 10 | 224 | 実行時処理の純粋関数実装 |
| [src/libs/](src/libs/) | 88 | 23 | 337 | 横断的な型・外部依存の隔離 |
| [src/validate/](src/validate/) | 82 | 58 | 71 | 検証 |
| [src/rpgNext/](src/rpgNext/) | 75 | 3 | 166 | 将来設計の置き場（停止中） |
| [src/fileio/](src/fileio/) | 49 | 9 | 130 | プロジェクトデータの入出力（型中心・DI） |
| [src/rmmzMock/](src/rmmzMock/) | 6 | 54 | 8 | 旧実装との同値検証 |
| [src/plugin/](src/plugin/) | 12 | 0 | 53 | 個別プラグインの Schema（workaround） |
| [src/format/](src/format/) | 1 | 3 | 3 | 新エディタ向け |

`rmmzFunctional` のテストが 10 本しかないのは、検証の本体が `rmmzMock` 側（54 本）にあるためです。
ただし **`rmmzMock` の 54 本のうち、`rmmzFunctional` を直接読んでいるのは 8 本だけ**で、
残りは `rmmz/eventCommand`（35 本）や `rmmz/rpg`（17 本）を対象にしています。
つまり `rmmzFunctional` の実装の多くは、旧実装との同値がまだ機械的に裏付けられていません。
ここが現状いちばん薄い箇所です。

## 3. コアスクリプト別の扱い

| ファイル | 行数 | 扱い | 現状 |
| -------- | ---: | ---- | ---- |
| [rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js) | 11334 | 主対象 | Game_* 30 クラス / prototype メソッド 1466 個。詳細は [objects.md](doc/coverage/objects.md) |
| [rmmz_windows.js](src/rmmzMock/core/windows/rmmz_windows.js) | 6656 | 一部のみ | `Rmmz_Window_Base` 系の interface と、制御文字・折り返しのテスト 3 本（`escape` / `flush` / `textHeight`）だけ |
| [rmmz_scenes.js](src/rmmzMock/core/rmmz_scenes.js) | 3685 | 型のみ | `Rmmz_Scene_*` の interface 13 種。純粋関数実装・テストともに無し |
| [rmmz_managers.js](src/rmmzMock/core/rmmz_managers.js) | 3166 | 型のみ | DataManager / BattleManager / AudioManager / SoundManager / ImageManager / ColorManager / SceneManager の interface のみ |
| [rmmz_sprites.js](src/rmmzMock/core/rmmz_sprites.js) | 3697 | 対象外 | 描画 |
| [rmmz_core.js](src/rmmzMock/core/rmmz_core.js) | 6483 | 対象外 | PIXI・音声・入力 |

## 4. 網羅できている領域

- **イベントコマンドの型**: [src/rmmz/eventCommand/commands/](src/rmmz/eventCommand/commands/) に
  `Command_*` 型 179 種と `makeCommand*` Factory 253 種があり、`EventCommandTable` に 113 件が登録済み。
  コマンドコード 120 種のうち定数を参照していないのは `WAIT` / `SET_VEHICLE_LOCATION` / `GET_ONOFF_VEHICLE` の 3 件だけで、
  この 3 件も型自体は存在する。テンプレート化もされており、型の面ではほぼ完成している。
- **データだけで完結する battler 系関数**: trait 集計、param、装備可否、スキル使用可否は
  [src/rmmz/rpg/data/main/](src/rmmz/rpg/data/main/) 側に実装があり、`rmmzMock` のテストも揃っている
  （[doc/rmmz_pure/battler.md](doc/rmmz_pure/battler.md)）。
- **Game_Action の対象選択**: `makeTargets` 周辺は [src/rmmzFunctional/action/target/](src/rmmzFunctional/action/target/) に一通りある。
- **制御変数（コード 122）**: 取得元（アクター/敵/パーティ/システム/マップキャラ/直前データ）が
  ほぼ全て実装され、旧実装テストも 11 本と最も厚い。
- **抽出・置換 (features)**: テキスト抽出と置換はツール用途で実用段階。
- **敵の行動選択・隊列**: `selectEnemyActions` 系、`troopEnemyLabels` 系が揃っている。

## 5. 薄い・未着手の領域

数字の裏付けは [objects.md](doc/coverage/objects.md) の未実装一覧です。特に大きいものを挙げます。

- **Game_Interpreter の実行制御**（未実装 147/155）
  `executeCommand` / `update` / `wait` / `setupChild` といった制御の骨格が丸ごと無い。
  個々のコマンド処理は 63 種あるが（[eventCommand.md](doc/coverage/eventCommand.md)）、
  それを回す側が無いため、**まだ「動くインタプリタ」にはなっていない**。
  実装済み 63 種のうち 49 種は `executeSideEffectCommand` へ結線済み。
  残り 14 種は待ち・制御フロー・イベント文脈を要するため、この dispatcher の形には収まらない。
- **Game_Battler の戦闘進行**（未実装 110/121）
  TPB（`updateTpb`、`tpbSpeed`、`startTpbCasting` ほか約 20 メソッド）、
  ステート付与・解除（`addNewState`、`removeStatesAuto`、`removeStatesByDamage`）、
  再生成（`regenerateHp/Mp/Tp`）、バフ増減（`addBuff`、`removeBuffsAuto`）が未着手。
- **Game_Action の適用側**（未実装 59/106）
  対象選択は出来たが、`apply` / `makeDamageValue` / `evalDamageFormula` /
  `executeHpDamage` / `itemEffect*`（付与系）といった **実際に効果を与える側が空**。
  `actionTestItemEffect` などテスト用の判定だけが先行している。
- **Game_Actor の装備・成長**（未実装 106/132）
  `changeExp` / `changeLevel` / `equips` / `optimizeEquipments` / `traitObjects` /
  `makeActions` 系。経験値計算は直近の commit で入り始めたところ。
- **Game_CharacterBase / Game_Player の移動**（未実装 74/94、65/72）
  通行判定と向き計算は [src/rmmzFunctional/map/character/](src/rmmzFunctional/map/character/) にあるが、
  移動そのもの（`moveStraight`、`updateMove`、`moveByInput`、`checkEventTrigger*`）は未着手。
  移動ルート（`Game_Character.processMoveCommand`）も同様。
- **Game_Screen / Game_Picture**（未実装 41/46、21/28）
  ピクチャの移動・回転・トーンは補間計算（`applyEasing`、`calcEasing`）を含み、
  純粋関数化しやすいはずだが手付かず。
- **Game_Temp**（未実装 29/30）
  ほぼ全て setter/getter なので純粋関数の対象外という判断（[doc/rmmz_pure/core.md](doc/rmmz_pure/core.md)）と整合するが、
  状態の持ち方を決めていないため、他の層から参照しづらい原因にもなっている。
- **Game_ActionResult**（未実装 15/16）
  戦闘結果の表現が無いため、ダメージ適用側を書き始める際の前提が欠けている。
- **セーブ / ロード**: `makeSaveContents` 相当の処理は fileio 側にも rmmzFunctional 側にも無い。

## 6. 方針との対応

スキル [.claude/skills/rmmz-plugin/](.claude/skills/rmmz-plugin/) の refactor モードが掲げる
「store への集約 / Manager を汚さない / セーブは素のオブジェクト」という方針に対して、
現状は次の位置にあります。

- **Manager 非汚染**: 達成済み。`rmmzRuntime` は interface だけを持ち、prototype を書き換える箇所は無い。
- **純粋関数への分断**: データ側（`rmmz`）はほぼ達成。実行時側（`rmmzFunctional`）は入口だけ。
- **store 集約**: 未着手。状態の置き場を決めていないため、5 節の「実行制御が無い」に直結している。
- **セーブ形式**: 未着手。

## 7. 次に手を付けるなら

依存の少ない順に並べると次のようになります。

1. **`Game_ActionResult` と `makeDamageValue` 周辺**。ここが埋まると戦闘の残りが書けるようになる。
2. **`Game_Screen` / `Game_Picture` の補間計算**。他への依存が無く、単独で純粋関数化できる。
3. **状態の置き場（store）の決定**。これを決めないと Interpreter と Battler の進行は書けない。
   結線できずに残った 14 種（待ち・制御フロー・イベント文脈）も、ここが決まらないと繋げられない。
