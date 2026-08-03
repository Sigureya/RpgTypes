import { ParamArray_VariableFromPartyAt, ParamArray_VariableFromItem, ParamArray_VariableFromArmor, ParamArray_VariableFromWeapon } from '../../../../rmmz/eventCommand';
import { Rmmz_VariableSourceParty } from '../../../../rmmzRuntime';
import { Rmmz_VariableSourceProvider } from './types';
export declare const variableFromPartyAt: (params: ParamArray_VariableFromPartyAt, party: Rmmz_VariableSourceParty) => number;
export declare const variableFromItem: (params: ParamArray_VariableFromItem, party: Rmmz_VariableSourceParty, provider: Rmmz_VariableSourceProvider) => number;
export declare const variableFromWeapon: (params: ParamArray_VariableFromWeapon, party: Rmmz_VariableSourceParty, provider: Rmmz_VariableSourceProvider) => number;
export declare const variableFromArmor: (params: ParamArray_VariableFromArmor, party: Rmmz_VariableSourceParty, provider: Rmmz_VariableSourceProvider) => number;
