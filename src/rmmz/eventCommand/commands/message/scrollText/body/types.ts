import type {
  EventCommandLike,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/libs/eventCommand";

export type ParamArray_ScrollTextBody = [content: string];
export interface ParamObject_ScrollTextBody {
  content: string;
}
export interface Command_ScrollTextBody extends EventCommandLike<
  typeof SHOW_SCROLLING_TEXT_BODY
> {
  parameters: ParamArray_ScrollTextBody;
}
