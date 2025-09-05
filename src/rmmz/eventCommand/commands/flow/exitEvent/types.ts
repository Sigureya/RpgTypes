import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { EXIT_EVENT_PROCESSING } from "@RpgTypes/rmmz/rpg";

export interface Command_ExitEventProcessing
  extends EventCommandLike<typeof EXIT_EVENT_PROCESSING> {
  parameters: [];
}
