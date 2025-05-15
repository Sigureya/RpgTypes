import type { Command2_ScriptBody, Command2_ScriptHeader } from "./types";
import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@RpgTypes/schema";

export const makeCommandScriptHeader = (
  script: string,
  indent: number = 0
): Command2_ScriptHeader => {
  return {
    code: SCRIPT_EVAL,
    indent,
    parameters: [script],
  };
};

export const makeCommandScriptBody = (
  script: string,
  indent: number = 0
): Command2_ScriptBody => {
  return {
    code: SCRIPT_EVAL_BODY,
    indent,
    parameters: [script],
  };
};
export const makeCommandScriptArray = (
  lines: ReadonlyArray<string>,
  indent: number = 0
) => {
  return lines.map((line, index) =>
    index === 0
      ? makeCommandScriptHeader(line, indent)
      : makeCommandScriptBody(line, indent)
  ) as [Command2_ScriptHeader, ...Command2_ScriptBody[]];
};
