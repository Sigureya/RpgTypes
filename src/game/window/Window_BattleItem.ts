import { Rectangle } from "src/types/rectangle";
import { Data_UsableItem } from "../data/item/usableItem";
import { Window_ItemList } from "./Window_ItemList";

//-----------------------------------------------------------------------------
// Window_BattleItem
//
// The window for selecting an item to use on the battle screen.
export declare class Window_BattleItem extends Window_ItemList {
  initialize(rect: Rectangle): void;

  includes(item: Data_UsableItem): void;

  show(): void;

  hide(): void;
}
