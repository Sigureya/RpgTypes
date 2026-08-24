import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";

export interface Data_CommonEventUnknown<
  Command extends EventCommandUnknown = EventCommandUnknown,
> extends Data_CommonEventLike {
  trigger: number;
  id: number;
  name: string;
  list: Command[];
  switchId: number;
}

export interface Data_CommonEventLike {
  trigger: number;
  id: number;
  name: string;
  list: EventCommandUnknown[];
  switchId: number;
}
