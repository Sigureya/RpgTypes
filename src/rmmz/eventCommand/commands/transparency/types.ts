import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { CHANGE_TRANSPARENCY } from "@RpgTypes/rmmz/rpg";
import type { Toggle } from "@RpgTypes/rmmz/utils";
import type { EventCommandLike } from "../../frame";

export interface Command_ChangeTransparency
  extends EventCommandLike<typeof CHANGE_TRANSPARENCY> {
  parameters: ParamArray_ChangeTransparency;
}

export type ParamArray_ChangeTransparency = [value: ValueOf<Toggle>];
