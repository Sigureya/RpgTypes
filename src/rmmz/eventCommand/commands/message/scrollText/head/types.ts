import type {
  EventCommandLike,
  SHOW_SCROLLING_TEXT,
} from "@RpgTypes/libs/eventCommand";

export type ParamArray_ScrollTextHeader = [speed: number, skip: boolean];
export interface ParamObject_ScrollTextHeader {
  speed: number;
  skip: boolean;
}

export interface Command_ScrollTextHeader extends EventCommandLike<
  typeof SHOW_SCROLLING_TEXT
> {
  parameters: ParamArray_ScrollTextHeader;
}
