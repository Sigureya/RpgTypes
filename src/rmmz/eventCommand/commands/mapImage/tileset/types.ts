import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_TILESET } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeTileset
  extends EventCommandLike2<typeof CHANGE_TILESET> {}
