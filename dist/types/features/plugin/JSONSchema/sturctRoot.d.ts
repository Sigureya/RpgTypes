import { PrimitiveParam } from '../../../rmmz/plugin/core/primitiveParams';
import { PrimitiveStructSchema } from './compileFlatStruct';
export declare const structToJSONSchema: <T extends object>(params: Record<keyof T, PrimitiveParam>) => PrimitiveStructSchema<T>;
