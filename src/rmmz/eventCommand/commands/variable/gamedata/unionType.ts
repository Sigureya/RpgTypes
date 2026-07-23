import type { Command_ControlVariables_FromVariable } from "../gameVariable2";
import type { Command_ControlVariables_FromRandom } from "../random";
import type {
  Command_ControlVariables_FromActor,
  ParamArray_VariableFromActorStatus,
} from "./actor";
import type {
  Command_ControlVariables_FromEnemy,
  ParamArray_VariableFromEnemyStatus,
} from "./enemy";
import type {
  ParamArray_VariableFromItem,
  ParamArray_VariableFromArmor,
  ParamArray_VariableFromWeapon,
  Command_ControlVariables_FromArmor,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromWeapon,
} from "./goods";
import type {
  Command_ControlVariables_FromMapCharactor,
  ParamArray_VariableFromMapCharactor,
} from "./mapCharactor";
import type {
  Command_ControlVariables_FromOthre,
  Command_ControlVariables_FromPartyAt,
  ParamArray_VariableFromOther,
  ParamArray_VariableFromPartyAt,
} from "./other";
import type {
  Command_ControlVariables_FromLastData,
  ParamArray_VariableFromLastData,
} from "./tempLastData";

export type ParamArray_Variable_FromGameData =
  | ParamArray_VariableFromActorStatus
  | ParamArray_VariableFromEnemyStatus
  | ParamArray_VariableFromMapCharactor
  | ParamArray_VariableFromPartyAt
  | ParamArray_VariableFromOther
  | ParamArray_VariableFromLastData
  | ParamArray_VariableFromItem
  | ParamArray_VariableFromArmor
  | ParamArray_VariableFromWeapon;

export type Command_ControlVariables_FromGameData =
  | Command_ControlVariables_FromOthre
  | Command_ControlVariables_FromEnemy
  | Command_ControlVariables_FromActor
  | Command_ControlVariables_FromLastData
  | Command_ControlVariables_FromVariable
  | Command_ControlVariables_FromRandom
  | Command_ControlVariables_FromMapCharactor
  | Command_ControlVariables_FromPartyAt
  | Command_ControlVariables_FromArmor
  | Command_ControlVariables_FromItem
  | Command_ControlVariables_FromWeapon;
