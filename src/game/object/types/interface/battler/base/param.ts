import { ParamId } from "src/game/data/paramArray";

export interface Param {
  paramMin(paramId: ParamId): number;
  paramMax(paramId: ParamId): number;
}
