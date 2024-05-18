import { Rectangle } from "src/types/rectangle";
import { Window_Selectable } from "./Window_Selectable";
import { Game_Enemy } from "../object/battler";

//-----------------------------------------------------------------------------
// Window_BattleEnemy
//
// The window for selecting a target enemy on the battle screen.

export declare class Window_BattleEnemy extends Window_Selectable {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  maxItems(): number;

  enemy(): Game_Enemy;

  enemyindex(): number;

  drawItem(index: number): void;

  show(): void;

  hide(): void;

  refresh(): void;

  select(index: number): void;

  processTouch(): void;
}
