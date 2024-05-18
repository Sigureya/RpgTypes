import { ParamID } from "@schema/data/members/paramArray";

export interface IParam {
  paramMin(paramId: ParamID): number;
  paramMax(paramId: ParamID): number;
}
