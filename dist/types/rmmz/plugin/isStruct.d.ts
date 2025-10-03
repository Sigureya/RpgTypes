import { PrimitiveParam, StructArrayRefParam, StructRefParam } from './core/primitiveParams';
export declare const isStructParam: (param: PrimitiveParam) => param is StructRefParam;
export declare const isStructArrayParam: (param: PrimitiveParam) => param is StructArrayRefParam;
