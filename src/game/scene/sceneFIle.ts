import type { Window_SavefileList } from "../window/Window_SavefileList";
import type { Rectangle } from "../window";
import type { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_File extends Scene_MenuBase {
  _listWindow: Window_SavefileList;
  initialize(): void;
  create(): void;
  helpAreaHeight(): number;
  start(): void;
  savefileId(): number;
  isSavefileEnabled(savefileId: number): boolean;
  createHelpWindow(): void;
  createListWindow(): void;
  listWindowRect(): Rectangle;
  mode(): string;
  needsAutosave(): boolean;
  activateListWindow(): void;
  helpWindowText(): string;
  firstSavefileId(): number;
  onSavefileOk(): void;
}
