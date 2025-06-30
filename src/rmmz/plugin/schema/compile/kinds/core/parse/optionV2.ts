import type { OptionItem } from "./selectOption";

export interface OptionsState {
  items: OptionItem[];
  currentOption?: string;
}

export const addValue = (state: OptionsState, value: string): OptionsState => {
  return state.currentOption
    ? {
        items: state.items.concat({
          option: state.currentOption,
          value: value,
        }),
      }
    : {
        items: state.items,
      };
};

export const addOption = (
  state: OptionsState,
  option: string
): OptionsState => {
  return state.currentOption
    ? {
        items: state.items.concat({
          option: state.currentOption,
          value: state.currentOption,
        }),
        currentOption: option,
      }
    : {
        items: state.items,
        currentOption: option,
      };
};
