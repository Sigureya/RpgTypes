import type { EventCommand } from "./eventCommand";

export type PickCommandByParam<P extends unknown[]> = Extract<
  EventCommand,
  { param: P }
>;
