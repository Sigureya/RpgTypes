import type { EventCommand } from "@RpgTypes/rmmz";

export interface InterpreterState2 {
  index: number;
  indent: number;
  waitCode: number;
  ppResult: number;
}

export interface InterpreterXXX {
  source: number;
}

export interface InterpreterGGG {
  state: InterpreterState2;
  sourceInfo: EventSourceInfo;
  commands: EventCommand[];
  mapId: number;
}

export interface EventSourceInfo {
  eventId: number;
  kind: EventSourceType;
}

export type EventSourceType = "common" | "map" | "battle";
