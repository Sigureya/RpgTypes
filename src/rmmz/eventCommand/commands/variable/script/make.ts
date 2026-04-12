import { SCRIPT_EVAL } from "@RpgTypes/libs/eventCommand";
import type { Command_VariableScript } from "./types";

export const makeCommandVariableFromScript = (
  expr: string,
  indent: number = 0,
): Command_VariableScript => {
  return {
    code: SCRIPT_EVAL,
    indent,
    parameters: [expr],
  };
};
