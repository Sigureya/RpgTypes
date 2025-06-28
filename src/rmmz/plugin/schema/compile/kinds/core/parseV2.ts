export interface PluginParam {
  name: string;
  attr: Record<string, any>;
}

export interface PluginCommandArg {
  name: string;
  attr: Record<string, any>;
}

export interface PluginCommand {
  command: string;
  text?: string;
  desc?: string;
  args: PluginCommandArg[];
}

export interface ParsedPlugin {
  meta: Record<string, string>;
  params: PluginParam[];
  commands: PluginCommand[];
}

type ParseState = {
  params: PluginParam[];
  commands: PluginCommand[];
  currentParam: PluginParam | null;
  currentCommand: PluginCommand | null;
  currentArg: PluginCommandArg | null;
};

const handleParam = (state: ParseState, value: string): ParseState => {
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
    currentArg: null,
  };
};
const handleType = (state: ParseState, value: string): ParseState => {
  if (state.currentArg) {
    return {
      ...state,
      currentArg: {
        ...state.currentArg,
        attr: { ...state.currentArg.attr, kind: value },
      },
      currentParam: state.currentParam,
    };
  } else if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, kind: value },
      },
    };
  }
  return state;
};

const handleDefault = (state: ParseState, value: string): ParseState => {
  const parsedDefault = safeParseJSON(value);
  if (state.currentArg) {
    return {
      ...state,
      currentArg: {
        ...state.currentArg,
        attr: { ...state.currentArg.attr, default: parsedDefault },
      },
      currentParam: state.currentParam,
    };
  } else if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, default: parsedDefault },
      },
    };
  }
  return state;
};

const handleText = (state: ParseState, value: string): ParseState => {
  if (state.currentArg) {
    return {
      ...state,
      currentArg: {
        ...state.currentArg,
        attr: { ...state.currentArg.attr, text: value },
      },
      currentParam: state.currentParam,
    };
  } else if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, text: value },
      },
    };
  } else if (state.currentCommand) {
    return {
      ...state,
      currentCommand: {
        ...state.currentCommand,
        text: value,
      },
    };
  }
  return state;
};

const handleDesc = (state: ParseState, value: string): ParseState => {
  if (state.currentArg) {
    return {
      ...state,
      currentArg: {
        ...state.currentArg,
        attr: { ...state.currentArg.attr, desc: value },
      },
      currentParam: state.currentParam,
    };
  } else if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, desc: value },
      },
    };
  } else if (state.currentCommand) {
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

const handleOn = (state: ParseState, value: string): ParseState => {
  if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, on: value },
      },
    };
  }
  return state;
};

const handleOff = (state: ParseState, value: string): ParseState => {
  if (state.currentParam) {
    if (!("off" in state.currentParam.attr)) {
      return {
        ...state,
        currentParam: {
          ...state.currentParam,
          attr: { ...state.currentParam.attr, off: value },
        },
      };
    }
  }
  return state;
};

const handleCommand = (state: ParseState, value: string): ParseState => {
  const commands = state.currentCommand
    ? [...state.commands, flushCommand(state.currentCommand, state.currentArg)]
    : state.commands;
  return {
    ...state,
    commands,
    currentCommand: { command: value, args: [] },
    currentArg: null,
    currentParam: null,
  };
};

const handleArg = (state: ParseState, value: string): ParseState => {
  const args = state.currentCommand
    ? state.currentArg
      ? [...state.currentCommand.args, state.currentArg]
      : state.currentCommand.args
    : [];
  return {
    ...state,
    currentCommand: state.currentCommand
      ? { ...state.currentCommand, args }
      : null,
    currentArg: { name: value, attr: {} },
    currentParam: null,
  };
};

const handleMin = (state: ParseState, value: string): ParseState => {
  const parsedMin = safeParseJSON(value);
  if (state.currentArg) {
    return {
      ...state,
      currentArg: {
        ...state.currentArg,
        attr: { ...state.currentArg.attr, min: parsedMin },
      },
      currentParam: state.currentParam,
    };
  } else if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, min: parsedMin },
      },
    };
  }
  return state;
};

const handleMax = (state: ParseState, value: string): ParseState => {
  const parsedMax = safeParseJSON(value);
  if (state.currentArg) {
    return {
      ...state,
      currentArg: {
        ...state.currentArg,
        attr: { ...state.currentArg.attr, max: parsedMax },
      },
      currentParam: state.currentParam,
    };
  } else if (state.currentParam) {
    return {
      ...state,
      currentParam: {
        ...state.currentParam,
        attr: { ...state.currentParam.attr, max: parsedMax },
      },
    };
  }
  return state;
};

const handleDefaultCase = (state: ParseState): ParseState => state;

// コマンド確定時にcurrentArgを必ずargsにpushする
const flushCommand = (
  cmd: PluginCommand,
  currentArg: PluginCommandArg | null
): PluginCommand => {
  if (currentArg) {
    return { ...cmd, args: [...cmd.args, currentArg] };
  }
  return cmd;
};

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
      currentArg: null,
    }
  );

  // 最後のcurrentParamを追加
  const params = state.currentParam
    ? [
        ...state.params.filter((p) => p.name !== state.currentParam!.name),
        state.currentParam,
      ]
    : state.params;

  // 最後のcurrentArgをcurrentCommandに追加
  const commands = state.currentCommand
    ? [...state.commands, flushCommand(state.currentCommand, state.currentArg)]
    : state.commands;

  return {
    meta: {},
    params,
    commands,
  };
};

const safeParseJSON = (value: string): any => {
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.map((v) => {
        const num = Number(v);
        return isNaN(num) ? v : num;
      });
    }
    return parsed;
  } catch {
    const num = Number(value);
    if (!isNaN(num)) {
      return num;
    }
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return value;
  }
};
