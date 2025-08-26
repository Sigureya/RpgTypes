import type { EvaluteResult } from "./types/evaluteResult";
import type { EventLoaclVariables } from "./types/state";

export const updateLocalVariable = (
  name: string,
  localValiables: EventLoaclVariables,
  value: EvaluteResult
): EventLoaclVariables => {
  switch (value.type) {
    case "number":
      return {
        ...localValiables,
        numbers: {
          ...localValiables.numbers,
          [name]: value.value,
        },
      };
    case "string":
      return {
        ...localValiables,
        strings: {
          ...localValiables.strings,
          [name]: value.value,
        },
      };
  }
  return localValiables;
};
