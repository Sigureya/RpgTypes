import { Data_UsableItem } from "../../schema";
import { Game_Actor } from "../object";
import { Window_ItemList, Window_MenuActor } from "../window";
import { Rectangle } from "../window/rectangle";
import { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_ItemBase extends Scene_MenuBase {
  _actorWindow: Window_MenuActor;
  _itemWindow: Window_ItemList;
  initialize(): void;
  create(): void;
  createActorWindow(): void;
  actorWindowRect(): Rectangle;
  item(): Data_UsableItem;
  user(): Game_Actor | null;
  isCursorLeft(): boolean;
  showActorWindow(): void;
  hideActorWindow(): void;
  isActorWindowActive(): boolean;
  onActorOk(): void;
  onActorCancel(): void;
  determineItem(): void;
  useItem(): void;
  playSeForItem(): void;
  activateItemWindow(): void;
  itemTargetActors(): Game_Actor[];
  canUse(): boolean;
  isItemEffectsValid(): boolean;
  applyItem(): void;
  checkCommonEvent(): void;
}
