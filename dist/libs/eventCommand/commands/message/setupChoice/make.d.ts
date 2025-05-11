import { ParamArray_SetupChoice, ParamObject_SetupChoice, Command2_ShowChoices } from './types/body';
import { ParamObject_ShowChoiceItem, Command2_ShowChoiceItem, ParamArray_ShowChoiceItem } from './types/item';
export declare const makeCommand2_ShowChoiceItem: (param: Partial<ParamObject_ShowChoiceItem> | undefined, indent?: number) => Command2_ShowChoiceItem;
export declare const fromArraySetupChoiceItem: (array: ParamArray_ShowChoiceItem) => ParamObject_ShowChoiceItem;
export declare const toArraySetupChoiceItem: (object: Partial<ParamObject_ShowChoiceItem>) => ParamArray_ShowChoiceItem;
export declare const fromArraySetupChoice: (array: ParamArray_SetupChoice) => ParamObject_SetupChoice;
export declare const toArraySetupChoice: (object: Partial<ParamObject_SetupChoice>) => ParamArray_SetupChoice;
export declare const makeCommandSetupChoice: (param: Partial<ParamObject_SetupChoice> | undefined, indent?: number) => Command2_ShowChoices;
