import { PrimitiveParam, PrimitiveStringParam } from './compile/kinds';
export declare const paramHasText: (param: PrimitiveParam) => param is PrimitiveStringParam;
