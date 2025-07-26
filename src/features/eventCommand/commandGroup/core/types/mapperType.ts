import type { EventCommand } from "@sigureya/rpgtypes";
import type {
  EventCommandGroup_Message,
  EventCommandGroup_ScrollingText,
  EventCommandGroup_Comment,
  EventCommandGroup_Script,
} from "./groopTypes";

export interface GroopMapper<T> {
  showMessage(
    groop: EventCommandGroup_Message,
    index: number,
    array: ReadonlyArray<EventCommand>
  ): T;
  showScrollingText(
    groop: EventCommandGroup_ScrollingText,
    index: number,
    array: ReadonlyArray<EventCommand>
  ): T;
  comment(
    groop: EventCommandGroup_Comment,
    index: number,
    array: ReadonlyArray<EventCommand>
  ): T;
  script(
    groop: EventCommandGroup_Script,
    index: number,
    array: ReadonlyArray<EventCommand>
  ): T;
}
