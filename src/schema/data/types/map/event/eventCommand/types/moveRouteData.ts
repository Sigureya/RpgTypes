import type { MoveRouteCommand } from "./moveRouteCommand";

export interface MoveRouteData {
  wait: boolean;
  repeat: boolean;
  skippable: boolean;
  list: MoveRouteCommand[];
}
