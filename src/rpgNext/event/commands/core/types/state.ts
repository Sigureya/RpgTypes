import type { WaitXXX } from "./types";

export interface EventState {
  currentIndex: number;
  params: {};
  picutres: {};
  localValiables: EventLoaclVariables;
  wait: WaitXXX | null;
  child: EventState | null;
}

export interface EventLoaclVariables {
  strings: Record<string, string>;
  numbers: Record<string, number>;
}
