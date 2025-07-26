import type { CommandParamaterType } from "@RpgTypes/rmmz/eventCommand";
import type { EventCommandLike } from "./eventComandLike";
import type { EventCode } from "./eventCommand";

export const createEventCommand = <
  Code extends EventCode,
  Param extends CommandParamaterType<Code>
>(
  code: Code,
  param: Param,
  indent: number = 0
): EventCommandLike<Code, Param> => {
  return {
    code,
    indent,
    parameters: param,
  };
};
