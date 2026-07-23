import type {
  Command_ControlVariables_FromEnemy,
  Command_ControlVariables_FromActor,
  Command_ControlVariables_FromMapCharactor,
  Command_ControlVariables_FromParty,
  Command_ControlVariables_FromLastData,
  Command_ControlVariables_FromOthre,
} from "./gamedata";
import type { Command_ControlVariables_FromVariable } from "./gameVariable2";
import type {
  Command_ControlVariables_FromArmor,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromWeapon,
} from "./goods";
import type { Command_ControlVariables_FromConstant } from "./literal";
import type { Command_ControlVariables_FromRandom } from "./random";

export type Command_ControlVariables =
  | Command_ControlVariables_FromOthre
  | Command_ControlVariables_FromEnemy
  | Command_ControlVariables_FromConstant
  | Command_ControlVariables_FromActor
  | Command_ControlVariables_FromLastData
  | Command_ControlVariables_FromVariable
  | Command_ControlVariables_FromRandom
  | Command_ControlVariables_FromMapCharactor
  | Command_ControlVariables_FromParty
  | Command_ControlVariables_FromArmor
  | Command_ControlVariables_FromItem
  | Command_ControlVariables_FromWeapon;

export type ParamArray_ControlVariables =
  Command_ControlVariables["parameters"];
