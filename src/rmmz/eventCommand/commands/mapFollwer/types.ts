import type {
  EventCommandLike,
  CHANGE_PLAYER_FOLLOWERS,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/utils";

export interface Command_ChangePlayerFollowers extends EventCommandLike<
  typeof CHANGE_PLAYER_FOLLOWERS
> {
  parameters: ParamArray_ChangePlayerFollowers;
}

export type ParamArray_ChangePlayerFollowers = [value: ValueOf<Toggle>];
