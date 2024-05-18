import { Rectangle } from "src/types/rectangle";
import { Data_UsableItem } from "../data/item/usableItem";
import { Window_MenuStatus } from "./Window_MenuStatus";

//-----------------------------------------------------------------------------
// Window_MenuActor
//
// The window for selecting a target actor on the item and skill screens.

export declare class Window_MenuActor extends Window_MenuStatus {
  initialize(rect: Rectangle): void;

  processOk(): void;

  selectLast(): void;

  selectForItem(item: Data_UsableItem): void;
}
