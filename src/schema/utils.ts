import type * as $ from "./codes";
import type { ValueOf } from "@utils/types";
import type { EventCommandTable } from "./types";

export const createCommand = <T extends ValueOf<typeof $>>(
  code: T,
  parameters: EventCommandTable[T]["parameters"],
  indent = 0
) => ({
  code,
  indent,
  parameters,
});
