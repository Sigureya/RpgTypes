import type {
  EventCommandLike,
  NAME_INPUT_PROCESSING,
} from "@RpgTypes/libs/eventCommand";

export interface Command_NameInputProcessing extends EventCommandLike<
  typeof NAME_INPUT_PROCESSING
> {
  parameters: ParamArray_NameInputProcessing;
}

export type ParamArray_NameInputProcessing = [actorId: number, param1: unknown];
