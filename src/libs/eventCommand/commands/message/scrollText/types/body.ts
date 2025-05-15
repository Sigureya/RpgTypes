import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";

export type ParamArray_ScrollTextBody = [content: string];
export interface ParamObject_ScrollTextBody {
  content: string;
}
export interface Command2_ScrollTextBody extends EventCommandLike2<405> {
  parameters: ParamArray_ScrollTextBody;
}
