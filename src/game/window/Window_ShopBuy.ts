import { Rectangle } from "src/types/rectangle";
import { ShopGoods } from "./types/goods";
import { Data_BaseItem } from "../data/item/baseItem";
import { Window_Status } from "./Window_Status";
import { Window_Selectable } from "./Window_Selectable";
import { Selectable } from "./src";

//-----------------------------------------------------------------------------
// Window_ShopBuy
//
// The window for selecting an item to buy on the shop screen.
export declare class Window_ShopBuy
  extends Window_Selectable
  implements Selectable<Data_BaseItem>
{
  initialize(rect: Rectangle): void;

  setupGoods(shopGoods: ShopGoods[]): void;

  maxItems(): number;

  item(): Data_BaseItem;

  itemAt(index: number): Data_BaseItem;

  setMoney(money: number): void;

  isCurrentItemEnabled(): boolean;

  price(item: Data_BaseItem): number;

  isEnabled(item: Data_BaseItem): boolean;

  refresh(): void;

  makeItemList(): boolean;

  goodsToItem(goods: ShopGoods): Data_BaseItem;

  drawItem(index: number): void;

  priceWidth(): number;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;
}
