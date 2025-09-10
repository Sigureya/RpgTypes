import type { Rmmz_ActionBase } from "./action/types";
import type { Rmmz_Battler } from "./battler/battler";

export interface Rmmz_Action extends Rmmz_ActionBase<Rmmz_Battler, {}> {}
