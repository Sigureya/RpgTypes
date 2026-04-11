import type { AudioFileParams } from "./audioFileParams";

export interface MoveRouteCommandUnknown {
  code: number;
  parameters?: (string | number | AudioFileParams)[];
}
