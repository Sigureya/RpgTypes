import { compileAttributes2 } from "./paramAttributeBuild2";
import {
  KEYWORD_DEFAULT,
  KEYWORD_MAX,
  KEYWORD_MIN,
  KEYWORD_OFF,
  KEYWORD_ON,
  KEYWORD_TEXT,
} from "./parse/constants/keyword";
import type { StructParamPrimitive } from "./primitiveParams";
export interface PluginParamTemp {
  name: string;
  attr: Record<string, string>;
}
export interface PluginParam2 {
  name: string;
  attr: StructParamPrimitive;
}

export interface PluginCommand {
  command: string;
  text?: string;
  desc?: string;
  args: PluginParam2[];
}

export interface ParsedPlugin {
  meta: Record<string, string>;
  params: PluginParam2[];
  commands: PluginCommand[];
}

type ParseState = {
  params: PluginParamTemp[];
  commands: PluginCommand[];
  currentParam: PluginParamTemp | null;
  currentCommand: PluginCommand | null;
};

const withTexts = (command: { desc?: string; text?: string }) => {
  return {
    ...(typeof command.desc === "string" ? { desc: command.desc } : {}),
    ...(typeof command.text === "string" ? { text: command.text } : {}),
  };
};

const compileParam = (param: PluginParamTemp): PluginParam2 => ({
  name: param.name,
  attr: compileAttributes2(param.attr),
});

const flashCurrentItem = (state: ParseState): ParseState => {
  if (state.currentCommand) {
    const newArgs: PluginParam2[] = state.currentParam
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
      params: state.params.concat(state.currentParam),
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
  const params = state.currentParam
    ? [...state.params, state.currentParam]
    : state.params;
  return {
    ...state,
    params,
    currentParam: { name: value, attr: {} },
  };
};
const handleType = (state: ParseState, value: string): ParseState => {
  return addField(state, "kind", value);
};

const handleDefault = (state: ParseState, value: string): ParseState => {
  return addField(state, KEYWORD_DEFAULT, value);
};

const addText = <T extends Record<string, unknown> | PluginCommand>(
  obj: T,
  value: string
) => {
  if (KEYWORD_TEXT in obj) {
    // すでにtextが存在する場合は上書きしない
    return obj;
  }
  return {
    ...obj,
    [KEYWORD_TEXT]: value,
  };
};

const handleText = (state: ParseState, value: string): ParseState => {
  if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: addText(state.currentParam.attr, value),
      },
    };
  }
  if (state.currentCommand) {
    return {
      ...state,
      currentCommand: addText(state.currentCommand, value),
    };
  }
  return state;
};

const handleDesc = (state: ParseState, value: string): ParseState => {
  if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, desc: value },
      },
    };
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

const handleOn = (state: ParseState, value: string): ParseState => {
  return addField(state, KEYWORD_ON, value);
};

const handleOff = (state: ParseState, value: string): ParseState => {
  return addField(state, KEYWORD_OFF, value);
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

const handleMin = (state: ParseState, value: string): ParseState => {
  return addField(state, KEYWORD_MIN, value);
};

const handleMax = (state: ParseState, value: string): ParseState => {
  return addField(state, KEYWORD_MAX, value);
};

const handleDefaultCase = (state: ParseState): ParseState => state;

export const parsePlugin = (text: string): ParsedPlugin => {
  const lines = text.split(/\r?\n/);

  const state = lines.reduce<ParseState>(
    (acc, line) => {
      const trimmed = line.trim().replace(/^\*\s?/, "");
      if (!trimmed.startsWith("@")) {
        return acc;
      }
      const [tag, ...rest] = trimmed.slice(1).split(" ");
      const value = rest.join(" ").trim();

      switch (tag) {
        case "param":
          return handleParam(acc, value);
        case "type":
          return handleType(acc, value);
        case "default":
          return handleDefault(acc, value);
        case "text":
          return handleText(acc, value);
        case "desc":
          return handleDesc(acc, value);
        case "on":
          return handleOn(acc, value);
        case "off":
          return handleOff(acc, value);
        case "command":
          return handleCommand(acc, value);
        case "arg":
          return handleArg(acc, value);
        case "min":
          return handleMin(acc, value);
        case "max":
          return handleMax(acc, value);
        default:
          return handleDefaultCase(acc);
      }
    },
    {
      params: [],
      commands: [],
      currentParam: null,
      currentCommand: null,
      //      currentArg: null,
    }
  );

  const finalState = flashCurrentItem(state);
  return {
    params: finalState.params.map(compileParam),
    commands: finalState.commands,
    meta: {},
  };
};
