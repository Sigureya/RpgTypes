import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { EXIT_EVENT_PROCESSING } from "@RpgTypes/rmmz/rpg";

export interface Command_ExitEventProcessing
  extends EventCommandLike2<typeof EXIT_EVENT_PROCESSING> {
  parameters: [];
}
