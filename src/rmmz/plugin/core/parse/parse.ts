import type { Block, PlguinBodyBlock, PlguinStructBlock } from "./block";
import { splitBlock } from "./block";
import { flashCurrentItem, withTexts } from "./flashState";
import type { ParseState } from "./internalTypes";
import {
  handleBase,
  handleOption,
  handleOrderAfter,
  handleOrderBefore,
  handleValue,
} from "./state";
import { typeIsStruct } from "./struct";
import type {
  ParsedPlugin,
  StructParseState,
  PluginCommandTokens,
  PluginMeta,
  KeywordEnum,
} from "./types";
import {
  KEYWORD_HELP,
  KEYWORD_PARAM,
  KEYWORD_TEXT,
  KEYWORD_DESC,
  KEYWORD_ARG,
  KEYWORD_STRUCT,
  KEYWORD_KIND,
  KEYWORD_DEFAULT,
  KEYWORD_ON,
  KEYWORD_OFF,
  KEYWORD_MIN,
  KEYWORD_MAX,
  KEYWORD_AUTHOR,
  KEYWORD_PLUGINDESC,
  KEYWORD_URL,
} from "./types";

export const parsePlugin = (text: string): ParsedPlugin => {
  const blocks: Block = splitBlock(text);
  const structs = blocks.structs.map((s) => parseStructBlock(s));
  const body = getBody(blocks);
  if (!body) {
    return {
      params: [],
      commands: [],
      meta: {},
      helpLines: [],
      structs: structs,
    };
  }

  const finalState = parseBodyBlock(body, KEYWORD_FUNC_TABLE);
  return {
    params: finalState.params,
    commands: finalState.commands,
    meta: finalState.meta,
    helpLines: finalState.helpLines,
    structs: structs,
  };
};

const parseStructBlock = (body: PlguinStructBlock): StructParseState => {
  const state = parseBodyBlock(body, KEYWORD_FUNC_TABLE);
  return {
    name: body.struct,
    params: state.params,
  };
};

const getBody = (block: Block): PlguinBodyBlock | undefined => {
  if (block.bodies.length === 0) {
    return undefined;
  }
  return block.bodies[0];
};

const parseBodyBlock = (
  body: PlguinBodyBlock,
  table: Record<string, (state: ParseState, value: string) => ParseState>
): ParseState => {
  const state = body.lines.reduce<ParseState>((acc, line) => {
    // 先頭の'*'や空白を除去
    const trimmed = line.trimEnd().replace(/^[\*\s]*/, "");
    if (!trimmed.startsWith("@")) {
      // @タグがない場合はヘルプ行として追加するか無視
      if (acc.currentContext === KEYWORD_HELP) {
        return { ...acc, helpLines: acc.helpLines.concat(trimmed) };
      }
      return acc;
    }
    // @タグと値を抽出
    const match = trimmed.match(/^@(\S+)\s*(.*)$/);
    if (!match) {
      return acc;
    }
    const [, tag, value] = match;
    const fn = table[tag];
    if (fn) {
      return fn(acc, value.trim());
    }
    return acc;
  }, makeParseState());
  return flashCurrentItem(state);
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
    return addParamField(state, KEYWORD_TEXT, value);
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
    return addParamField(state, KEYWORD_DESC, value);
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
  if (!state.currentParam) {
    return {
      ...state,
      currentParam: {
        name: value,
        attr: {},
      },
    };
  }
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
};
const handlerType = (state: ParseState, value: string): ParseState => {
  if (typeIsStruct(value)) {
    const structName = value.slice(7, -1);
    const addSturct = addParamField(state, KEYWORD_STRUCT, structName);
    return addParamField(addSturct, KEYWORD_KIND, KEYWORD_STRUCT);
  }
  if (state.currentParam) {
    return addParamField(state, KEYWORD_KIND, value);
  }
  return state;
};

const addParamField = (
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
  param: handleParamContext,
  text: handleText,
  desc: handleDesc,
  command: handleCommandContext,
  arg: handleArgContext,
  help: handleHelpContext,
  option: handleOption,
  value: handleValue,
  type: handlerType,
  default: (state, value) => addParamField(state, KEYWORD_DEFAULT, value),
  on: (state, value) => addParamField(state, KEYWORD_ON, value),
  off: (state, value) => addParamField(state, KEYWORD_OFF, value),
  min: (state, value) => addParamField(state, KEYWORD_MIN, value),
  max: (state, value) => addParamField(state, KEYWORD_MAX, value),
  base: handleBase,
  orderAfter: handleOrderAfter,
  orderBefore: handleOrderBefore,
  author: (state, val) => addMetaField(state, KEYWORD_AUTHOR, val),
  plugindesc: (s, val) => addMetaField(s, KEYWORD_PLUGINDESC, val),
  url: (state, val) => addMetaField(state, KEYWORD_URL, val),
} as const satisfies {
  [K in KeywordEnum]?: (state: ParseState, value: string) => ParseState;
};
