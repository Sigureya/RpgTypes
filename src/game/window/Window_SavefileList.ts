import type { Rectangle } from "./rectangle";
import type { SaveFileInfo } from "../../schema/";
import type { Window_Selectable } from "./Window_Selectable";

//-----------------------------------------------------------------------------
// Window_SavefileList
//
// The window for selecting a save file on the save and load screens.

export declare class Window_SavefileList extends Window_Selectable {
  setMode(mode: string, autosave: boolean): void;

  maxItems(): number;

  numVisibleRows(): boolean;

  itemHeight(): number;

  drawItem(index: number): void;

  indexToSavefileId(index: number): void;

  savefileIdToIndex(savefileId: number): void;

  isEnabled(savefileId: number): boolean;

  savefileId(): void;

  selectSavefile(savefileId: number): void;

  drawTitle(savefileId: number, x: number, y: number): void;

  drawContents(info: SaveFileInfo, rect: Rectangle): void;

  drawPartyCharacters(info: SaveFileInfo, x: number, y: number): void;

  drawPlaytime(info: SaveFileInfo, x: number, y: number, width: number): void;

  playOkSound(): void;
}
