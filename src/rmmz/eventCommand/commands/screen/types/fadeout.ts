import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { FADEOUT_SCREEN } from "@RpgTypes/rmmz/rpg";

export interface Command_FadeOutScreen extends EventCommandLike<
  typeof FADEOUT_SCREEN
> {
  parameters: [];
}
