import type { EventCommand2 } from "@RpgTypes/rmmz";
import type {
  EventCommandGroup_Message,
  EventCommandGroup_ScrollingText,
  EventCommandGroup_Comment,
  EventCommandGroup_Script,
} from "./groupTypes";

export interface GroopMapper<T> {
  showMessage(
    groop: EventCommandGroup_Message,
    index: number,
    array: ReadonlyArray<EventCommand2>
  ): T;
  showScrollingText(
    groop: EventCommandGroup_ScrollingText,
    index: number,
    array: ReadonlyArray<EventCommand2>
  ): T;
  comment(
    groop: EventCommandGroup_Comment,
    index: number,
    array: ReadonlyArray<EventCommand2>
  ): T;
  script(
    groop: EventCommandGroup_Script,
    index: number,
    array: ReadonlyArray<EventCommand2>
  ): T;
}
