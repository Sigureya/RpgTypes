import type { EventCommand, EventCommandUnknown } from "@RpgTypes/rmmz";
export interface CommandContainer<Command extends EventCommandUnknown> {
  list: ReadonlyArray<Command>;
}

export type EventCommandContainer = CommandContainer<EventCommand>;

export interface MapEventLike {
  id: number;
  pages: EventCommandContainer[];
}

export interface MapEventContext<T> {
  eventId: number;
  pageIndex: number;
  data: T;
}
