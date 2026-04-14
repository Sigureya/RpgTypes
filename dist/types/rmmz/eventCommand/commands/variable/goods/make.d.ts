import { Command_ControlVariables_FromArmor, Command_ControlVariables_FromItem, Command_ControlVariables_FromWeapon, ParamObject_VariableFromArmor, ParamObject_VariableFromItem, ParamObject_VariableFromWeapon } from './types';
export declare const makeCommandVariableFromItemData: (params: ParamObject_VariableFromItem, indent?: number) => Command_ControlVariables_FromItem;
export declare const makeCommandVariableFromWeapon: (params: ParamObject_VariableFromWeapon, indent?: number) => Command_ControlVariables_FromWeapon;
export declare const makeCommandVariableFromArmor: (params: ParamObject_VariableFromArmor, indent?: number) => Command_ControlVariables_FromArmor;
