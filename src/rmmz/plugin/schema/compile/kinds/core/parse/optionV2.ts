import type { OptionItem } from "./selectOption";

export interface OptionsState {
  options: OptionItem[];
  currentOption?: string;
}

export const addValue = (state: OptionsState, value: string): OptionsState => {
  return state.currentOption
    ? {
        options: state.options.concat({
          option: state.currentOption,
          value: value,
        }),
      }
    : {
        options: state.options,
      };
};

export const addOption = (
  state: OptionsState,
  option: string
): OptionsState => {
  return state.currentOption
    ? {
        options: state.options.concat({
          option: state.currentOption,
          value: state.currentOption,
        }),
        currentOption: option,
      }
    : {
        options: state.options,
        currentOption: option,
      };
};
