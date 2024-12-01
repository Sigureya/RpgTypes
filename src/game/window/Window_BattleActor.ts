import type { Rectangle } from "./rectangle";
import type { Window_BattleStatus } from "./Window_BattleStatus";

//-----------------------------------------------------------------------------
// Window_BattleActor
//
// The window for selecting a target actor on the battle screen.
export declare class Window_BattleActor extends Window_BattleStatus {
  show(): void;

  hide(): void;

  select(index: number): void;

  processTouch(): void;
}
