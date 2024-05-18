import { Buff } from "./buff";
import { IEquipable } from "./equipable";
import { ItemUser } from "./itemUser";
import { IParam } from "./param";
import { IState } from "./state";

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
