import type * as EventCommandCodes from "./eventCommandCodes";
export type EventCode = ValueOf<typeof EventCommandCodes>;
type ValueOf<T> = T[keyof T];
