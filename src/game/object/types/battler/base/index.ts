import { Buff } from "./buff";
import { Equip } from "./equip";
import { ItemUser } from "./itemUser";
import { Param } from "./param";
import { State } from "./state";

export interface IBattlerBase extends Equip, Buff, ItemUser, Param, State {}
