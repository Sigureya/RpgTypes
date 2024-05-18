import { ParamID } from "src/game/data/members/paramArray";

export interface Param {
  paramMin(paramId: ParamID): number;
  paramMax(paramId: ParamID): number;
}
