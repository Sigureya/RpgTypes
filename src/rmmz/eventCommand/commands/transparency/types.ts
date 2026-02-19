import type {
  EventCommandLike,
  CHANGE_TRANSPARENCY,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/utils";

export interface Command_ChangeTransparency extends EventCommandLike<
  typeof CHANGE_TRANSPARENCY
> {
  parameters: ParamArray_ChangeTransparency;
}

export type ParamArray_ChangeTransparency = [value: ValueOf<Toggle>];
