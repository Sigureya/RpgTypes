import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";

export interface Command_ChangePlayerFollowers extends EventCommandLike2<216> {
  parameters: [value: ValueOf<Toggle>];
}
