import type { Window_Message } from "./Window_Message";
import type { Window_Command } from "./Window_Command";

//-----------------------------------------------------------------------------
// Window_ChoiceList
//
// The window used for the event command [Show Choices].
export declare class Window_ChoiceList extends Window_Command {
  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): void;

  start(): void;

  update(): void;

  updateCancelButton(): void;

  selectDefault(): void;

  updatePlacement(): void;

  updateBackground(): void;

  placeCancelButton(): void;

  windowX(): number;

  windowY(): number;

  windowWidth(): number;

  windowHeight(): number;

  numVisibleRows(): boolean;

  maxLines(): void;

  maxChoiceWidth(): number;

  makeCommandList(): void;

  drawItem(index: number): void;

  isCancelEnabled(): boolean;

  needsCancelButton(): void;

  callOkHandler(): void;

  callCancelHandler(): void;
}
