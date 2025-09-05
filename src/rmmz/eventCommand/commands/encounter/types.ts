import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike } from "../../frame";

export interface Command_ChangeEncounter extends EventCommandLike<136> {
  parameters: [value: ValueOf<Toggle>];
}
