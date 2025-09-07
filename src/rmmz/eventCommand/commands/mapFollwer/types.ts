import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { CHANGE_PLAYER_FOLLOWERS } from "@RpgTypes/rmmz/rpg";
import type { Toggle } from "@RpgTypes/rmmz/utils";
import type { EventCommandLike } from "../../frame";

export interface Command_ChangePlayerFollowers
  extends EventCommandLike<typeof CHANGE_PLAYER_FOLLOWERS> {
  parameters: ParamArray_ChangePlayerFollowers;
}

export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
