import { AudioFileParams } from '../../libs';
import { IndexOfCommandParameter } from './utils/pickParam';
export interface CommandParameter<T> {
    code: number;
    paramIndex: number;
    value: T;
}
export declare const pickCommandParamString: <Params extends unknown[], Index extends IndexOfCommandParameter<{
    code: number;
    parameters: Params;
}, string>>(command: {
    code: number;
    parameters: Params;
}, index: Index) => CommandParameter<Params[Index]>;
export declare const pickCommandParamNumber: <Params extends unknown[], Index extends IndexOfCommandParameter<{
    code: number;
    parameters: Params;
}, number>>(command: {
    code: number;
    parameters: Params;
}, index: Index) => CommandParameter<Params[Index]>;
export declare const pickCommandParamAudio: <Params extends unknown[], Index extends IndexOfCommandParameter<{
    code: number;
    parameters: Params;
}, AudioFileParams>>(command: {
    code: number;
    parameters: Params;
}, index: Index) => CommandParameter<Params[Index]>;
