import type { Rectangle } from "./rectangle";
import type { Game_Actor } from "../object";
import type { Window_StatusBase } from "./Window_StatusBase";

//-----------------------------------------------------------------------------
// Window_NameEdit
//
// The window for editing an actor's name on the name input screen.
export declare class Window_NameEdit extends Window_StatusBase {
  setup(actor: Game_Actor, maxLength: number): void;

  restoreDefault(): void;

  add(ch: string): void;

  back(): void;

  faceWidth(): number;

  charWidth(): number;

  left(): void;

  itemRect(index: number): Rectangle;

  underlineColor(): void;

  drawUnderline(index: number): void;

  drawChar(index: number): void;

  refresh(): void;
}
