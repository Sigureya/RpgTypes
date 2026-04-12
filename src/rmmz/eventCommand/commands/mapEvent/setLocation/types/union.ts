import type { Command_SetEventLocationDirect } from "./direct";
import type { Command_SetEventLocationExchange } from "./exchange";
import type { Command_SetEventLocationVariable } from "./variable";

export type Command_SetEventLocation =
  | Command_SetEventLocationDirect
  | Command_SetEventLocationVariable
  | Command_SetEventLocationExchange;

export type ParamArray_SetEventLocation =
  Command_SetEventLocation["parameters"];
