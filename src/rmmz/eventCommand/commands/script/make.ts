import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@RpgTypes/libs/eventCommand";
import type { Command_ScriptBody, Command_ScriptHeader } from "./types";

export const makeCommandScriptHeader = (
  script: string,
  indent: number = 0,
): Command_ScriptHeader => {
  return {
    code: SCRIPT_EVAL,
    indent,
    parameters: [script],
  };
};

export const makeCommandScriptBody = (
  script: string,
  indent: number = 0,
): Command_ScriptBody => {
  return {
    code: SCRIPT_EVAL_BODY,
    indent,
    parameters: [script],
  };
};
export const makeCommandScriptArray = (
  lines: ReadonlyArray<string>,
  indent: number = 0,
) => {
  return lines.map((line, index) =>
    index === 0
      ? makeCommandScriptHeader(line, indent)
      : makeCommandScriptBody(line, indent),
  ) as [Command_ScriptHeader, ...Command_ScriptBody[]];
};
