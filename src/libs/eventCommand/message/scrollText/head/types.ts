import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";

export type ParamArray_ShowScrollTextHead = [speed: number, skip: boolean];
export interface ParamObject_ShowScrollTextHead {
  speed: number;
  skip: boolean;
}
export interface Command2_ShowScrollTextHead extends EventCommandLike2<402> {
  parameters: ParamArray_ShowScrollTextHead;
}
