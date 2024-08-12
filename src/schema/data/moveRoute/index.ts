export * from "./code";
export * from "./parameters";
import * as $ from "./code";

type Code = (typeof $)[keyof typeof $];

export type MoveRouteCommandTable = {};

// export interface MoveRouteCommand {
//   code: Code;
//   parameters: MoveRouteParameters[Code];
// }
