import { Rectangle } from "src/types/rectangle";
import { Data_BaseItem } from "../../schema/data/item/baseItem";
import { Window_ItemList } from "./Window_ItemList";

//-----------------------------------------------------------------------------
// Window_ShopSell
//
// The window for selecting an item to sell on the shop screen.
export declare class Window_ShopSell extends Window_ItemList {
  initialize(rect: Rectangle): void;

  isEnabled(item: Data_BaseItem): boolean;
}
