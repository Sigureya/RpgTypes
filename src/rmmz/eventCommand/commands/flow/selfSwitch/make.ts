import type {
  Command_ControlSelfSwitch,
  ParamObject_SelfSwitch,
} from "./types";
import type { ParamArray_SelfSwitch } from "./types";

export function makeCommandSelfSwitch(
  params: ParamObject_SelfSwitch
): Command_ControlSelfSwitch {
  return {
    code: 123, // Assuming 123 is the code for self switch command
    indent: 0,
    parameters: [params.switchName, params.value],
  };
}

export function fromArraySelfSwitch(
  array: ParamArray_SelfSwitch
): ParamObject_SelfSwitch {
  return {
    switchName: array[0],
    value: array[1],
  };
}

export function toArraySelfSwitch(
  object: Partial<ParamObject_SelfSwitch>
): ParamArray_SelfSwitch {
  return [object.switchName ?? "", object.value ? 1 : 0];
}

export function isSelfSwitchCommand(
  command: Command_ControlSelfSwitch | unknown
): command is Command_ControlSelfSwitch {
  return (
    typeof command === "object" &&
    command !== null &&
    "code" in command &&
    (command as Command_ControlSelfSwitch).code === 123
  );
}
