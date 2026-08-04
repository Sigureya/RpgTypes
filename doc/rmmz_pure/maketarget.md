# makeTargets までの処理経路メモ

対象: [src/rmmzMock/core/objects/rmmz_objects.js](src/rmmzMock/core/objects/rmmz_objects.js) の `Game_Action.prototype.makeTargets` 系処理

## 1. 入口と全体像

元実装の流れは、次のような構造です。

1. `Game_Action.prototype.makeTargets()`
   - 混乱状態かどうかを判定
   - 混乱中なら `confusionTarget()` を使う
   - 通常時なら `targetsForEveryone()` / `targetsForOpponents()` / `targetsForFriends()` を使う
   - 最後に `repeatTargets()` で複数回適用

2. `Game_Action.prototype.repeatTargets()`
   - `numRepeats()` の回数だけ対象を複製

3. `Game_Action.prototype.targetsForFriends()`
   - スコープに応じて `subject`, `targetsForDead`, `targetsForAlive`, `targetsForDeadAndAlive` を選ぶ

4. `Game_Action.prototype.targetsForOpponents()`
   - ランダムスコープなら `randomTargets()`
   - それ以外は `targetsForAlive()`

5. `Game_Action.prototype.targetsForEveryone()`
   - 生存している敵・味方をまとめて返す

## 2. 現在の実装済み対応

### 実装済みの関数

- [src/rmmzFunctional/action/target/makeTargets.ts](src/rmmzFunctional/action/target/makeTargets.ts)
  - `actionMakeTargets`
  - `confusionTargets`
  - `confSS`
  - `normalTarget`
- [src/rmmzFunctional/action/target/targetFor.ts](src/rmmzFunctional/action/target/targetFor.ts)
  - `actionTargetsForOpponents`
  - `actionTargetsForFriends`
  - `actionTargetsForDeadAndAlive`
  - `actionTargetsForAlive`
  - `actionTargetsForDead`
- [src/rmmzFunctional/action/target/support.ts](src/rmmzFunctional/action/target/support.ts)
  - `battlerIsAlive`
  - `battlerIsDead`
  - `unitTgrSum`
  - `repeatTargets`
  - `smoothTarget`
  - `smoothAliveTarget`
  - `smoothDeadTarget`
- [src/rmmzFunctional/action/target/randomSelect.ts](src/rmmzFunctional/action/target/randomSelect.ts)
  - `battlersDecideRandomTarget`
  - `battlresRandomTarget`
  - `battlersRandomDeadTarget`
  - `battlersRandomAliveTarget`
  - `actionDecideRandomTarget`
- [src/rmmzFunctional/action/target/target.ts](src/rmmzFunctional/action/target/target.ts)
  - `repeatTargets`
  - `actionTargetForDead`
  - `actionTargetForDeadAndAlive`
  - `actionTargetForAlive`
  - `actionTargetsForOpponents`

### 実装済みの型・インターフェイス

- [src/rmmzFunctional/action/target/types.ts](src/rmmzFunctional/action/target/types.ts)
  - `Provider_Battlers`
    - `opponentsUnit(): ReadonlyArray<Rmmz_Battler>`
    - `friendsUnit(): ReadonlyArray<Rmmz_Battler>`

## 3. これらが原型としてなっている元のメンバ関数

以下は、元実装の `Game_Action` / `Game_Unit` 側で対応するメンバ関数です。

### Game_Action 側

- `makeTargets()`
  - 入口処理
- `repeatTargets(targets)`
  - 対象を繰り返し複製
- `confusionTarget()`
  - 混乱時の対象選択
- `targetsForEveryone()`
  - 全体対象
- `targetsForOpponents()`
  - 敵側対象
- `targetsForFriends()`
  - 味方側対象
- `randomTargets(unit)`
  - ランダムな対象選択
- `targetsForDead(unit)`
  - 死者対象
- `targetsForAlive(unit)`
  - 生存者対象
- `targetsForDeadAndAlive(unit)`
  - 生死混在対象
- `decideRandomTarget()`
  - 乱択ターゲット決定
- `numRepeats()`
  - 繰り返し回数
- `isForOpponent()` / `isForFriend()` / `isForEveryone()` / `isForUser()` / `isForDeadFriend()` / `isForAliveFriend()` / `isForOne()` / `isForRandom()`
  - スコープ判定

### Game_Unit 側

- `randomTarget()`
- `randomDeadTarget()`
- `smoothTarget(index)`
- `smoothDeadTarget(index)`
- `aliveMembers()`
- `deadMembers()`
- `members()`
- `tgrSum()`

## 4. 現在の関数対応表

| 元実装の関数 | 近い実装 | 状態 |
| --- | --- | --- |
| `makeTargets()` | `actionMakeTargets()` | 実装済み |
| `confusionTarget()` | `confusionTargets()` / `confSS()` | 実装済み、ただしレベル2分岐はTODO |
| `targetsForEveryone()` | `normalTarget()` 内の全体スコープ分岐 | 実装済み |
| `targetsForOpponents()` | `actionTargetsForOpponents()` | 実装済み |
| `targetsForFriends()` | `actionTargetsForFriends()` | 実装済み |
| `targetsForDead()` | `actionTargetsForDead()` | 実装済み |
| `targetsForAlive()` | `actionTargetsForAlive()` | 実装済み |
| `targetsForDeadAndAlive()` | `actionTargetsForDeadAndAlive()` | 実装済み |
| `randomTargets()` | `randomTargets()` (内部実装) | 実装済み |
| `repeatTargets()` | `repeatTargets()` | 実装済み |
| `decideRandomTarget()` | `battlersDecideRandomTarget()` / `actionDecideRandomTarget()` | 実装済み |
| `randomTarget()` | `battlresRandomTarget()` | 実装済み |
| `smoothTarget(index)` | `smoothTarget()` | 実装済み |
| `smoothDeadTarget(index)` | `smoothDeadTarget()` | 実装済み |

## 5. 現状の評価

### 進んでいる点

- 対象選択の入口から、敵味方・全体・混乱時の分岐まで骨格として実装済み
- 友軍/敵軍ごとの対象生成関数が分割され、読みやすい構造になっている
- 乱択選択とスムーズ選択の補助関数も追加済み

### 未解決の点

- 混乱レベル 2 の挙動は未実装
- `numRepeats()` に相当する処理が、現状では `item.repeats` ベースの簡略実装に寄っている
- 元の `Game_Action` / `Game_Unit` の細かな挙動差分との照合はまだ必要

## 6. 次に確認したい点

- `confSS()` の混乱レベル 2 分岐
- `smoothTarget()` の探索挙動が、元実装と同じか
- `randomTargets()` の乱択の扱いが、元の `Game_Action.prototype.randomTargets()` と一致するか
- `repeatTargets()` が `numRepeats()` を正しく反映しているか
