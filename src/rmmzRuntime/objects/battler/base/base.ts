import type { Rmmz_BattlerBuffs } from "./buff";
import type { Rmmz_Equipable } from "./equipable";
import type { Rmmz_ItemUser } from "./itemUser";
import type { Rmmz_StatusParams } from "./param";
import type { Rmmz_Stateable } from "./state";

export interface Rmmz_BattlerBase
  extends Rmmz_BattlerBuffs,
    Rmmz_Equipable,
    Rmmz_ItemUser,
    Rmmz_Stateable,
    Rmmz_StatusParams {}
