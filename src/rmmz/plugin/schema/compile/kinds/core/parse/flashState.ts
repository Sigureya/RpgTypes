import { finalizeOptions } from "./optionV2";
import type { ParseState, PluginCommandTokens } from "./types";

export const withTexts = (command: { desc?: string; text?: string }) => {
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
  if (state.currentParam && state.context.option) {
    const kind = state.currentParam.attr.kind;
    if (kind === "select" || kind === "combo") {
      return {
        ...state,
        currentParam: {
          ...state.currentParam,
          options: finalizeOptions(state.context.option).items,
        },
        context: {}, // option flush後はcontextリセット
      };
    }
  }
  return state;
};

const flushCurrentParam = (state: ParseState): ParseState => {
  if (state.currentParam) {
    return {
      ...state,
      params: [...state.params, state.currentParam],
      currentParam: null,
      currentContext: null,
      context: {},
    };
  }
  return state;
};

const flushCurrentCommand = (state: ParseState): ParseState => {
  if (state.currentCommand) {
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
      context: {},
    };
  }
  return state;
};
