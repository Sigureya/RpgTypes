import type { ParseState } from "./internalTypes";
import { finalizeOptions } from "./option";
import type { PluginCommandTokens } from "./types";

export interface DescAndText {
  desc?: string;
  text?: string;
}

export const withTexts = (command: DescAndText): DescAndText => {
  return {
    ...(typeof command.desc === "string" ? { desc: command.desc } : {}),
    ...(typeof command.text === "string" ? { text: command.text } : {}),
  };
};

export const flashCurrentItem = (state: ParseState): ParseState => {
  // 1. optionをflush
  const p = flushOptionsToParam(state);
  // 2. commandをflush
  const c = flushCurrentCommand(p);
  // 3. paramをflush
  return flushCurrentParam(c);
};

const flushOptionsToParam = (state: ParseState): ParseState => {
  if (state.currentParam && state.currentOption) {
    const kind = state.currentParam.attr.kind;
    if (kind === "select" || kind === "combo") {
      return {
        ...state,
        currentParam: {
          ...state.currentParam,
          options: finalizeOptions(state.currentOption).items,
        },
      };
    }
  }
  return state;
};

const flushCurrentParam = (state: ParseState): ParseState => {
  if (!state.currentParam) {
    return state;
  }
  return {
    ...state,
    params: [...state.params, state.currentParam],
    currentParam: null,
    currentContext: null,
  };
};

const flushCurrentCommand = (state: ParseState): ParseState => {
  if (!state.currentCommand) {
    return state;
  }

  const newArgs = state.currentParam
    ? [...state.currentCommand.args, state.currentParam]
    : state.currentCommand.args;
  const newCommand: PluginCommandTokens = {
    ...withTexts(state.currentCommand),
    command: state.currentCommand.command,
    args: newArgs,
  };
  return {
    ...state,
    commands: [...state.commands, newCommand],
    currentCommand: null,
    currentParam: null,
    currentContext: null,
    currentOption: null,
  };
};
