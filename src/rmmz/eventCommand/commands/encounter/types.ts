import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";

export interface Command_ChangeEncounter extends EventCommandLike2<136> {
  parameters: [value: ValueOf<Toggle>];
}
