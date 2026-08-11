import type { InterpreterState2 } from "./types";

export const waitXXX = (
  state: InterpreterState2,
  waitCode: number,
): InterpreterState2 => {
  return {
    ...state,
    index: state.index + 1,
    waitCode,
  };
};

export const indexNext = (state: InterpreterState2): InterpreterState2 => {
  return {
    ...state,
    index: state.index + 1,
  };
};

export const exitXXX = (): InterpreterState2 => {
  return {
    index: Number.MAX_SAFE_INTEGER,
    indent: 0,
    waitCode: 0,
    ppResult: 0,
  };
};
