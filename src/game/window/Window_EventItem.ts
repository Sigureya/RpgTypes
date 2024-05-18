import { Rectangle } from "src/types/rectangle";
import { Data_BaseItem } from "../data/item/baseItem";
import { Window_Message } from "./Window_Message";
import { Window_ItemList } from "./Window_ItemList";

//-----------------------------------------------------------------------------
// Window_EventItem
//
// The window used for the event command [Select Item].
export declare class Window_EventItem extends Window_ItemList {
  initialize(rect: Rectangle): void;

  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): void;

  start(): void;

  update(): void;

  updateCancelButton(): void;

  updatePlacement(): void;

  placeCancelButton(): void;

  includes(item: Data_BaseItem): void;

  needsNumber(): void;

  isEnabled(/*item*/): boolean;

  onOk(): void;

  onCancel(): void;
}
