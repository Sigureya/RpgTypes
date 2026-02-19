import type {
  EventCommandLike,
  EXIT_EVENT_PROCESSING,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ExitEventProcessing extends EventCommandLike<
  typeof EXIT_EVENT_PROCESSING
> {
  parameters: [];
}
