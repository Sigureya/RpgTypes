import type { ValueOf } from "src/libs/templates/valueOf";
import type * as EventCommandCodes from "./eventCommandCodes";
import type { IndexOfParameter } from "./types";
export type EventCode = ValueOf<typeof EventCommandCodes>;

export type IndexOfCommandParameter<
  Command extends { parameters: unknown[] },
  T
> = IndexOfParameter<Command["parameters"], T>;
