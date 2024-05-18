import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "src/game/object/Game_Actor";
import { Window_StatusBase } from "./Window_StatusBase";

//-----------------------------------------------------------------------------
// Window_StatusParams
//
// The window for displaying parameters on the status screen.
export declare class Window_StatusParams extends Window_StatusBase {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  maxItems(): number;

  itemHeight(): number;

  drawItem(index: number): void;

  drawItemBackground(index: number): void;
}
