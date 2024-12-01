import type { Rectangle } from "./rectangle";
import type { Data_Item, ShopGoods } from "../../schema";
import type { Window_Status } from "./Window_Status";
import type { Window_Selectable } from "./Window_Selectable";
import type { ISelectable } from "./types/ISelctable";

//-----------------------------------------------------------------------------
// Window_ShopBuy
//
// The window for selecting an item to buy on the shop screen.
export declare class Window_ShopBuy
  extends Window_Selectable
  implements ISelectable<Data_Item>
{
  initialize(rect: Rectangle): void;

  setupGoods(shopGoods: ShopGoods[]): void;

  maxItems(): number;

  item(): Data_Item;

  itemAt(index: number): Data_Item;

  setMoney(money: number): void;

  isCurrentItemEnabled(): boolean;

  price(item: Data_Item): number;

  isEnabled(item: Data_Item): boolean;

  refresh(): void;

  makeItemList(): boolean;

  goodsToItem(goods: ShopGoods): Data_Item;

  drawItem(index: number): void;

  priceWidth(): number;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;
}
