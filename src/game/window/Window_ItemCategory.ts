import { Rectangle } from "src/types/rectangle";
import { Window_HorzCommand } from "./Window_HorzCommand";
import { Window_ItemList } from "./Window_ItemList";

//-----------------------------------------------------------------------------
// Window_ItemCategory
//
// The window for selecting a category of items on the item and shop screens.
export declare class Window_ItemCategory extends Window_HorzCommand {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  update(): void;

  makeCommandList(): void;

  needsCommand(name: string): void;

  setItemWindow(itemWindow: Window_ItemList): void;

  needsSelection(): void;
}
