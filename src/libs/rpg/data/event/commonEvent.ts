import type { EventCommandUnknown } from "@RpgTypes/eventCommand/frame";
import type { EventCommand } from "./map";

export interface Data_CommonEvent extends Data_CommonEventLike {
  trigger: number;
  id: number;
  name: string;
  list: EventCommand[];
  switchId: number;
}

export interface Data_CommonEventLike {
  trigger: number;
  id: number;
  name: string;
  list: EventCommandUnknown[];
  switchId: number;
}
