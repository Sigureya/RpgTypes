import { flashCurrentItem, withTexts } from "./flashState";
import type { ParseState } from "./internalTypes";
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
  KEYWORD_HELP,
  KEYWORD_KIND,
  KEYWORD_OPTION,
  KEYWORD_VALUE,
  KEYWORD_BASE,
  KEYWORD_ORDERAFTER,
  KEYWORD_ORDERBEFORE,
  KEYWORD_AUTHOR,
  KEYWORD_PLUGINDESC,
  KEYWORD_URL,
  KEYWORD_STRUCT,
} from "./keyword/constants";
import type { KeywordEnum } from "./keyword/types";
import {
  handleBase,
  handleOption,
  handleOrderAfter,
  handleOrderBefore,
  handleValue,
} from "./state";
import type { ParsedPlugin, PluginCommandTokens, PluginMeta } from "./types";

export const parsePlugin = (text: string) => {
  return parsePluginCore(text, KEYWORD_FUNC_TABLE);
};

export const parsePluginCore = (
  text: string,
  table: Record<string, (state: ParseState, value: string) => ParseState>
): ParsedPlugin => {
  const lines = text.split(/\r?\n/);

  const state = lines.reduce<ParseState>((acc, line) => {
    const trimmed = line.trim().replace(/^\*\s?/, "");
    if (!trimmed.startsWith("@")) {
      if (acc.currentContext === KEYWORD_HELP) {
        // キーワードが来ない場合はヘルプ行として追加
        return { ...acc, helpLines: acc.helpLines.concat(trimmed) };
      }
      // コメントモード以外 & キーワードが来ない場合は無視
      return acc;
    }

    const [tag, ...rest] = trimmed.slice(1).split(" ");
    const value = rest.join(" ").trim();
    const fn = table[tag as keyof typeof table];

    if (fn) {
      return fn(acc, value);
    }
    return acc;
  }, makeParseState());

  const finalState: ParseState = flashCurrentItem(state);
  return {
    params: finalState.params,
    commands: finalState.commands,
    meta: finalState.meta,
    helpLines: finalState.helpLines,
    structs: [],
  };
};

const makeParseState = (): ParseState => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: {
    base: [],
    orderBefore: [],
    orderAfter: [],
  },
  meta: {},
  structs: [],
});

const handleHelpContext = (oldstate: ParseState): ParseState => {
  const state = flashCurrentItem(oldstate);
  return {
    ...state,
    currentContext: KEYWORD_HELP,
  };
};

const handleParamContext = (
  oldstate: ParseState,
  value: string
): ParseState => {
  const state = flashCurrentItem(oldstate);
  // すでに同名のparamが存在する場合は新しいparamを作らない
  if (state.params.some((p) => p.name === value)) {
    return state;
  }
  return {
    ...state,
    currentContext: KEYWORD_PARAM,
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

const handleCommandContext = (
  oldstate: ParseState,
  value: string
): ParseState => {
  const state: ParseState = flashCurrentItem(oldstate);
  if (state.commands.some((c) => c.command === value)) {
    // すでに同名のcommandが存在する場合は新しいcommandを作らない
    return state;
  }
  return {
    ...state,
    currentCommand: { command: value, args: [] },
    currentParam: null,
  };
};

const handleArgContext = (state: ParseState, value: string): ParseState => {
  if (!state.currentCommand) {
    return state;
  }
  if (state.currentParam) {
    const argAddedCommand: PluginCommandTokens = {
      ...withTexts(state.currentCommand),
      command: state.currentCommand.command,
      args: state.currentCommand.args.concat(state.currentParam),
    };
    return {
      ...state,
      commands: state.commands,
      currentCommand: argAddedCommand,
      currentContext: KEYWORD_ARG,
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
const handlerType = (state: ParseState, value: string): ParseState => {
  if (value.endsWith(">") && value.startsWith("struct<")) {
    const structName = value.slice(7, -1);
    const addSturct = addField(state, KEYWORD_STRUCT, structName);
    return addField(addSturct, KEYWORD_KIND, KEYWORD_STRUCT);
  }
  if (state.currentParam) {
    return addField(state, KEYWORD_KIND, value);
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

const addMetaField = (
  state: ParseState,
  key: keyof PluginMeta,
  value: string
): ParseState => {
  return {
    ...state,
    meta: { [key]: value, ...state.meta },
  };
};

const KEYWORD_FUNC_TABLE = {
  [KEYWORD_PARAM]: handleParamContext,
  [KEYWORD_TEXT]: handleText,
  [KEYWORD_DESC]: handleDesc,
  [KEYWORD_COMMAND]: handleCommandContext,
  [KEYWORD_ARG]: handleArgContext,
  [KEYWORD_HELP]: handleHelpContext,
  [KEYWORD_OPTION]: handleOption,
  [KEYWORD_VALUE]: handleValue,
  [KEYWORD_TYPE]: handlerType,
  [KEYWORD_DEFAULT]: (state, value) => addField(state, KEYWORD_DEFAULT, value),
  [KEYWORD_ON]: (state, value) => addField(state, KEYWORD_ON, value),
  [KEYWORD_OFF]: (state, value) => addField(state, KEYWORD_OFF, value),
  [KEYWORD_MIN]: (state, value) => addField(state, KEYWORD_MIN, value),
  [KEYWORD_MAX]: (state, value) => addField(state, KEYWORD_MAX, value),
  [KEYWORD_BASE]: handleBase,
  [KEYWORD_ORDERAFTER]: handleOrderAfter,
  [KEYWORD_ORDERBEFORE]: handleOrderBefore,
  [KEYWORD_AUTHOR]: (state, val) => addMetaField(state, KEYWORD_AUTHOR, val),
  [KEYWORD_PLUGINDESC]: (s, val) => addMetaField(s, KEYWORD_PLUGINDESC, val),
  [KEYWORD_URL]: (state, val) => addMetaField(state, KEYWORD_URL, val),
} as const satisfies {
  [K in KeywordEnum]?: (state: ParseState, value: string) => ParseState;
};
