import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { RECOVER_ALL } from "@RpgTypes/rmmz/rpg";

export interface Command_RecoverAll
  extends EventCommandLike<typeof RECOVER_ALL> {
  parameters: ParamArray_RecoverAll;
}

export type ParamArray_RecoverAll = [];
