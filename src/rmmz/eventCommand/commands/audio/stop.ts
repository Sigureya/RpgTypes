import type { EventCommandLike, STOP_SE } from "@RpgTypes/libs/eventCommand";

export interface Command_StopSE extends EventCommandLike<typeof STOP_SE, []> {}
