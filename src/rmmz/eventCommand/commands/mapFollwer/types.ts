import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike } from "../../frame";

export interface Command_ChangePlayerFollowers extends EventCommandLike<216> {
  parameters: ParamArray_ChangePlayerFollowers;
}

export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
