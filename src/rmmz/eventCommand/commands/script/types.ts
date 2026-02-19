import type {
  EventCommandLike,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
} from "@RpgTypes/libs/eventCommand";

export type ParamArray_Script = [comment: string];
export interface ParamObject_Script {
  comment: string;
}

export interface Command_ScriptHeader extends EventCommandLike<
  typeof SCRIPT_EVAL,
  ParamArray_Script
> {
  parameters: [string];
}

export interface Command_ScriptBody extends EventCommandLike<
  typeof SCRIPT_EVAL_BODY,
  ParamArray_Script
> {
  parameters: [string];
}
