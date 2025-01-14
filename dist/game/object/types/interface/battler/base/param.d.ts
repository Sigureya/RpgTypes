import type { ParamID } from "../../../../../../schema";
export interface IParam {
    paramMin(paramId: ParamID): number;
    paramMax(paramId: ParamID): number;
}
