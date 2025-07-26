import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand";

export type ParamArray_ScrollTextHeader = [speed: number, skip: boolean];
export interface ParamObject_ScrollTextHeader {
  speed: number;
  skip: boolean;
}

export interface Command_ScrollTextHeader extends EventCommandLike2<105> {
  parameters: ParamArray_ScrollTextHeader;
}
