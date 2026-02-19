import type {
  EventCommandLike,
  CONTROL_SWITCHES,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/utils";

export interface Command_ControlSwitches extends EventCommandLike<
  typeof CONTROL_SWITCHES
> {
  parameters: ParamArray_ControlSwitches;
}

export type ParamArray_ControlSwitches = [
  min: number,
  max: number,
  value: ValueOf<Toggle>,
];

export interface Paramobject_ControlSwitches {
  min: number;
  max: number;
  value: ValueOf<Toggle>;
}
