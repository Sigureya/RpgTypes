import type { Buff } from "./buff";
import type { IEquipable } from "./equipable";
import type { ItemUser } from "./itemUser";
import type { IParam } from "./param";
import type { IState } from "./state";

export {
  Buff,
  IEquipable as Equip,
  ItemUser,
  IParam as Param,
  IState as State,
};

export interface IBattlerBase
  extends IEquipable,
    Buff,
    ItemUser,
    IParam,
    IState {}
