import { EventCommandLike, ValueOf, Toggle } from "@RpgTypes/schema";

export interface Command_ControlSwitches extends EventCommandLike<121> {
  parameters: ParamArray_ControlSwitches;
}

export type ParamArray_ControlSwitches = [min: number, max: number, value: ValueOf<Toggle>]

export interface Paramobject_ControlSwitches {min: number, max: number, value: ValueOf<Toggle>}
