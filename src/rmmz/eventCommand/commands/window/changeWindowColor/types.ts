import type { ColorRGBA } from "@RpgTypes/libs";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeWindowColor extends EventCommandLike2<138> {
  parameters: [color: ColorRGBA];
}
