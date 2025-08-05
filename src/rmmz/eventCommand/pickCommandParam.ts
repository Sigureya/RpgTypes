import type { AudioFileParams } from "@RpgTypes/libs";
import type { IndexOfCommandParameter } from "./utils/pickParam";

export interface CommandParameter<T, Code extends number = number> {
  code: Code;
  paramIndex: number;
  value: T;
}

export const pickCommandParamString = <
  Params extends unknown[],
  Index extends IndexOfCommandParameter<
    { code: number; parameters: Params },
    string
  >,
  Code extends number
>(
  command: { code: Code; parameters: Params },
  index: Index
): CommandParameter<Params[Index], Code> => ({
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
