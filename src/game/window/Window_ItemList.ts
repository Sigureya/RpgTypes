import { Rectangle } from "src/types/rectangle";
import { Data_BaseItem } from "../data/item/baseItem";
import { Window_Selectable } from "./Window_Selectable";
import { Selectable } from "./src";

//-----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.
export declare class Window_ItemList
  extends Window_Selectable
  implements Selectable<Data_BaseItem>
{
  initialize(rect: Rectangle): void;

  setCategory(category: string): void;

  maxCols(): number;

  colSpacing(): number;

  maxItems(): number;

  item(): Data_BaseItem;

  itemAt(index: number): Data_BaseItem;

  isCurrentItemEnabled(): boolean;

  includes(item: Data_BaseItem): void;

  needsNumber(): void;

  isEnabled(item: Data_BaseItem): boolean;

  makeItemList(): boolean;

  selectLast(): void;

  drawItem(index: number): void;

  numberWidth(): number;

  drawItemNumber(
    item: Data_BaseItem,
    x: number,
    y: number,
    width: number
  ): void;

  updateHelp(): void;

  refresh(): void;
}