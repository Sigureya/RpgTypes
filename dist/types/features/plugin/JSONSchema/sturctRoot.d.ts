import { PrimitiveParam } from '../../../rmmz/plugin/schema/compile';
import { PrimitiveStructSchema } from './compileFlatStruct';
export declare const structToJSONSchema: <T extends object>(params: Record<keyof T, PrimitiveParam>) => PrimitiveStructSchema<T>;
