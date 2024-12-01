export * from "./code";
export * from "./parameters";
import type { MoveRouteParameters } from "./parameters";

export type MoveRouteCommandTable = {
  [RouteCodeConstants in keyof MoveRouteParameters]: {
    code: RouteCodeConstants;
    parameters: MoveRouteParameters[RouteCodeConstants];
  };
};

export type MoveRouteCommand =
  MoveRouteCommandTable[keyof MoveRouteCommandTable];
export interface MoveRouteData {
  wait: boolean;
  repeat: boolean;
  skippable: boolean;
  list: MoveRouteCommand[];
}
