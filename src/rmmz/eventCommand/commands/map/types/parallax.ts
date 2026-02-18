import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeParallax extends EventCommandLike<284> {
  parameters: ParamArray_ChangeParallax;
}

export type ParamArray_ChangeParallax = [
  parallaxName: string,
  loopX: boolean,
  loopY: boolean,
  sx: number,
  sy: number,
];

export interface ParamObject_ChangeParallax {
  parallaxName: string;
  loopX: boolean;
  loopY: boolean;
  sx: number;
  sy: number;
}
