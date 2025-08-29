import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";

export interface Command_ChangeTransparency extends EventCommandLike2<211> {
  parameters: ParamArray_ChangeTransparency;
}

export type ParamArray_ChangeTransparency = [value: ValueOf<Toggle>];
