import type { OptionsState } from "./internalTypes";

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

export const finalizeOptions = (state: OptionsState): OptionsState => {
  if (state.currentOption) {
    return {
      items: state.items.concat({
        option: state.currentOption,
        value: state.currentOption,
      }),
    };
  }
  return state;
};
