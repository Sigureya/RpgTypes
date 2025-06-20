import { KindOfStruct, KindOfStructArray, StructParam } from './plugin';
export declare const isStructDef: (value: StructParam) => value is KindOfStruct<object>;
export declare const isStructDefArray: (value: StructParam) => value is KindOfStructArray<object>;
