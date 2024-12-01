import type { Rectangle } from "./rectangle";
import type { Window_Selectable } from "./Window_Selectable";
import type { Window_NameEdit } from "./Window_NameEdit";

export declare class Window_NameInput extends Window_Selectable {
  setEditWindow(editWindow: Window_NameEdit): void;

  table(): void;

  maxCols(): number;

  maxItems(): number;

  itemWidth(): number;

  groupSpacing(): void;

  character(): void;

  isPageChange(): boolean;

  isOk(): boolean;

  itemRect(index: number): Rectangle;

  drawItem(index: number): void;

  updateCursor(): void;

  isCursorMovable(): boolean;

  cursorDown(wrap: boolean): void;

  cursorUp(wrap: boolean): void;

  cursorRight(wrap: boolean): void;

  cursorLeft(wrap: boolean): void;

  cursorPagedown(): void;

  cursorPageup(): void;

  processCursorMove(): void;

  processHandling(): void;

  isCancelEnabled(): boolean;

  processCancel(): void;

  processJump(): void;

  processBack(): void;

  processOk(): void;

  onNameAdd(): void;

  onNameOk(): void;
}
