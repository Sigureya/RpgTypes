import { compileAttributes } from "./attributes";
import {
  KEYWORD_TEXT,
  KEYWORD_DESC,
  KEYWORD_DEFAULT,
  KEYWORD_ON,
  KEYWORD_OFF,
  KEYWORD_MIN,
  KEYWORD_MAX,
  KEYWORD_PARAM,
  KEYWORD_COMMAND,
  KEYWORD_ARG,
  KEYWORD_TYPE,
} from "./parse/keyword/constants";
import type { KeywordEnum } from "./parse/keyword/types";
import type { StructParamPrimitive } from "./primitiveParams";

export interface PluginParamTokens {
  name: string;
  attr: { [key in KeywordEnum]?: string };
}
export interface PluginParam {
  name: string;
  attr: StructParamPrimitive;
}

export interface PluginCommand {
  command: string;
  text?: string;
  desc?: string;
  args: PluginParam[];
}

export interface ParsedPlugin {
  meta: Record<string, string>;
  params: PluginParam[];
  commands: PluginCommand[];
}

export interface ParseState {
  params: PluginParam[];
  commands: PluginCommand[];
  currentParam: PluginParamTokens | null;
  currentCommand: PluginCommand | null;
}

export const parsePlugin = (text: string) => {
  return parsePluginCore(text, KEYWORD_FUNC_TABLE);
};

export const parsePluginCore = (
  text: string,
  table: Record<string, (state: ParseState, value: string) => ParseState>
): ParsedPlugin => {
  const lines = text.split(/\r?\n/);

  const state = lines.reduce<ParseState>(
    (acc, line) => {
      const trimmed = line.trim().replace(/^\*\s?/, "");
      if (!trimmed.startsWith("@")) {
        return acc;
      }
      const [tag, ...rest] = trimmed.slice(1).split(" ");
      const value = rest.join(" ").trim();
      const fn = table[tag as keyof typeof table];

      if (fn) {
        return fn(acc, value);
      }
      return handleDefaultCase(acc);
    },
    {
      params: [],
      commands: [],
      currentParam: null,
      currentCommand: null,
    }
  );

  const finalState = flashCurrentItem(state);
  return {
    params: finalState.params,
    commands: finalState.commands,
    meta: {},
  };
};

const withTexts = (command: { desc?: string; text?: string }) => {
  return {
    ...(typeof command.desc === "string" ? { desc: command.desc } : {}),
    ...(typeof command.text === "string" ? { text: command.text } : {}),
  };
};

const compileParam = (param: PluginParamTokens): PluginParam => ({
  name: param.name,
  attr: compileAttributes(param.attr),
});

const flashCurrentItem = (state: ParseState): ParseState => {
  if (state.currentCommand) {
    const newArgs: PluginParam[] = state.currentParam
      ? state.currentCommand.args.concat(compileParam(state.currentParam))
      : state.currentCommand.args;
    const newCommand: PluginCommand = {
      ...withTexts(state.currentCommand),
      command: state.currentCommand.command,
      args: newArgs,
    };
    return {
      params: state.params,
      commands: state.commands.concat(newCommand),
      currentParam: null,
      currentCommand: null,
    };
  }
  if (state.currentParam) {
    return {
      commands: state.commands,
      params: state.params.concat(compileParam(state.currentParam)),
      currentParam: null,
      currentCommand: null,
    };
  }

  return state;
};

const handleParam = (oldstate: ParseState, value: string): ParseState => {
  const state = flashCurrentItem(oldstate);
  // すでに同名のparamが存在する場合は新しいparamを作らない
  if (state.params.some((p) => p.name === value)) {
    return state;
  }
  return {
    ...state,
    currentParam: { name: value, attr: {} },
  };
};

const handleText = (state: ParseState, value: string): ParseState => {
  if (state.currentParam) {
    return addField(state, KEYWORD_TEXT, value);
  }
  if (state.currentCommand) {
    if (!(KEYWORD_TEXT in state.currentCommand)) {
      return {
        ...state,
        currentCommand: {
          ...withTexts(state.currentCommand),
          command: state.currentCommand.command,
          args: state.currentCommand.args,
          [KEYWORD_TEXT]: value,
        },
      };
    }
  }
  return state;
};

const handleDesc = (state: ParseState, value: string): ParseState => {
  if (state.currentParam) {
    return addField(state, KEYWORD_DESC, value);
  }
  if (state.currentCommand) {
    return {
      ...state,
      currentCommand: {
        ...state.currentCommand,
        desc: value,
      },
    };
  }
  return state;
};

const handleCommand = (oldstate: ParseState, value: string): ParseState => {
  const state = flashCurrentItem(oldstate);
  const commands = state.currentCommand ? [...state.commands] : state.commands;
  return {
    params: state.params,
    commands,
    currentCommand: { command: value, args: [] },
    currentParam: null,
  };
};

const handleArg = (state: ParseState, value: string): ParseState => {
  if (!state.currentCommand) {
    return state;
  }
  if (state.currentParam) {
    const argAddedCommand: PluginCommand = {
      ...withTexts(state.currentCommand),
      command: state.currentCommand.command,
      args: state.currentCommand.args.concat(compileParam(state.currentParam)),
    };
    return {
      ...state,
      commands: state.commands,
      currentCommand: argAddedCommand,
      currentParam: {
        name: value,
        attr: {},
      },
    };
  }
  return {
    ...state,
    currentParam: {
      name: value,
      attr: {},
    },
  };
};

const addField = (
  state: ParseState,
  key: string,
  value: string
): ParseState => {
  if (state.currentParam) {
    if (!(key in state.currentParam.attr)) {
      return {
        ...state,
        currentParam: {
          ...state.currentParam,
          attr: { ...state.currentParam.attr, [key]: value },
        },
      };
    }
  }
  return state;
};

const handleDefaultCase = (state: ParseState): ParseState => state;

const KEYWORD_FUNC_TABLE = {
  [KEYWORD_PARAM]: handleParam,
  [KEYWORD_TEXT]: handleText,
  [KEYWORD_DESC]: handleDesc,
  [KEYWORD_COMMAND]: handleCommand,
  [KEYWORD_ARG]: handleArg,
  [KEYWORD_TYPE]: (state, value) => addField(state, "kind", value),
  [KEYWORD_DEFAULT]: (state, value) => addField(state, KEYWORD_DEFAULT, value),
  [KEYWORD_ON]: (state, value) => addField(state, KEYWORD_ON, value),
  [KEYWORD_OFF]: (state, value) => addField(state, KEYWORD_OFF, value),
  [KEYWORD_MIN]: (state, value) => addField(state, KEYWORD_MIN, value),
  [KEYWORD_MAX]: (state, value) => addField(state, KEYWORD_MAX, value),
} as const satisfies {
  [K in KeywordEnum]?: (state: ParseState, value: string) => ParseState;
};
