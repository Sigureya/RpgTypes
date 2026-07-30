# rmmz_objects.js Pure Function Candidates

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js)

## 判定方針

1. グローバル変数を読んでいるだけなら、対象値を引数注入できれば純粋関数化候補とみなす。
2. 関数Aが純粋関数化可能な関数Bのみを組み合わせているなら、Aも候補に含める。
3. オブジェクトや配列に破壊的変更を加える関数は、そのままでは純粋関数ではない。
4. ただし関数全体が非純粋でも、内部の計算部分だけ切り出せるなら候補として記録する。

## 記法

- pure: そのまま、またはインスタンス状態を引数化すれば純粋関数にしやすい
- quasi: 読み取り専用だがグローバル参照や外部オブジェクト参照を引数化する必要がある
- extract: 関数全体は非純粋だが、内部の計算だけ切り出せる

## 分割ファイル

- [doc/rmmz_objects_pure_function_candidates_core.md](doc/rmmz_pure/core.md)
  - Game_Temp, Game_System, Game_Timer, Game_Message, Game_Switches, Game_Variables, Game_SelfSwitches, Game_Screen, Game_Picture, Game_Item
- [doc/rmmz_objects_pure_function_candidates_action.md](doc/rmmz_pure/action.md)
  - Game_Action, Game_ActionResult
- [doc/rmmz_objects_pure_function_candidates_battler_family.md](doc/rmmz_pure/battler_family.md)
  - Game_BattlerBase, Game_Battler, Game_Actor, Game_Enemy, Game_Actors
  - trait と battler 周辺の TypeScript 実装進捗メモを同梱
- [doc/rmmz_objects_pure_function_candidates_unit_family.md](doc/rmmz_pure/unit_family.md)
  - Game_Unit, Game_Party, Game_Troop
- [doc/rmmz_objects_pure_function_candidates_map_character_family.md](doc/rmmz_pure/map_character_family.md)
  - Game_Map, Game_CommonEvent, Game_CharacterBase, Game_Character, Game_Player, Game_Follower, Game_Followers, Game_Vehicle, Game_Event, Game_Interpreter

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
