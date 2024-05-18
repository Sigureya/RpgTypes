import { Window_ItemList } from "./Window_ItemList";
import { PricedItem } from "./types/pricedItem";

//-----------------------------------------------------------------------------
// Window_ShopSell
//
// The window for selecting an item to sell on the shop screen.
export declare class Window_ShopSell extends Window_ItemList {
  isEnabled(item: PricedItem | null): boolean;
}
