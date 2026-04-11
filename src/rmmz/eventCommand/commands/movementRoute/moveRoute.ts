import type { MoveRouteCommandUnknown } from "src/libs/utils";

export interface MoveRouteData<
  T extends MoveRouteCommandUnknown = MoveRouteCommandUnknown,
> {
  wait: boolean;
  repeat: boolean;
  skippable: boolean;
  list: T[];
}

export type MoveRouteDataUnkwnown = MoveRouteData<MoveRouteCommandUnknown>;
