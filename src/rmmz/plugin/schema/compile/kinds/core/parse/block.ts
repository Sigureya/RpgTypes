export interface Block {
  structs: PlguinStructBlock[];
  bodies: PlguinBodyBlock[];
}

export interface PlguinStructBlock {
  locale?: string;
  struct?: string;
  lines: string[];
}

export interface PlguinBodyBlock {
  locale?: string;
  lines: string[];
}

interface BlockState {
  structs: PlguinStructBlock[];
  bodies: PlguinBodyBlock[];
  inStruct: boolean;
  structName?: string;
  locale?: string;
  structLines: string[];
  inBody: boolean;
  bodyLines: string[];
}

const handleBlockEnd = (state: BlockState): BlockState => {
  if (state.inStruct) {
    return {
      ...state,
      structs: state.structs.concat([
        {
          struct: state.structName,
          locale: state.locale,
          lines: [...state.structLines],
        },
      ]),
      inStruct: false,
      structName: undefined,
      locale: undefined,
      structLines: [],
    };
  }
  if (state.inBody) {
    return {
      ...state,
      bodies: state.bodies.concat([{ lines: [...state.bodyLines] }]),
      inBody: false,
      bodyLines: [],
    };
  }
  return state;
};

export const splitBlock = (block: string): Block => {
  const lines = block.split("\n");

  const initialState: BlockState = {
    structs: [],
    bodies: [],
    inStruct: false,
    structName: undefined,
    locale: undefined,
    structLines: [],
    inBody: false,
    bodyLines: [],
  };

  const finalState = lines.reduce<BlockState>((state, line) => {
    const trimmed = line.trim();
    const structMatch = trimmed.match(
      /^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/
    );

    if (structMatch) {
      // flush body if needed
      const bodies =
        state.inBody && state.bodyLines.length > 0
          ? state.bodies.concat([{ lines: [...state.bodyLines] }])
          : state.bodies;
      return {
        ...state,
        bodies,
        inStruct: true,
        structName: structMatch[1],
        locale: structMatch[2],
        structLines: [],
        inBody: false,
        bodyLines: [],
      };
    }
    if (trimmed === "/*:") {
      // flush body if needed
      const bodies =
        state.inBody && state.bodyLines.length > 0
          ? state.bodies.concat([{ lines: [...state.bodyLines] }])
          : state.bodies;
      return {
        ...state,
        bodies,
        inBody: true,
        bodyLines: [],
      };
    }
    if (trimmed === "*/") {
      return handleBlockEnd(state);
    }
    if (state.inStruct) {
      return {
        ...state,
        structLines: state.structLines.concat([trimmed]),
      };
    }
    if (state.inBody) {
      return {
        ...state,
        bodyLines: state.bodyLines.concat([trimmed]),
      };
    }
    return state;
  }, initialState);

  return {
    structs: finalState.structs,
    bodies: finalState.bodies,
  };
};
