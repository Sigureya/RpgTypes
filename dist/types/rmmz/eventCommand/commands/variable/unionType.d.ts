import { Command_ControlVariables_FromGameData } from './gamedata';
import { Command_ControlVariables_FromVariable } from './gameVariable2';
import { Command_ControlVariables_FromConstant } from './literal';
import { Command_ControlVariables_FromRandom } from './random';
export type Command_ControlVariables = Command_ControlVariables_FromConstant | Command_ControlVariables_FromVariable | Command_ControlVariables_FromRandom | Command_ControlVariables_FromGameData;
export type ParamArray_ControlVariables = Command_ControlVariables["parameters"];
