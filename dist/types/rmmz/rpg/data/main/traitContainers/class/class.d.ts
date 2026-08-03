import { ParamID } from '../members';
import { ClassParamGlowTable, Data_Class, Data_ClassEx } from './types';
export declare const currentGlowParam: (table: ClassParamGlowTable, level: number, paramId: ParamID) => number;
export declare const makeClassData: (data?: Partial<Data_Class>) => Data_Class;
export declare const makeClassDataEx: (data: Partial<Data_ClassEx>) => Data_Class;
