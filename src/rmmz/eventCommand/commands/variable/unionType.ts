import type { Command_ControlVariables_FromActor } from "./actor";
import type { Command_ControlVariables_FromEnemy } from "./enemy/types";
import type {
  Command_ControlVariables_FromArmor,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromWeapon,
} from "./goods/types";
import type { Command_ControlVariables_FromConstant } from "./literal";
import type { Command_ControlVariables_FromSystem } from "./system";
import type { Command_ControlVariables_FromLastData } from "./templLastData";

export type Command_ControlVariables2 =
  | Command_ControlVariables_FromSystem
  | Command_ControlVariables_FromEnemy
  | Command_ControlVariables_FromConstant
  | Command_ControlVariables_FromActor
  | Command_ControlVariables_FromLastData
  | Command_ControlVariables_FromArmor
  | Command_ControlVariables_FromItem
  | Command_ControlVariables_FromWeapon;

export type ParamArray_ControlVariablesUnion =
  Command_ControlVariables2["parameters"];
