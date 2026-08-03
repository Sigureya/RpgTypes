import { ParamArray_VariableFromActorStatus, ParamArray_VariableFromEnemyStatus, ParamArray_VariableFromMapCharactor } from '../../../../rmmz/eventCommand';
import { Rmmz_VariableSourceProvider } from './types';
export declare const variableFromActor: (params: ParamArray_VariableFromActorStatus, fallback: number, provider: Rmmz_VariableSourceProvider) => number;
export declare const variableFromEnemy: (params: ParamArray_VariableFromEnemyStatus, fallback: number, provider: Rmmz_VariableSourceProvider) => number;
export declare const variableFromMapCharactor: (params: ParamArray_VariableFromMapCharactor, fallback: number, provider: Rmmz_VariableSourceProvider) => number;
