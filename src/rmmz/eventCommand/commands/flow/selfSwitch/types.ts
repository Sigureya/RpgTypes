import type { EventCommandLike2 } from "@RpgTypes/rmmz";

export type ParamArray_SelfSwitch = [switchName: string, value: boolean];

export interface ParamObject_SelfSwitch {
  switchName: string;
  value: boolean;
}

export interface Command_SelfSwitch extends EventCommandLike2<123> {
  parameters: ParamArray_SelfSwitch;
}
