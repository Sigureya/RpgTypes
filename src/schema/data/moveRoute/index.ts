export * from "./code";
export * from "./parameters";
export * from "./data";
import { MoveRouteParameters } from "./parameters";

export type MoveRouteCommandTable = {
  [RouteCodeConstants in keyof MoveRouteParameters]: {
    code: RouteCodeConstants;
    parameters: MoveRouteParameters[RouteCodeConstants];
  };
};

export type MoveRouteCommand =
  MoveRouteCommandTable[keyof MoveRouteCommandTable];
