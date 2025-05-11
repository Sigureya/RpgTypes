import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";

export type ParamObject_ScrollTextBody = [content: string];
export interface ParamArray_ScrollTextBody extends ParamObject_ScrollTextBody {
  content: string;
}
export interface Command2_ScrollTextBody extends EventCommandLike2<405> {
  parameters: ParamObject_ScrollTextBody;
}
