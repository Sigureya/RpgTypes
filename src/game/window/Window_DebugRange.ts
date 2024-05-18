import { Rectangle } from "src/types/rectangle";
import { Window_Selectable } from "./Window_Selectable";
import { Window_NameEdit } from "./Window_NameEdit";

//-----------------------------------------------------------------------------
// Window_DebugRange
//
// The window for selecting a block of switches/variables on the debug screen.
export declare class Window_DebugRange extends Window_Selectable {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  update(): void;

  mode(index: number): void;

  topId(index: number): void;

  isSwitchMode(index: number): boolean;

  drawItem(index: number): void;

  isCancelTriggered(): boolean;

  processCancel(): void;

  setEditWindow(editWindow: Window_NameEdit): void;
}
