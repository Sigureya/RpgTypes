import { COMMON_EVENT } from "@RpgTypes/libs/eventCommand";
import type { Command_CommonEvent, ParamObject_CommonEvent } from "./types";
import type { ParamArray_CommonEvent } from "./types";

export const makeCommandCommonEvent = (
  param: Partial<ParamObject_CommonEvent> | undefined,
  indent: number = 0,
): Command_CommonEvent => ({
  code: COMMON_EVENT,
  indent,
  parameters: toArrayCommonEvent(param ?? {}),
});

export const fromArrayCommonEvent = (
  array: ParamArray_CommonEvent,
): ParamObject_CommonEvent => ({
  eventId: array[0],
});

export const toArrayCommonEvent = (
  object: Partial<ParamObject_CommonEvent>,
): ParamArray_CommonEvent => [object.eventId ?? 0];
