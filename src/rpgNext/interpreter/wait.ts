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
