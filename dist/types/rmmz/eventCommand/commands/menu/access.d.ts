import { Command_ChangeMenuAccess, Command_ChangeSaveAccess, Command_ChangeFormationAccess } from './types';
export declare const makeCommandDisableMenuAccess: (indent?: number) => Command_ChangeMenuAccess;
export declare const makeCommandEnableMenuAccess: (indent?: number) => Command_ChangeMenuAccess;
export declare const makeCommandDisableSaveAccess: (indent?: number) => Command_ChangeSaveAccess;
export declare const makeCommandEnableSaveAccess: (indent?: number) => Command_ChangeSaveAccess;
export declare const makeCommandDisableFormationAccess: (indent?: number) => Command_ChangeFormationAccess;
export declare const makeCommandEnableFormationAccess: (indent?: number) => Command_ChangeFormationAccess;
