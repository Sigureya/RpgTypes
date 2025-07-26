import { ParamObject_ShowChoiceWhen, Command_ShowChoiceWhen, ParamArray_ShowChoiceWhen } from './item/types';
import { ParamArray_SetupChoice, ParamObject_SetupChoice, Command_ShowChoices } from './types/body';
export declare const makeCommandShowChoiceItem: (param: Partial<ParamObject_ShowChoiceWhen> | undefined, indent?: number) => Command_ShowChoiceWhen;
export declare const fromArraySetupChoiceItem: (array: ParamArray_ShowChoiceWhen) => ParamObject_ShowChoiceWhen;
export declare const toArraySetupChoiceItem: (object: Partial<ParamObject_ShowChoiceWhen>) => ParamArray_ShowChoiceWhen;
export declare const fromArraySetupChoice: (array: ParamArray_SetupChoice) => ParamObject_SetupChoice;
export declare const toArraySetupChoice: (object: Partial<ParamObject_SetupChoice>) => ParamArray_SetupChoice;
export declare const makeCommandSetupChoice: (param: Partial<ParamObject_SetupChoice> | undefined, indent?: number) => Command_ShowChoices;
export declare const cloneChoices: (command: Command_ShowChoices) => Command_ShowChoices;
