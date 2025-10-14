import { PrimitiveParam } from '../../../rmmz/plugin';
import { PrimitiveStructSchema } from './compileFlatStruct';
export declare const structToJSONSchema: <T extends object>(params: Record<keyof T, PrimitiveParam>) => PrimitiveStructSchema<T>;
