import type * as $ from "./code";
import type { AudioFileParams } from "../../../../types";

export type MoveRouteParameters = {
  [$.ROUTE_END]: [];
  [$.ROUTE_PLAY_SE]: [se: AudioFileParams];
  [$.ROUTE_SCRIPT]: [script: string];
};
