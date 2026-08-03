import { Rmmz_Battler } from '../../rmmzRuntime';
import { BooleanParam, NumberParam, PluginParamEx, RpgDataIdParam } from '@sigureya/rmmz-plugin-schema';
import { CustomVariables } from './customVariable/types';
import { StateInstanceItemArg } from './state/types';
export interface StateInstanceItem extends StateInstanceItemArg {
    startTurn: number;
    stateId: number;
    turnLimit: number;
    sourceBattlerId: number;
    variables: CustomVariables;
}
export interface StateSchema {
    pluginName: string;
    params: (NumberParam | RpgDataIdParam)[];
    variables: {
        numbers: PluginParamEx<NumberParam>[];
        booleans: PluginParamEx<BooleanParam>[];
    };
}
export declare const createStateInstance: (arg: StateInstanceItemArg, schema: ReadonlyArray<StateSchema>) => StateInstanceItem;
export declare const isStateEnd: (instance: StateInstanceItem, battler: Rmmz_Battler) => boolean;
