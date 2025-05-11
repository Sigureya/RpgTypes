import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";

export type ParamArray_ScrollTextHead = [speed: number, skip: boolean];
export interface ParamObject_ScrollTextHead {
  speed: number;
  skip: boolean;
}

export interface Command2_ScrollTextHead extends EventCommandLike2<105> {
  parameters: ParamArray_ScrollTextHead;
}
