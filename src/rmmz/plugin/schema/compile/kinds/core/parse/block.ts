export interface Block {
  structs: PlguinStructBlock[];
  bodies: PlguinBodyBlock[];
}

export interface PlguinStructBlock {
  locale?: string;
  struct: string;
  lines: string[];
}

export interface PlguinBodyBlock {
  locale?: string;
  lines: string[];
}

interface BlockState {
  structs: PlguinStructBlock[];
  bodies: PlguinBodyBlock[];
  structName?: string;
  locale?: string;
  lines: string[];
  blockType?:
    | typeof BLCOK_BODY
    | typeof BLCOK_STRUCT
    | typeof BLOCK_INVALID
    | typeof BLOCK_NONE;
}

const BLCOK_BODY = "BODY" as const;
const BLCOK_STRUCT = "STRUCT" as const;
const BLOCK_INVALID = "INVALID" as const;
const BLOCK_NONE = "NONE" as const;

export const splitBlock = (block: string): Block => {
  const lines = block.split("\n");

  const initialState: BlockState = {
    structs: [],
    bodies: [],
    structName: undefined,
    locale: undefined,
    lines: [],
    blockType: BLOCK_NONE,
  };

  const finalState = lines.reduce((state, line): BlockState => {
    const trimmed = line.trim();
    const structMatch = trimmed.match(
      /^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/
    );

    if (structMatch) {
      return handleStructMatch(state, structMatch);
    }
    if (trimmed === "/*:") {
      return handleBlockStart(state);
    }
    if (trimmed === "*/") {
      return state.lines.length > 0 ? handleBlockEnd(state) : state;
    }
    return {
      ...state,
      lines: state.lines.concat([trimmed]),
    };
  }, initialState);

  return {
    structs: finalState.structs,
    bodies: finalState.bodies,
  };
};

const handleStructMatch = (
  state: BlockState,
  structMatch: RegExpMatchArray
): BlockState => {
  const flushed = state.lines.length > 0 ? handleBlockEnd(state) : state;
  // struct名が空文字の場合はstructNameをundefinedにする
  const structName = structMatch[1] || undefined;
  return {
    ...flushed,
    structName,
    blockType: structName ? BLCOK_STRUCT : BLOCK_INVALID,
    locale: structMatch[2],
    lines: [],
  };
};

const handleBlockStart = (state: BlockState): BlockState => {
  const flushed = state.lines.length > 0 ? handleBlockEnd(state) : state;
  return {
    ...flushed,
    blockType: BLCOK_BODY,
    structName: undefined,
    locale: undefined,
    lines: [],
  };
};
const handleBlockEnd = (state: BlockState): BlockState => {
  if (state.blockType === BLCOK_BODY) {
    return {
      ...state,
      bodies: state.bodies.concat([{ lines: [...state.lines] }]),
      lines: [],
      blockType: BLOCK_NONE,
    };
  }

  if (state.structName && state.blockType === BLCOK_STRUCT) {
    return {
      ...state,
      structs: state.structs.concat([
        {
          struct: state.structName,
          locale: state.locale,
          lines: [...state.lines],
        },
      ]),
      blockType: BLOCK_NONE,
      structName: undefined,
      locale: undefined,
      lines: [],
    };
  }

  return {
    ...state,
    blockType: BLOCK_NONE,
    structName: undefined,
    lines: [],
  };
};
