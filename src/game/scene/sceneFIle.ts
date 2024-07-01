import { Rectangle } from "../window";
import { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_File extends Scene_MenuBase {
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
