import { addBasePlugin, addOrderAfter, addOrderBefore } from "./dependencies";
import type { OptionsState, ParseState } from "./internalTypes";
import { addOption, addValue } from "./option";

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

export const handleOption = (state: ParseState, value: string): ParseState => {
  if (!state.currentParam) {
    return state;
  }

  const newOption: OptionsState = addOption(
    state.currentOption ?? { items: [] },
    value
  );

  return {
    ...state,
    currentOption: newOption,
  };
};

export const handleValue = (state: ParseState, value: string): ParseState => {
  if (!state.currentOption) {
    return state;
  }
  const newOption: OptionsState = addValue(state.currentOption, value);
  return {
    ...state,
    currentOption: newOption,
  };
};
