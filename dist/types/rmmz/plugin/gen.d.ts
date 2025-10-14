import { PluginStructSchemaArray, StructRefParam, StructArrayRefParam } from './core';
import { ScalaParam, ArrayParamTypes } from './core/paramUnion';
export interface Handlers2<ST, STA, S, A> {
    struct: (struct: StructRefParam, name: string, s: PluginStructSchemaArray | null) => ST;
    structArray: (structArray: StructArrayRefParam, name: string, s: PluginStructSchemaArray | null) => STA;
    scala: (param: ScalaParam, name: string) => S;
    array: (param: ArrayParamTypes, name: string) => A;
}
export interface XXX<ST, STA, S, A> {
    structs: ST[];
    structArrays: STA[];
    scalas: S[];
    arrays: A[];
}
export declare const createStructMap3: <ST, STA, S, A>(structSchema: PluginStructSchemaArray, handlers: Handlers2<ST, STA, S, A>, structMap?: ReadonlyMap<string, PluginStructSchemaArray>) => XXX<ST, STA, S, A>;
