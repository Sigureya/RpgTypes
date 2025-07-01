import { addBasePlugin, addOrderAfter, addOrderBefore } from "./dependencies";
import type { ParseState } from "./internalTypes";

export const handleBase = (state: ParseState, value: string): ParseState => {
  return { ...state, dependencies: addBasePlugin(state.dependencies, value) };
};

export const handleOrderAfter = (
  state: ParseState,
  value: string
): ParseState => {
  return {
    ...state,
    dependencies: addOrderAfter(state.dependencies, value),
  };
};

export const handleOrderBefore = (
  state: ParseState,
  value: string
): ParseState => {
  return {
    ...state,
    dependencies: addOrderBefore(state.dependencies, value),
  };
};
