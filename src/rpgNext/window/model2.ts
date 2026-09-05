// Window_Selectable の 42 派生クラスを調査し、オーバーライド頻度の高い関数だけを
// 抽象モデルとして抜き出したもの。描画・入力・スクロールは持たず、
// 「何を並べ、どれが選べ、どう見えるか」だけをデータとして表現する。
//
// 頻度の内訳(派生 42 クラス中):
//   initialize 42 / drawItem 18 / maxItems 15 / refresh 13 / maxCols 11 /
//   update 11 / processOk 8 / isCurrentItemEnabled 6 / colSpacing 5 /
//   itemHeight 5 / updateHelp 5
// 派生側で新たに生えた関数:
//   makeCommandList 12 / selectLast 9 / setActor 9 / isEnabled 8 /
//   includes 5 / item・itemAt 4 / makeItemList 3

/**
 * 一覧の見た目(drawItem 18 / colSpacing 5 / itemHeight 5 相当)。
 * 実際の描画命令ではなく、描画に必要な値だけを返す。
 */
export interface ListItemView {
  name: string;
  iconIndex?: number;
  /** 所持数など、右寄せで添える数値。Window_ItemList の drawItemNumber 相当 */
  count?: number;
  /** 選択不可の項目は半透明にする。changePaintOpacity 相当 */
  enabled: boolean;
  /** ヘルプウィンドウへ流す説明文。updateHelp 相当 */
  helpText: string;
}

/**
 * 一覧のレイアウト(maxCols 11 / colSpacing 5 / itemHeight 5 相当)。
 * 省略時は Window_Selectable の既定値。
 */
export interface ListLayout {
  maxCols?: number;
  colSpacing?: number;
  /** 行の高さを itemHeight で拡張しているもの(MenuStatus 等)は行数で指定する */
  itemRows?: number;
}

/**
 * データ一覧型ウィンドウの抽象モデル。
 * Window_ItemList / Window_SkillList / Window_ShopBuy / Window_EquipItem /
 * Window_EventItem / Window_ShopSell / Window_BattleItem / Window_BattleSkill /
 * Window_SavefileList などが該当する。
 *
 * T   : 一覧に並ぶ 1 件のデータ
 * Ctx : 一覧を組み立てるのに必要な外部状態($gameParty, actor, category など)
 */
export interface ListWindowModel<T, Ctx> {
  /** makeItemList + includes。並び順込みで確定した配列を返す */
  makeItemList(ctx: Ctx): readonly T[];
  /** isEnabled / isCurrentItemEnabled。決定キーを受け付けるか */
  isEnabled(item: T, ctx: Ctx): boolean;
  /** drawItem + updateHelp。1 件を表示用の値へ落とす */
  itemView(item: T, ctx: Ctx): ListItemView;
  /** selectLast。復帰時に選ばせたい要素の index(無ければ 0) */
  lastIndex?(items: readonly T[], ctx: Ctx): number;
  layout?: ListLayout;
}

/** Window_Command が _list に積むコマンド 1 件 */
export interface WindowCommand<Ext = null> {
  name: string;
  symbol: string;
  enabled: boolean;
  ext: Ext;
}

/**
 * コマンド型ウィンドウの抽象モデル(makeCommandList 12 件)。
 * Window_MenuCommand / Window_ItemCategory / Window_SkillType /
 * Window_EquipCommand / Window_Options / Window_ShopCommand /
 * Window_ChoiceList / Window_PartyCommand / Window_ActorCommand /
 * Window_TitleCommand / Window_GameEnd が該当する。
 *
 * needsCommand / isEnabled による出し分けは makeCommandList の中で完結させ、
 * enabled フラグまで含めて確定した配列を返す。
 */
export interface CommandWindowModel<Ctx, Ext = null> {
  makeCommandList(ctx: Ctx): readonly WindowCommand<Ext>[];
  /** itemTextAlign。既定は "center"、Window_MenuCommand 等は "left" */
  textAlign?: "left" | "center" | "right";
  /** maxCols。Window_HorzCommand 系は 4 など */
  maxCols?: number;
  /** selectLast / selectSymbol。復帰時に選ばせたい symbol */
  lastSymbol?(ctx: Ctx): string | null;
}

/**
 * コマンド型はコマンドを T としたリスト型の特殊形なので、
 * 同じ描画・選択処理へ載せ替えられる。
 */
export const commandAsList = <Ctx, Ext>(
  model: CommandWindowModel<Ctx, Ext>,
): ListWindowModel<WindowCommand<Ext>, Ctx> => ({
  makeItemList: (ctx) => model.makeCommandList(ctx),
  isEnabled: (command) => command.enabled,
  itemView: (command) => ({
    name: command.name,
    enabled: command.enabled,
    helpText: "",
  }),
  lastIndex: (items, ctx) => {
    const symbol = model.lastSymbol?.(ctx) ?? null;
    const index = items.findIndex((item) => item.symbol === symbol);
    return index >= 0 ? index : 0;
  },
  layout: { maxCols: model.maxCols },
});

/**
 * refresh の結果。モデルと Ctx から一度に確定させる。
 * Window 側はこれを受け取って描画するだけでよい。
 */
export interface ListWindowState<T> {
  items: readonly T[];
  views: readonly ListItemView[];
  index: number;
  layout: ListLayout;
}

export const refreshListWindow = <T, Ctx>(
  model: ListWindowModel<T, Ctx>,
  ctx: Ctx,
): ListWindowState<T> => {
  const items = model.makeItemList(ctx);
  return {
    items,
    views: items.map((item) => model.itemView(item, ctx)),
    index: model.lastIndex?.(items, ctx) ?? 0,
    layout: model.layout ?? {},
  };
};
