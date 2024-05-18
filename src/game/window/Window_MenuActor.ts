import { Data_UsableItem } from "../../schema";
import { Window_MenuStatus } from "./Window_MenuStatus";

//-----------------------------------------------------------------------------
// Window_MenuActor
//
// The window for selecting a target actor on the item and skill screens.

export declare class Window_MenuActor extends Window_MenuStatus {
  processOk(): void;

  selectLast(): void;

  selectForItem(item: Data_UsableItem): void;
}
