import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";

export interface CommandContainer<Command extends EventCommandUnknown> {
  list: ReadonlyArray<Command>;
}

export type EventCommandContainer = CommandContainer<EventCommandUnknown>;

export interface MapEventLike {
  id: number;
  pages: EventCommandContainer[];
}

export interface MapEventContext<T> {
  eventId: number;
  pageIndex: number;
  data: T;
}
