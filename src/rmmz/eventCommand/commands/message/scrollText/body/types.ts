import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";

export type ParamArray_ScrollTextBody = [content: string];
export interface ParamObject_ScrollTextBody {
  content: string;
}
export interface Command_ScrollTextBody extends EventCommandLike<405> {
  parameters: ParamArray_ScrollTextBody;
}
