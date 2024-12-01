import type { Game_Actor } from "../object";
import type { Window_StatusBase } from "./Window_StatusBase";

//-----------------------------------------------------------------------------
// Window_StatusParams
//
// The window for displaying parameters on the status screen.
export declare class Window_StatusParams extends Window_StatusBase {
  setActor(actor: Game_Actor): void;

  maxItems(): number;

  itemHeight(): number;

  drawItem(index: number): void;

  drawItemBackground(index: number): void;
}
