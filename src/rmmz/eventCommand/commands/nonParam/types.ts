import type { GAME_OVER } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike } from "../../frame";

export interface Command_GatherFollowers extends EventCommandLike<217, []> {}

export interface Command_GameOver extends EventCommandLike<
  typeof GAME_OVER,
  []
> {}

export interface Command_ReturnToTitleScreen extends EventCommandLike<
  354,
  []
> {}
