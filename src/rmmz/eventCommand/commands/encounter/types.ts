import type {
  CHANGE_ENCOUNTER,
  EventCommandLike,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/utils";

export interface Command_ChangeEncounter extends EventCommandLike<
  typeof CHANGE_ENCOUNTER
> {
  parameters: [value: ValueOf<Toggle>];
}
