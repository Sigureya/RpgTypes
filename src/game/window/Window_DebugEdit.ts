import type { Rectangle } from "./rectangle";
import type { Window_Selectable } from "./Window_Selectable";

//-----------------------------------------------------------------------------
// Window_DebugEdit
//
// The window for displaying switches and variables on the debug screen.
export declare class Window_DebugEdit extends Window_Selectable {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  drawItem(index: number): void;

  itemName(dataId: number): string;

  itemStatus(dataId: number): void;

  setMode(mode: string): void;

  setTopId(id: number): void;

  currentId(): number;

  update(): void;

  updateSwitch(): void;

  updateVariable(): void;

  deltaForVariable(): number;
}
