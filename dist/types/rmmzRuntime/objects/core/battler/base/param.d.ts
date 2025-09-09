import { ParamID } from '@sigureya/rpgtypes';
export interface Rmmz_StatusParams {
    paramMin(paramId: ParamID): number;
    paramMax(paramId: ParamID): number;
}
