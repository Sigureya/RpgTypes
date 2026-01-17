import type { ParamID } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_StatusParams {
  paramMin(paramId: ParamID): number;
  paramMax(paramId: ParamID): number;
}
