import type { Rectangle } from "@RpgTypes/libs";
import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_Scene_ItemBase<Actor> {
  initialize(): void;
  create(): void;
  createActorWindow(): void;
  actorWindowRect(): Rectangle;
  item(): Data_UsableItem;
  user(): Actor | null;
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
  itemTargetActors(): Actor[];
  canUse(): boolean;
  isItemEffectsValid(): boolean;
  applyItem(): void;
  checkCommonEvent(): void;
}
