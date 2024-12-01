import type { Rectangle } from "./rectangle";
import type { Window_StatusBase } from "./Window_StatusBase";
import type { Game_Actor } from "../object/Game_Actor";

//-----------------------------------------------------------------------------
// Window_BattleStatus
//
// The window for displaying the status of party members on the battle screen.
export declare class Window_BattleStatus extends Window_StatusBase {
  extraHeight(): number;

  maxCols(): number;

  itemHeight(): number;

  maxItems(): number;

  rowSpacing(): number;

  updatePadding(): void;

  actor(index: number): Game_Actor;

  selectActor(actor: Game_Actor): void;

  update(): void;

  preparePartyrefresh(): void;

  performPartyrefresh(): void;

  drawItem(index: number): void;

  drawItemImage(index: number): void;

  drawItemStatus(index: number): void;

  faceRect(index: number): Rectangle;

  nameX(rect: Rectangle): number;

  nameY(rect: Rectangle): number;

  stateIconX(rect: Rectangle): number;

  stateIconY(rect: Rectangle): number;

  basicGaugesX(rect: Rectangle): number;

  basicGaugesY(rect: Rectangle): number;
}
