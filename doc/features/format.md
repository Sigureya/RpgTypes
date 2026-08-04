# formatTraits 周辺のモジュール分析

## 1. 全体像

formatTraits 周辺は、RPG Maker MV/MZ の「表示用フォーマット情報」を組み立てるための層です。
主な役割は、trait や item effect の表示ラベル・パターン・関連データソースを、共通の `FormatCompiled` 形式にまとめることです。

## 2. 主要な責務

### 2.1 参照元データの収集

`buildReferenceItemSources()` は、表示に必要な「参照元データ」をまとめて作成します。

- trait 関連の参照元
  - `defineTraitItems()`
- ゲームデータの参照元
  - `defineGameDataSources()`
- システムデータの参照元
  - `defineSystemItems()`

これらは、最終的に `NamedItemSource[]` として返され、表示時にどのデータ集合を参照すべきかを伝えます。

### 2.2 trait 表示データのコンパイル

`compileTraitDisplayData()` は、trait のラベル定義と参照データを結びつけて、表示用の `Map<number, FormatCompiled>` を生成します。

- 入力
  - `NamedItemSource[]`
  - `TraitLabelSet`
- 処理
  - `resolveTraitLabels()` で trait の定義を作る
  - `mergeItemsSource()` で、定義とデータソースを結合する
- 出力
  - trait コードごとの表示情報

### 2.3 item effect 表示データのコンパイル

`compileItemEffectDisplayData()` は、item effect の表示定義と参照データを結びつけます。

- 入力
  - `NamedItemSource[]`
  - `ItemEffectLabelSet`
  - 追加の `EffectDefinitionResolved[]`（任意）
- 処理
  - `resolveItemEffectLabels()` で effect 定義を作る
  - `mergeItemsSource()` で結合する
- 出力
  - effect コードごとの表示情報

## 3. 主要モジュールごとの役割

### 3.1 formatTraits.ts

このファイルが、format 層の入口です。

- `buildReferenceItemSources()`
  - trait / game data / system data の参照元ソースを作る
- `compileTraitDisplayData()`
  - trait の表示データをまとめる
- `compileItemEffectDisplayData()`
  - item effect の表示データをまとめる

### 3.2 trait 系の定義

trait 周辺では、次のモジュールが役割を分けています。

- [src/rmmz/rpg/data/main/traitContainers/trait/core/namedItems.ts](src/rmmz/rpg/data/main/traitContainers/trait/core/namedItems.ts)
  - `defineTraitItems()`
  - trait の各カテゴリを `NamedItemSource` としてまとめる
- [src/rmmz/rpg/data/resolveTraitLabels.ts](src/rmmz/rpg/data/resolveTraitLabels.ts)
  - `resolveTraitLabels()`
  - trait ラベルの定義を `TraitFormat` へ変換する
  - 各 trait 種別に応じてデータソースを割り当てる

### 3.3 game data 系の定義

- [src/rmmz/rpg/data/gameData.ts](src/rmmz/rpg/data/gameData.ts)
  - `defineGameDataSources()`
  - skills / actors / states / armors / classes / enemies / items / weapons / common events をそれぞれ `NamedItemSource` に変換する

### 3.4 system data 系の定義

- [src/rmmz/system/core/rpgDataTypes/namedItems.ts](src/rmmz/system/core/rpgDataTypes/namedItems.ts)
  - `defineSystemItems()`
  - elements / equip types / weapon types / skill types / armor types / variables / switches をまとめる

### 3.5 item effect 系の定義

- [src/rmmz/rpg/data/main/usableItems/core/itemEffect/define.ts](src/rmmz/rpg/data/main/usableItems/core/itemEffect/define.ts)
  - `resolveItemEffectLabels()`
  - item effect のラベル定義を `EffectDefinitionResolved` に変換する
  - state / skill / regular param など、必要なデータソースを振り分ける

## 4. データの流れ

1. ラベル定義を用意する
   - trait label set
   - item effect label set
2. 参照元データを作る
   - trait / game data / system data / item effect
3. `resolve*Labels()` で表示定義を生成する
4. `mergeItemsSource()` で、定義と実データを結合する
5. `Map<number, FormatCompiled>` として返す

## 5. ここで扱う主要な型

- `NamedItemSource`
  - 参照元データの情報を保持する
- `FormatCompiled`
  - 表示用にコンパイルされたデータ
- `TraitFormat`
  - trait の表示定義
- `EffectDefinitionResolved`
  - item effect の表示定義

## 6. 役割の要点

- 「データを集める」層
  - `define*()` 系
- 「表示定義を作る」層
  - `resolve*Labels()` 系
- 「それらを結びつける」層
  - `mergeItemsSource()` と `compile*DisplayData()`

## 7. まとめ

formatTraits 周辺は、RMMZ の trait / item effect の表示情報を、
「ラベル」「パターン」「参照データソース」をまとめて、
UI で使いやすい形に変換するための中間層です。

この構成の特徴は、データの収集・表示定義・実データ結合を責務ごとに分けている点です。
