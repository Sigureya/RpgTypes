import type { AudioFileParams } from "@RpgTypes/libs";
import type { IndexOfCommandParameter } from "./utils/pickParam";

export interface CommandParameter<T> {
  code: number;
  paramIndex: number;
  value: T;
}

export const pickCommandParamString = <
  Params extends unknown[],
  Index extends IndexOfCommandParameter<
    { code: number; parameters: Params },
    string
  >
>(
  command: { code: number; parameters: Params },
  index: Index
): CommandParameter<Params[Index]> => ({
  code: command.code,
  paramIndex: index,
  value: command.parameters[index],
});

export const pickCommandParamNumber = <
  Params extends unknown[],
  Index extends IndexOfCommandParameter<
    { code: number; parameters: Params },
    number
  >
>(
  command: { code: number; parameters: Params },
  index: Index
): CommandParameter<Params[Index]> => ({
  code: command.code,
  paramIndex: index,
  value: command.parameters[index],
});
export const pickCommandParamAudio = <
  Params extends unknown[],
  Index extends IndexOfCommandParameter<
    { code: number; parameters: Params },
    AudioFileParams
  >
>(
  command: { code: number; parameters: Params },
  index: Index
): CommandParameter<Params[Index]> => ({
  code: command.code,
  paramIndex: index,
  value: command.parameters[index],
});
