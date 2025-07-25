import type { Terms_BasicArray } from "./basic";
import type { Terms_CommandArray } from "./commands";
import type { Terms_Messages } from "./messages";
import type { Terms_ParamNamesArray } from "./paramArray";

export interface System_Terms {
  messages: Terms_Messages;
  commands: Terms_CommandArray;
  params: Terms_ParamNamesArray;
  basic: Terms_BasicArray;
}
