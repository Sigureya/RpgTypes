import type { AudioFileParams } from "../types/audioFileParams";
import type * as $ from "./code";

export type MoveRouteParameters = {
  [$.ROUTE_END]: [];
  [$.ROUTE_PLAY_SE]: [se: AudioFileParams];
  [$.ROUTE_SCRIPT]: [script: string];
  [$.ROUTE_CHANGE_IMAGE]: [characterName: string, characterIndex: number];
};
