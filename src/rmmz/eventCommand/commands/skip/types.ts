import type { EventCommandLike, SKIP } from "@RpgTypes/libs/eventCommand";

export interface Command_Skip extends EventCommandLike<typeof SKIP> {
  parameters: [];
}
