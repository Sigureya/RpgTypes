import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { OPEN_MENU_SCREEN } from "@RpgTypes/rmmz/rpg";

export interface Command_OpenMenu
  extends EventCommandLike<typeof OPEN_MENU_SCREEN> {
  parameters: ParamArray_OpenMenu;
}

export type ParamArray_OpenMenu = [];
