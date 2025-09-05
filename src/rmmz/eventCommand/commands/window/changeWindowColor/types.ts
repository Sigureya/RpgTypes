import type { ColorRGBA } from "@RpgTypes/libs";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeWindowColor extends EventCommandLike<138> {
  parameters: [color: ColorRGBA];
}
