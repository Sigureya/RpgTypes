import { Rectangle } from "src/types/rectangle";
import { UsableItem } from "../data/item/usableItem";
import { Window_ItemList } from "./Window_ItemList";

//-----------------------------------------------------------------------------
// Window_BattleItem
//
// The window for selecting an item to use on the battle screen.
export declare class Window_BattleItem extends Window_ItemList {
  initialize(rect: Rectangle): void;

  includes(item: UsableItem): void;

  show(): void;

  hide(): void;
}
