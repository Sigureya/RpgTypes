import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { RECOVER_ALL } from "@RpgTypes/rmmz/rpg";

export interface Command_RecoverAll
  extends EventCommandLike2<typeof RECOVER_ALL> {}
