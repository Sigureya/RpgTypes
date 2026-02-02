import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { FADEIN_SCREEN, FADEOUT_SCREEN } from "@RpgTypes/rmmz/rpg";

export interface Command_FadeOutScreen extends EventCommandLike<
  typeof FADEOUT_SCREEN
> {
  parameters: [];
}

export interface Command_FadeInScreen extends EventCommandLike<
  typeof FADEIN_SCREEN,
  []
> {}
