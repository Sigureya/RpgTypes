import { CONTROL_SWITCHES } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ControlSwitches,
  ParamArray_ControlSwitches,
  Paramobject_ControlSwitches,
} from "./types";

export const fromArrayControlSwitches = (
  param: ParamArray_ControlSwitches,
): Paramobject_ControlSwitches => {
  return {
    min: param[0],
    max: param[1],
    value: param[2],
  };
};

export const toArrayControlSwitches = (
  object: Paramobject_ControlSwitches,
): ParamArray_ControlSwitches => {
  return [object.min, object.max, object.value];
};

export const makeCommandControlSwitches = (
  param: Paramobject_ControlSwitches,
  indent = 0,
): Command_ControlSwitches => ({
  code: CONTROL_SWITCHES,
  indent,
  parameters: toArrayControlSwitches(param),
});
