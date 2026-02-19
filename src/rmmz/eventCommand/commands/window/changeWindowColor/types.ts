import type { ColorRGBA } from "@RpgTypes/libs";
import type {
  CHANGE_WINDOW_COLOR,
  EventCommandLike,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeWindowColor extends EventCommandLike<
  typeof CHANGE_WINDOW_COLOR
> {
  parameters: [color: ColorRGBA];
}
