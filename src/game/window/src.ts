//=============================================================================
// rmmz_windows.js v1.7.0
//=============================================================================

import { Rectangle } from "src/types/rectangle";
import { UsableItem } from "../data/item/usableItem";
import { Window_Command } from "./Window_Command";

export interface Selectable<T> {
  itemAt(index: number): T;
  item(): T;
}

//-----------------------------------------------------------------------------
// Window_BattleSkill
//
// The window for selecting a skill to use on the battle screen.
export declare class Window_BattleSkill {
  initialize(rect: Rectangle): void;

  show(): void;

  hide(): void;
}
//-----------------------------------------------------------------------------
// Window_BattleItem
//
// The window for selecting an item to use on the battle screen.
export declare class Window_BattleItem {
  initialize(rect: Rectangle): void;

  includes(item: UsableItem): void;

  show(): void;

  hide(): void;

  //-----------------------------------------------------------------------------
  // Window_TitleCommand
  //
  // The window for selecting New Game/Continue on the title screen.
}
export declare class Window_TitleCommand extends Window_Command {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  isContinueEnabled(): boolean;

  processOk(): void;

  selectLast(): void;
}
